export interface VisaApplication {
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
    history: {
      status: string;
      updatedAt: Date;
      updatedBy: string; // Admin ID/name
      notes?: string;
    }[];
  };
  documents: {
    name: string;
    url: string;
    verified: boolean;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IDocument {
  name: string;
  url: string;
  verified: boolean;
}

export interface IStatusHistory {
  status: string;
  updatedAt: Date;
  updatedBy: string;
  notes?: string;
}

export interface VisaApplicationNew {
  trackingNumber: string;
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
    current: string;
    history: IStatusHistory[];
  };
  documents: IDocument[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PaginatedResult<T> {
  data: T[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface StatsResult {
  total: number;
  statusCounts: {
    received: number;
    processing: number;
    validated: number;
    almostReady: number;
    ready: number;
  };
  recentApplications: VisaApplication[];
}

export interface EmailHistoryItem {
  type: string;
  sentAt: Date;
  template?: string;
}
