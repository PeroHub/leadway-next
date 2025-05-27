import { Check, FileText, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DocumentListProps {
  documents?: Array<{
    name: string;
    url: string;
    verified: boolean;
    uploadDate?: string;
  }>;
}

export function DocumentList({ documents = [] }: DocumentListProps) {
  // Use provided documents or fallback to sample data if empty
  const displayDocuments =
    documents.length > 0
      ? documents
      : [
          {
            name: "Passport Copy",
            url: "#",
            verified: true,
            uploadDate: "May 15, 2023",
          },
          {
            name: "Passport Photo",
            url: "#",
            verified: true,
            uploadDate: "May 15, 2023",
          },
          {
            name: "Proof of Residence",
            url: "#",
            verified: false,
            uploadDate: "May 15, 2023",
          },
          {
            name: "Financial Documents",
            url: "#",
            verified: false,
            uploadDate: "May 15, 2023",
          },
        ];

  return (
    <div className="space-y-4">
      {displayDocuments.map((document) => (
        <div
          key={document.name}
          className="flex items-center justify-between rounded-lg border p-4"
        >
          <div className="flex items-center space-x-4">
            <div className="rounded-md bg-muted p-2">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium">{document.name}</p>
              <p className="text-xs text-muted-foreground">
                Uploaded on {document.uploadDate || "N/A"}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge
              variant="outline"
              className={
                document.verified
                  ? "border-green-500 text-green-500"
                  : "border-yellow-500 text-yellow-500"
              }
            >
              {document.verified ? (
                <Check className="mr-1 h-3 w-3" />
              ) : (
                <X className="mr-1 h-3 w-3" />
              )}
              {document.verified ? "Verified" : "Pending Verification"}
            </Badge>
            <Button variant="outline" size="sm">
              View
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
