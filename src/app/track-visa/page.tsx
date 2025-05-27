"use client";

import { useState } from "react";
import {
  PackageCheck,
  ReceiptText,
  Truck,
  MapPin,
  CheckCircle,
  Search, // Added Search icon for the input field
} from "lucide-react"; // Import necessary icons

// Define a type for the application data you expect to receive
// This should ideally match the structure you decided to return from your API
interface VisaApplicationStatus {
  trackingNumber: string;
  applicant: {
    fullName: string;
    country: string;
  };
  visaDetails: {
    type: string;
    submissionDate: string; // Or Date, depending on how you parse it
  };
  status: {
    current:
      | "Visa Application Received"
      | "Visa Is Being Processed"
      | "Visa Document Validated"
      | "Visa Almost Ready"
      | "Visa Ready";
    history: {
      status:
        | "Visa Application Received"
        | "Visa Is Being Processed"
        | "Visa Document Validated"
        | "Visa Almost Ready"
        | "Visa Ready";
      updatedAt: string; // Or Date
      updatedBy: string;
      notes: string;
    }[];
  };
}

// Define the order and properties of your visa application statuses
const VISA_STATUS_STEPS = [
  {
    key: "Visa Application Received",
    label: "Application Received",
    Icon: ReceiptText, // Icon for 'Visa Application Received'
  },
  {
    key: "Visa Is Being Processed",
    label: "Processing",
    Icon: PackageCheck, // Icon for 'Visa Is Being Processed'
  },
  {
    key: "Visa Document Validated",
    label: "Document Validated",
    Icon: Truck, // Icon for 'Visa Document Validated'
  },
  {
    key: "Visa Almost Ready",
    label: "Almost Ready",
    Icon: MapPin, // Icon for 'Visa Almost Ready'
  },
  {
    key: "Visa Ready",
    label: "Visa Ready",
    Icon: CheckCircle, // Icon for 'Visa Ready'
  },
];

