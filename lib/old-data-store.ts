import type { VisaApplication } from "./types";
import { generateTrackingNumber } from "./utils";

// In-memory data store
const applications: VisaApplication[] = [
  {
    trackingNumber: "5414-0756",
    applicant: {
      fullName: "John Smith",
      country: "United States",
      email: "john.smith@example.com",
      phone: "+1 (555) 123-4567",
    },
    visaDetails: {
      type: "Tourist Visa",
      submissionDate: new Date("2023-05-15T09:24:00"),
      expectedCompletion: new Date("2023-06-15T00:00:00"),
    },
    status: {
      current: "Visa Is Being Processed",
      history: [
        {
          status: "Visa Is Being Processed",
          updatedAt: new Date("2023-05-18T10:30:00"),
          updatedBy: "Admin User",
          notes: "All documents received, processing has begun.",
        },
        {
          status: "Visa Application Received",
          updatedAt: new Date("2023-05-15T09:24:00"),
          updatedBy: "System",
          notes: "Application submitted successfully.",
        },
      ],
    },
    documents: [
      {
        name: "Passport Copy",
        url: "#",
        verified: true,
      },
      {
        name: "Passport Photo",
        url: "#",
        verified: true,
      },
      {
        name: "Proof of Residence",
        url: "#",
        verified: false,
      },
      {
        name: "Financial Documents",
        url: "#",
        verified: false,
      },
    ],
    createdAt: new Date("2023-05-15T09:24:00"),
    updatedAt: new Date("2023-05-18T10:30:00"),
  },
  {
    trackingNumber: "7823-1092",
    applicant: {
      fullName: "Maria Garcia",
      country: "Spain",
      email: "maria.garcia@example.com",
      phone: "+34 612 345 678",
    },
    visaDetails: {
      type: "Business Visa",
      submissionDate: new Date("2023-05-14T14:30:00"),
      expectedCompletion: new Date("2023-06-14T00:00:00"),
    },
    status: {
      current: "Visa Is Being Processed",
      history: [
        {
          status: "Visa Is Being Processed",
          updatedAt: new Date("2023-05-16T11:45:00"),
          updatedBy: "Admin User",
          notes: "Documents under review.",
        },
        {
          status: "Visa Application Received",
          updatedAt: new Date("2023-05-14T14:30:00"),
          updatedBy: "System",
          notes: "Application submitted successfully.",
        },
      ],
    },
    documents: [
      {
        name: "Passport Copy",
        url: "#",
        verified: true,
      },
      {
        name: "Business Letter",
        url: "#",
        verified: true,
      },
      {
        name: "Financial Statements",
        url: "#",
        verified: false,
      },
    ],
    createdAt: new Date("2023-05-14T14:30:00"),
    updatedAt: new Date("2023-05-16T11:45:00"),
  },
  {
    trackingNumber: "3451-9087",
    applicant: {
      fullName: "Ahmed Hassan",
      country: "Egypt",
      email: "ahmed.hassan@example.com",
      phone: "+20 10 1234 5678",
    },
    visaDetails: {
      type: "Student Visa",
      submissionDate: new Date("2023-05-13T11:15:00"),
      expectedCompletion: new Date("2023-06-13T00:00:00"),
    },
    status: {
      current: "Visa Document Validated",
      history: [
        {
          status: "Visa Document Validated",
          updatedAt: new Date("2023-05-20T09:15:00"),
          updatedBy: "Admin User",
          notes: "All documents have been validated.",
        },
        {
          status: "Visa Is Being Processed",
          updatedAt: new Date("2023-05-15T14:20:00"),
          updatedBy: "Admin User",
          notes: "Processing application.",
        },
        {
          status: "Visa Application Received",
          updatedAt: new Date("2023-05-13T11:15:00"),
          updatedBy: "System",
          notes: "Application submitted successfully.",
        },
      ],
    },
    documents: [
      {
        name: "Passport Copy",
        url: "#",
        verified: true,
      },
      {
        name: "Acceptance Letter",
        url: "#",
        verified: true,
      },
      {
        name: "Financial Guarantee",
        url: "#",
        verified: true,
      },
    ],
    createdAt: new Date("2023-05-13T11:15:00"),
    updatedAt: new Date("2023-05-20T09:15:00"),
  },
  {
    trackingNumber: "9012-3456",
    applicant: {
      fullName: "Li Wei",
      country: "China",
      email: "li.wei@example.com",
      phone: "+86 131 2345 6789",
    },
    visaDetails: {
      type: "Work Visa",
      submissionDate: new Date("2023-05-12T16:45:00"),
      expectedCompletion: new Date("2023-06-12T00:00:00"),
    },
    status: {
      current: "Visa Almost Ready",
      history: [
        {
          status: "Visa Almost Ready",
          updatedAt: new Date("2023-05-22T13:40:00"),
          updatedBy: "Admin User",
          notes: "Final review in progress.",
        },
        {
          status: "Visa Document Validated",
          updatedAt: new Date("2023-05-18T10:30:00"),
          updatedBy: "Admin User",
          notes: "All documents validated.",
        },
        {
          status: "Visa Is Being Processed",
          updatedAt: new Date("2023-05-14T09:15:00"),
          updatedBy: "Admin User",
          notes: "Processing application.",
        },
        {
          status: "Visa Application Received",
          updatedAt: new Date("2023-05-12T16:45:00"),
          updatedBy: "System",
          notes: "Application submitted successfully.",
        },
      ],
    },
    documents: [
      {
        name: "Passport Copy",
        url: "#",
        verified: true,
      },
      {
        name: "Employment Contract",
        url: "#",
        verified: true,
      },
      {
        name: "Resume",
        url: "#",
        verified: true,
      },
      {
        name: "Educational Certificates",
        url: "#",
        verified: true,
      },
    ],
    createdAt: new Date("2023-05-12T16:45:00"),
    updatedAt: new Date("2023-05-22T13:40:00"),
  },
  {
    trackingNumber: "6789-0123",
    applicant: {
      fullName: "Priya Sharma",
      country: "India",
      email: "priya.sharma@example.com",
      phone: "+91 98765 43210",
    },
    visaDetails: {
      type: "Family Visa",
      submissionDate: new Date("2023-05-11T10:20:00"),
      expectedCompletion: new Date("2023-06-11T00:00:00"),
    },
    status: {
      current: "Visa Ready",
      history: [
        {
          status: "Visa Ready",
          updatedAt: new Date("2023-05-25T11:30:00"),
          updatedBy: "Admin User",
          notes: "Visa is ready for collection.",
        },
        {
          status: "Visa Almost Ready",
          updatedAt: new Date("2023-05-20T14:45:00"),
          updatedBy: "Admin User",
          notes: "Final review completed.",
        },
        {
          status: "Visa Document Validated",
          updatedAt: new Date("2023-05-16T09:30:00"),
          updatedBy: "Admin User",
          notes: "All documents validated.",
        },
        {
          status: "Visa Is Being Processed",
          updatedAt: new Date("2023-05-13T11:20:00"),
          updatedBy: "Admin User",
          notes: "Processing application.",
        },
        {
          status: "Visa Application Received",
          updatedAt: new Date("2023-05-11T10:20:00"),
          updatedBy: "System",
          notes: "Application submitted successfully.",
        },
      ],
    },
    documents: [
      {
        name: "Passport Copy",
        url: "#",
        verified: true,
      },
      {
        name: "Marriage Certificate",
        url: "#",
        verified: true,
      },
      {
        name: "Birth Certificates",
        url: "#",
        verified: true,
      },
      {
        name: "Financial Documents",
        url: "#",
        verified: true,
      },
    ],
    createdAt: new Date("2023-05-11T10:20:00"),
    updatedAt: new Date("2023-05-25T11:30:00"),
  },
];

