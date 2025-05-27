import mongoose, { Schema, Document } from "mongoose";

interface IDocument {
  fieldName: string; // e.g. "Upload your International Passport"
  fileUrl: string; // e.g. "/uploads/abc123.pdf"
  fileName: string; // original file name
}

export interface ISubmission extends Document {
  sectionTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  additionalInfo?: string;
  status?: string;
  trackingCode?: string;
  documents: IDocument[];
  createdAt: Date;
}

const DocumentSchema = new Schema<IDocument>({
  fieldName: { type: String, required: true },
  fileUrl: { type: String, required: true },
  fileName: { type: String, required: true },
});

const SubmissionSchema = new Schema<ISubmission>({
  sectionTitle: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  additionalInfo: { type: String },
  status: { type: String, required: true },
  trackingCode: { type: String, required: true },
  documents: [DocumentSchema],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Submission ||
  mongoose.model<ISubmission>("Submission", SubmissionSchema);
