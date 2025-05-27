interface StatusHistoryProps {
  statusHistory?: Array<{
    status: string;
    updatedAt: Date | string;
    updatedBy: string;
    notes?: string;
  }>;
  trackingNumber?: string;
}

export function StatusHistory({ statusHistory = [] }: StatusHistoryProps) {
  // Use provided history or fallback to sample data if empty
  const displayHistory =
    statusHistory.length > 0
      ? statusHistory
      : [
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
        ];

  // Format date function
  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString();
  };

  return (
    <div className="space-y-4">
      {displayHistory.map((history, index) => (
        <div
          key={index}
          className="flex flex-col space-y-2 rounded-lg border p-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div
                className={`h-3 w-3 rounded-full ${
                  history.status === "Visa Application Received"
                    ? "bg-blue-500"
                    : history.status === "Visa Is Being Processed"
                      ? "bg-yellow-500"
                      : history.status === "Visa Document Validated"
                        ? "bg-orange-500"
                        : history.status === "Visa Almost Ready"
                          ? "bg-purple-500"
                          : "bg-green-500"
                }`}
              />
              <span className="font-medium">{history.status}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {formatDate(history.updatedAt)}
            </span>
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Updated by: </span>
            {history.updatedBy}
          </div>
          {history.notes && (
            <div className="text-sm">
              <span className="text-muted-foreground">Notes: </span>
              {history.notes}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