export default function OrderTracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [applicationData, setApplicationData] =
    useState<VisaApplicationStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTrackByNumber = async () => {
    // Reset states
    setApplicationData(null);
    setError(null);
    setLoading(true);

    if (!trackingNumber) {
      setError("Please enter a tracking number.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `/api/track-code?trackingNumber=${encodeURIComponent(trackingNumber)}` // Corrected endpoint to /api/tracking
      );

      const data = await response.json();

      if (response.ok) {
        setApplicationData(data.application);
      } else {
        setError(data.error || "Failed to track application.");
      }
    } catch (err) {
      console.error("Error fetching application:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Helper function to get the date for a specific status from history
  const getStatusDate = (statusKey: string): string | null => {
    const historyItem = applicationData?.status.history.find(
      (item) => item.status === statusKey
    );
    if (historyItem) {
      // Format the date to "Mon DD" or "MMM DD" (e.g., Oct 04)
      return new Date(historyItem.updatedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
      });
    }
    return null;
  };

  // Determine the current step index
  const currentStepIndex = VISA_STATUS_STEPS.findIndex(
    (step) => step.key === applicationData?.status.current
  );

  return (
    <>
      <div className="pages-banner about">
        <div className="base-container w-container">
          <div className="banner-title-wrapper">
            <h1
              data-w-id="fe347540-b17b-7eb6-0d52-86453fd36721"
              style={{ opacity: 1 }}
              className="banner-title"
            >
              Track Your Visa
            </h1>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center bg-gray-50 px-4"
        style={{ marginTop: "60px", marginBottom: "40px" }}
      >
        <div
          className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full "
          style={{ padding: "20px" }}
        >
          {/* Modified Tracking Card Section */}
          <div className="relative p-8 rounded-lg shadow-inner-md  mb-8">
            <h2
              className="font-bold text-gray-800 mb-6 text-center"
              style={{ fontSize: "1.5rem" }}
            >
              Enter Your Tracking Number
            </h2>
            <div className="relative flex items-center mb-6">
              <Search className="absolute left-3 text-gray-400" size={20} />
              <input
                id="trackingInput"
                type="text"
                style={{ padding: "10px 10px 10px 35px" }}
                className="w-full border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 rounded-lg pl-10 pr-4 py-3 text-lg text-gray-800 placeholder-gray-400 shadow-sm"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleTrackByNumber();
                  }
                }}
                placeholder="e.g., 1234-5678"
              />
            </div>
            <button
              style={{ marginTop: "25px", padding: "5px" }}
              className="w-full bg-purple-600 text-white font-semibold text-lg py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              onClick={handleTrackByNumber}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Tracking...
                </>
              ) : (
                <>
                  <Search size={20} /> Track My Visa
                </>
              )}
            </button>
          </div>

          {/* Display Area for Results */}
          <div
            className="mt-8 p-4 min-h-[150px] flex flex-col items-center justify-center"
            style={{ padding: "10px" }}
          >
            {loading && (
              <p className="text-gray-600">Searching for your application...</p>
            )}
            {error && (
              <p className="text-red-600 text-center font-medium">{error}</p>
            )}
            {applicationData && !loading && !error && (
              <div className="text-gray-800 w-full">
                <h2
                  className="font-bold mb-4 text-purple-700 text-center"
                  style={{ fontSize: "1.5rem" }}
                >
                  Application Status
                </h2>

                {/* Visa Status Timeline */}
                <div className="flex justify-between items-start my-8 relative w-full overflow-x-auto pb-4">
                  {/* Progress Line */}
                  <div
                    className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 transform -translate-y-1/2 mx-auto"
                    style={{ width: `calc(100% - 80px)` }}
                  ></div>
                  <div
                    className="absolute top-1/2 left-0 h-1 bg-green-500 transform -translate-y-1/2"
                    style={{
                      width: `calc(${
                        currentStepIndex *
                        (100 / (VISA_STATUS_STEPS.length - 1))
                      }% - ${currentStepIndex > 0 ? "40px" : "0px"})`, // Adjust width for initial offset
                      transition: "width 0.5s ease-in-out",
                    }}
                  ></div>

                  {VISA_STATUS_STEPS.map((step, index) => {
                    const isCompleted = index <= currentStepIndex;
                    const isActive = index === currentStepIndex;
                    const stepDate = getStatusDate(step.key);
                    const IconComponent = step.Icon; // Get the Lucide icon component

                    return (
                      <div
                        key={step.key}
                        className="flex flex-col items-center text-center relative z-10 mx-2 min-w-[120px]"
                        style={{ flexShrink: 0 }}
                      >
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-white mb-2 transition-all duration-300
                            ${isCompleted ? "bg-green-500" : "bg-gray-400"}
                            ${isActive ? "ring-4 ring-green-300" : ""}`}
                        >
                          <IconComponent size={24} />
                        </div>
                        <div
                          className={`text-sm font-semibold transition-colors duration-300
                            ${isCompleted ? "text-green-700" : "text-gray-600"}`}
                        >
                          {step.label}
                        </div>
                        {stepDate && (
                          <div
                            className={`text-xs mt-1 transition-colors duration-300 ${
                              isCompleted ? "text-gray-700" : "text-gray-500"
                            }`}
                          >
                            {stepDate}
                          </div>
                        )}
                        {!stepDate && isCompleted && (
                          <div
                            className={`text-xs mt-1 transition-colors duration-300 ${
                              isCompleted ? "text-gray-700" : "text-gray-500"
                            }`}
                          >
                            {new Date().toLocaleDateString("en-US", {
                              month: "short",
                              day: "2-digit",
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Application Details */}
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-1"
                  style={{ marginTop: "15px" }}
                >
                  <p>
                    <strong>Tracking Number:</strong>{" "}
                    {applicationData.trackingNumber}
                  </p>
                  <p>
                    <strong>Applicant Name:</strong>{" "}
                    {applicationData.applicant.fullName}
                  </p>
                  <p>
                    <strong>Country:</strong>{" "}
                    {applicationData.applicant.country}
                  </p>
                  <p>
                    <strong>Visa Type:</strong>{" "}
                    {applicationData.visaDetails.type}
                  </p>
                  <p className="md:col-span-2">
                    <strong>Current Status:</strong>{" "}
                    <span className="font-semibold text-green-700">
                      {applicationData.status.current}
                    </span>
                  </p>
                </div>
                {applicationData.status.history.length > 0 && (
                  <div className="mt-4">
                    <h3
                      className="font-semibold mb-2"
                      style={{ fontSize: "1.5rem" }}
                    >
                      Full Status History:
                    </h3>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {/* Sort history by date descending for most recent first */}
                      {[...applicationData.status.history]
                        .sort(
                          (a, b) =>
                            new Date(b.updatedAt).getTime() -
                            new Date(a.updatedAt).getTime()
                        )
                        .map((historyItem, index) => (
                          <li key={index}>
                            <strong>{historyItem.status}</strong> on{" "}
                            {new Date(
                              historyItem.updatedAt
                            ).toLocaleDateString()}{" "}
                            at{" "}
                            {new Date(
                              historyItem.updatedAt
                            ).toLocaleTimeString()}{" "}
                            by {historyItem.updatedBy}
                            {historyItem.notes && `: ${historyItem.notes}`}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            {!loading && !error && !applicationData && (
              <p className="text-gray-500 text-center">
                Enter your tracking number above to see your visa application
                status.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