// Data store methods
export const dataStore = {
  // Get all applications with optional filtering
  getApplications: (
    filters: { name?: string; country?: string; status?: string } = {},
    page = 1,
    limit = 10
  ) => {
    let filteredApps = [...applications];

    // Apply filters
    if (filters.name) {
      const nameRegex = new RegExp(filters.name, "i");
      filteredApps = filteredApps.filter((app) =>
        nameRegex.test(app.applicant.fullName)
      );
    }

    if (filters.country) {
      filteredApps = filteredApps.filter(
        (app) => app.applicant.country === filters.country
      );
    }

    if (filters.status) {
      filteredApps = filteredApps.filter(
        (app) => app.status.current === filters.status
      );
    }

    // Calculate pagination
    const total = filteredApps.length;
    const startIndex = (page - 1) * limit;
    const paginatedApps = filteredApps.slice(startIndex, startIndex + limit);

    return {
      applications: paginatedApps,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
  },

  // Get application by tracking number
  getApplication: (trackingNumber: string) => {
    return (
      applications.find((app) => app.trackingNumber === trackingNumber) || null
    );
  },

  // Create new application
  createApplication: (applicationData: Partial<VisaApplication>) => {
    try {
      // Generate a unique tracking number
      let trackingNumber = generateTrackingNumber();

      // Ensure the tracking number is unique
      while (
        applications.some((app) => app.trackingNumber === trackingNumber)
      ) {
        trackingNumber = generateTrackingNumber();
      }

      const newApplication: VisaApplication = {
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
          expectedCompletion: applicationData.visaDetails?.expectedCompletion,
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
      };

      applications.push(newApplication);
      return { success: true, trackingNumber };
    } catch (error) {
      console.error("Error creating application:", error);
      return { success: false, error: "Failed to create application" };
    }
  },

  // Update application status
  updateStatus: (
    trackingNumber: string,
    status:
      | "Visa Is Being Processed"
      | "Visa Application Received"
      | "Visa Document Validated"
      | "Visa Almost Ready"
      | "Visa Ready",
    updatedBy: string,
    notes?: string
  ) => {
    const application = applications.find(
      (app) => app.trackingNumber === trackingNumber
    );

    if (!application) {
      return { success: false, error: "Application not found" };
    }

    const statusUpdate = {
      status,
      updatedAt: new Date(),
      updatedBy,
      notes: notes || "",
    };

    application.status.current = status;
    application.status.history.unshift(statusUpdate);
    application.updatedAt = new Date();

    return { success: true };
  },

  // Get stats for dashboard
  getStats: () => {
    const total = applications.length;

    const statusCounts = {
      received: applications.filter(
        (app) => app.status.current === "Visa Application Received"
      ).length,
      processing: applications.filter(
        (app) => app.status.current === "Visa Is Being Processed"
      ).length,
      validated: applications.filter(
        (app) => app.status.current === "Visa Document Validated"
      ).length,
      almostReady: applications.filter(
        (app) => app.status.current === "Visa Almost Ready"
      ).length,
      ready: applications.filter((app) => app.status.current === "Visa Ready")
        .length,
    };

    const recentApplications = [...applications]
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 5);

    return {
      total,
      statusCounts,
      recentApplications,
    };
  },

  // Record email sent
  recordEmail: (trackingNumber: string, emailType: string) => {
    // In a real app, this would store the email record
    console.log(`Email sent for ${trackingNumber}: ${emailType}`);
    return { success: true };
  },
};
