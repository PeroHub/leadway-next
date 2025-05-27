import { CheckCircle2, Circle } from "lucide-react";

interface StatusTimelineProps {
  currentStatus: string;
}

export function StatusTimeline({ currentStatus }: StatusTimelineProps) {
  const statuses = [
    "Visa Application Received",
    "Visa Is Being Processed",
    "Visa Document Validated",
    "Visa Almost Ready",
    "Visa Ready",
  ];

  const getCurrentStatusIndex = () => {
    return statuses.findIndex((status) => status === currentStatus);
  };

  const isCompleted = (index: number) => {
    return index <= getCurrentStatusIndex();
  };

  const isCurrent = (index: number) => {
    return index === getCurrentStatusIndex();
  };

  return (
    <div className="space-y-8">
      <div className="relative">
        {/* Horizontal line connecting all steps */}
        <div className="absolute left-5 top-5 h-0.5 w-[calc(100%-40px)] bg-muted" />

        <div className="relative z-10 flex justify-between">
          {statuses.map((status, index) => (
            <div key={status} className="flex flex-col items-center space-y-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  isCompleted(index)
                    ? "border-green-500 bg-green-50 text-green-500"
                    : "border-muted bg-background text-muted-foreground"
                } ${isCurrent(index) ? "border-green-500 ring-2 ring-green-200" : ""}`}
              >
                {isCompleted(index) ? (
                  <CheckCircle2 className="h-6 w-6" />
                ) : (
                  <Circle className="h-6 w-6" />
                )}
              </div>
              <span
                className={`max-w-[120px] text-center text-xs font-medium ${
                  isCompleted(index)
                    ? "text-green-500"
                    : "text-muted-foreground"
                }`}
              >
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
