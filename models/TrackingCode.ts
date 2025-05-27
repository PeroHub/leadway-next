import mongoose, { Schema, Document } from "mongoose";

interface IDocument {
  name: string;
  url: string;
  verified: boolean;
}

interface IStatusHistory {
  status: string;
  updatedAt: Date;
  updatedBy: string;
  notes?: string;
}

export interface ITrackingCode extends Document {
  trackingNumber: string; // Format "5414-0756"
  applicant: {
    fullName: string;
    country: string;
    email: string;
    phone?: string;
  };
  visaDetails: {
    type: string;
    submissionDate: Date;
    expectedCompletion?: Date;
  };
  status: {
    current:
      | "Visa Application Received"
      | "Visa Is Being Processed"
      | "Visa Document Validated"
      | "Visa Almost Ready"
      | "Visa Ready";
    history: IStatusHistory[];
  };
  documents: IDocument[];
  createdAt: Date;
  updatedAt: Date;
  emailHistory: {
    type: string;
    sentAt: Date;
    template?: string;
  }[];
}

const DocumentSchema = new Schema<IDocument>({
  name: { type: String, required: true },
  url: { type: String, required: true },
  verified: { type: Boolean, default: false },
});

const EmailHistorySchema = new Schema({
  type: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
  template: { type: String },
});

const StatusHistorySchema = new Schema<IStatusHistory>({
  status: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: String, required: true }, // Could be ObjectId ref to Admin model
  notes: { type: String },
});

const TrackingCodeSchema = new Schema<ITrackingCode>({
  trackingNumber: {
    type: String,
    required: true,
    unique: true,
    match: /^\d{4}-\d{4}$/, // Validates 5414-0756 format
  },
  applicant: {
    fullName: { type: String, required: true },
    country: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
  },
  visaDetails: {
    type: { type: String, required: true },
    submissionDate: { type: Date, default: Date.now },
    expectedCompletion: { type: Date },
  },
  status: {
    current: {
      type: String,
      required: true,
      enum: [
        "Visa Application Received",
        "Visa Is Being Processed",
        "Visa Document Validated",
        "Visa Almost Ready",
        "Visa Ready",
      ],
      default: "Visa Application Received",
    },
    history: [StatusHistorySchema],
  },
  documents: [DocumentSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  emailHistory: [EmailHistorySchema],
});

// Auto-update the updatedAt field
TrackingCodeSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

// Add index for faster queries
TrackingCodeSchema.index({
  "applicant.fullName": "text",
  "applicant.email": 1,
  trackingNumber: 1,
  "status.current": 1,
});

export default mongoose.models.TrackingCode ||
  mongoose.model<ITrackingCode>("TrackingCode", TrackingCodeSchema);
