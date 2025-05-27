import {
  VisaApplicationNew,
  PaginatedResult,
  StatsResult,
  EmailHistoryItem,
} from "./types";
import TrackingCode from "../models/TrackingCode";
import { FilterQuery } from "mongoose";
import dbConnect from "./mongodb"; // Your improved connection handler
import mongoose from "mongoose";

// Retry configuration
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

// Utility function with better uniqueness guarantee
export const generateTrackingNumber = async (): Promise<string> => {
  const randomPart1 = Math.floor(1000 + Math.random() * 9000);
  const randomPart2 = Math.floor(1000 + Math.random() * 9000);
  const trackingNumber = `${randomPart1}-${randomPart2}`;

  // Verify uniqueness (extremely rare to need retry)
  const exists = await TrackingCode.exists({ trackingNumber });
  return exists ? generateTrackingNumber() : trackingNumber;
};

// Helper function for retryable operations
async function withRetry<T>(
  operation: () => Promise<T>,
  retries = MAX_RETRIES
): Promise<T> {
  try {
    await dbConnect(); // Ensure connection before each operation
    return await operation();
  } catch (error) {
    if (retries <= 0) throw error;
    await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
    return withRetry(operation, retries - 1);
  }
}

export const dataStore = {
  // Get all applications with optional filtering
  async getApplications(
    filters: { name?: string; country?: string; status?: string } = {},
    page = 1,
    limit = 10
  ): Promise<PaginatedResult<VisaApplicationNew>> {
    return withRetry(async () => {
      const query: FilterQuery<VisaApplicationNew> = {};

      if (filters.name) {
        query["applicant.fullName"] = { $regex: filters.name, $options: "i" };
      }

      if (filters.country) {
        query["applicant.country"] = filters.country;
      }

      if (filters.status) {
        query["status.current"] = filters.status;
      }

      const [data, total] = await Promise.all([
        TrackingCode.find(query)
          .sort({ createdAt: -1 })
          .skip((page - 1) * limit)
          .limit(limit)
          .lean()
          .maxTimeMS(10000), // 10 second timeout for this query
        TrackingCode.countDocuments(query).maxTimeMS(5000), // 5 second timeout for count
      ]);

      return {
        data: data as unknown as VisaApplicationNew[],
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      };
    });
  },

  // Get application by tracking number
  async getApplication(
    trackingNumber: string
  ): Promise<VisaApplicationNew | null> {
    return withRetry(async () => {
      const application = await TrackingCode.findOne({ trackingNumber })
        .lean()
        .maxTimeMS(5000);
      return application as VisaApplicationNew | null;
    });
  },

  // Create new application with transaction support
  async createApplication(
    applicationData: Partial<VisaApplicationNew>
  ): Promise<{ success: boolean; trackingNumber?: string; error?: string }> {
    try {
      const session = await mongoose.startSession();
      session.startTransaction();

      try {
        const trackingNumber = await generateTrackingNumber();

        const newApplication = await TrackingCode.create(
          [
            {
              trackingNumber,
              applicant: {
                fullName: applicationData.applicant?.fullName || "",
                country: applicationData.applicant?.country || "",
                email: applicationData.applicant?.email || "",
                phone: applicationData.applicant?.phone,
              },
              visaDetails: {
                type: applicationData.visaDetails?.type || "",
                submissionDate: new Date(),
                expectedCompletion:
                  applicationData.visaDetails?.expectedCompletion,
              },
              status: {
                current: "Visa Application Received",
                history: [
                  {
                    status: "Visa Application Received",
                    updatedAt: new Date(),
                    updatedBy: "System",
                    notes: "Application submitted successfully.",
                  },
                ],
              },
              documents: applicationData.documents || [],
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ],
          { session }
        );

        await session.commitTransaction();
        return {
          success: true,
          trackingNumber: newApplication[0].trackingNumber,
        };
      } catch (error) {
        await session.abortTransaction();
        throw error;
      } finally {
        session.endSession();
      }
    } catch (error) {
      console.error("Error creating application:", error);
      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to create application",
      };
    }
  },

  // Update application status with better concurrency control
  async updateStatus(
    trackingNumber: string,
    status:
      | "Visa Application Received"
      | "Visa Is Being Processed"
      | "Visa Document Validated"
      | "Visa Almost Ready"
      | "Visa Ready",
    updatedBy: string,
    notes?: string
  ): Promise<{ success: boolean; error?: string }> {
    return withRetry(async () => {
      const statusUpdate = {
        status,
        updatedAt: new Date(),
        updatedBy,
        notes: notes || "",
      };

      const result = await TrackingCode.findOneAndUpdate(
        { trackingNumber },
        {
          $set: {
            "status.current": status,
            updatedAt: new Date(),
          },
          $push: { "status.history": statusUpdate },
        },
        { new: true }
      );

      if (!result) {
        return { success: false, error: "Application not found" };
      }

      return { success: true };
    });
  },

  // Get stats for dashboard with optimized queries
  async getStats(): Promise<StatsResult> {
    return withRetry(async () => {
      const [total, statusAggregation, recentApplicationsRaw] =
        await Promise.all([
          TrackingCode.countDocuments().maxTimeMS(5000),
          TrackingCode.aggregate([
            {
              $group: {
                _id: "$status.current",
                count: { $sum: 1 },
              },
            },
          ]).option({ maxTimeMS: 5000 }),
          TrackingCode.find()
            .sort({ createdAt: -1 })
            .limit(5)
            .lean()
            .maxTimeMS(5000),
        ]);

      // Convert aggregation to status counts
      const statusCounts = statusAggregation.reduce(
        (acc: Record<string, number>, curr: { _id: string; count: number }) => {
          acc[curr._id.toLowerCase().replace(/\s+/g, "")] = curr.count;
          return acc;
        },
        {} as Record<string, number>
      );

      return {
        total,
        statusCounts: {
          received: statusCounts["visaapplicationreceived"] || 0,
          processing: statusCounts["visaisbeingprocessed"] || 0,
          validated: statusCounts["visadocumentvalidated"] || 0,
          almostReady: statusCounts["visaalmostready"] || 0,
          ready: statusCounts["visaready"] || 0,
        },
        recentApplications: (
          recentApplicationsRaw as unknown as VisaApplicationNew[]
        ).map((app) => ({
          ...app,
          status: {
            ...app.status,
            current: app.status.current as
              | "Visa Application Received"
              | "Visa Is Being Processed"
              | "Visa Document Validated"
              | "Visa Almost Ready"
              | "Visa Ready",
          },
        })),
      };
    });
  },

  // Record email with better error handling
  async recordEmail(
    trackingNumber: string,
    emailType: string,
    template?: string
  ): Promise<{ success: boolean }> {
    return withRetry(async () => {
      const result = await TrackingCode.updateOne(
        { trackingNumber },
        {
          $push: {
            emailHistory: {
              type: emailType,
              sentAt: new Date(),
              template,
            },
          },
        }
      );

      return {
        success: result.modifiedCount > 0 || result.matchedCount > 0,
      };
    });
  },

  // Get email history with pagination
  async getEmailHistory(
    trackingNumber: string,
    page = 1,
    limit = 10
  ): Promise<PaginatedResult<EmailHistoryItem>> {
    return withRetry(async () => {
      const [data] = await Promise.all([
        TrackingCode.aggregate([
          { $match: { trackingNumber } },
          { $project: { emailHistory: 1 } },
          { $unwind: "$emailHistory" },
          { $replaceRoot: { newRoot: "$emailHistory" } },
          { $sort: { sentAt: -1 } },
          { $skip: (page - 1) * limit },
          { $limit: limit },
        ]),
        TrackingCode.aggregate([
          { $match: { trackingNumber } },
          { $project: { count: { $size: "$emailHistory" } } },
        ]),
      ]);

      return {
        data: data as EmailHistoryItem[],
        pagination: {
          total: data.length > 0 ? data[0].count : 0,
          page,
          limit,
          totalPages: Math.ceil((data.length > 0 ? data[0].count : 0) / limit),
        },
      };
    });
  },
};
