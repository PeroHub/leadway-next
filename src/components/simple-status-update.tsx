"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ApplicationStatus {
  current: string;
}

interface Application {
  trackingNumber: string;
  status: ApplicationStatus;
}

interface SimpleStatusUpdateProps {
  application: Application;
  onSuccess: (newStatus: string) => void;
  onCancel: () => void;
}

export function SimpleStatusUpdate({
  application,
  onSuccess,
  onCancel,
}: SimpleStatusUpdateProps) {
  const [status, setStatus] = useState(application.status.current);
  const [isUpdating, setIsUpdating] = useState(false);

  const validStatuses = [
    "Visa Application Received",
    "Visa Is Being Processed",
    "Visa Document Validated",
    "Visa Almost Ready",
    "Visa Ready",
  ];

  const handleUpdate = async () => {
    if (status === application.status.current) {
      onCancel();
      return;
    }

    setIsUpdating(true);

    try {
      // First update the status
      const response = await fetch(
        `/api/tracking/${application.trackingNumber}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
            updatedBy: "Admin User",
            notes: `Status updated to ${status}`,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      // Then automatically send email notification
      await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trackingNumber: application.trackingNumber,
          emailType: "status_update",
          customMessage: `Your visa application status has been updated to: ${status}`,
        }),
      }).catch((error) => {
        console.error("Error sending email notification:", error);
        // Continue with success even if email fails
      });

      // Notify parent component of success
      onSuccess(status);
    } catch (error) {
      console.error("Error updating status:", error);
      onCancel();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        marginTop: "20px",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.25rem 0",
      }}
    >
      <Select value={status} onValueChange={setStatus} disabled={isUpdating}>
        <SelectTrigger
          style={{
            height: "2rem",
            width: "180px",
            padding: "0 0.75rem",
            fontSize: "0.875rem",
            borderRadius: "0.375rem",
            border: "1px solid #e2e8f0",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: isUpdating ? "not-allowed" : "pointer",
            opacity: isUpdating ? 0.7 : 1,
          }}
        >
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent
          style={{
            backgroundColor: "white",
            borderRadius: "0.375rem",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e2e8f0",
            zIndex: 50,
            minWidth: "180px",
          }}
        >
          {validStatuses.map((statusOption) => (
            <SelectItem
              key={statusOption}
              value={statusOption}
              style={{
                fontSize: "0.875rem",
                padding: "0.5rem 0.75rem",
                cursor: "pointer",
                transition: "background-color 0.15s ease",
                outline: "none",
              }}
            >
              {statusOption}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div
        style={{
          display: "flex",
          gap: "0.25rem",
        }}
      >
        <Button
          variant="outline"
          size="sm"
          style={{
            height: "2rem",
            padding: "0 0.5rem",
            fontSize: "0.875rem",
            borderRadius: "0.375rem",
            border: "1px solid #e2e8f0",
            backgroundColor: "#f8fafc",
            color: "#334155",
            cursor:
              isUpdating || status === application.status.current
                ? "not-allowed"
                : "pointer",
            opacity:
              isUpdating || status === application.status.current ? 0.7 : 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.15s ease",
            minWidth: "4rem",
          }}
          onClick={handleUpdate}
          disabled={isUpdating || status === application.status.current}
        >
          {isUpdating ? (
            <span
              style={{
                display: "inline-block",
                width: "1rem",
                textAlign: "center",
              }}
            >
              ...
            </span>
          ) : (
            "Save"
          )}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          style={{
            height: "2rem",
            padding: "0 0.5rem",
            fontSize: "0.875rem",
            borderRadius: "0.375rem",
            backgroundColor: "transparent",
            color: "#334155",
            cursor: isUpdating ? "not-allowed" : "pointer",
            opacity: isUpdating ? 0.7 : 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.15s ease",
            minWidth: "4rem",
            border: "1px solid transparent",
            // ":hover": {
            //   backgroundColor: "#f1f5f9",
            // },
          }}
          onClick={onCancel}
          disabled={isUpdating}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
