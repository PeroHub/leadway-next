// components/email-history-modal.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { formatDate } from "../../lib/utils"; // Assuming utils.ts is at the root of your project or adjust path

type EmailHistoryItem = {
  type: string;
  sentAt: string;
  template?: string;
  notes?: string; // Add notes if you want to display it
};

type EmailHistoryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  trackingNumber: string | null;
  applicantEmail: string | null; // Pass applicant email to show context
};

export function EmailHistoryModal({
  isOpen,
  onClose,
  trackingNumber,
  applicantEmail,
}: EmailHistoryModalProps) {
  const { toast } = useToast();
  const [emailHistory, setEmailHistory] = useState<EmailHistoryItem[]>([]);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const LIMIT = 10; // Number of items per page

  const fetchEmailHistory = async (page: number) => {
    if (!trackingNumber) return;

    setIsLoadingHistory(true);
    try {
      const response = await fetch(
        `/api/tracking-email-history?trackingNumber=${trackingNumber}&page=${page}&limit=${LIMIT}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch email history");
      }
      const data = await response.json();
      setEmailHistory(data.data || []);
      setTotalPages(data.pagination.totalPages || 1);
    } catch (error) {
      console.error("Error fetching email history:", error);
      toast({
        title: "Error",
        description: "Failed to load email history. Please try again.",
        variant: "destructive",
      });
      setEmailHistory([]);
    } finally {
      setIsLoadingHistory(false);
    }
  };

  useEffect(() => {
    if (isOpen && trackingNumber) {
      fetchEmailHistory(currentPage);
    } else {
      // Reset state when modal is closed
      setEmailHistory([]);
      setCurrentPage(1);
      setTotalPages(1);
      setIsLoadingHistory(true); // Reset for next open
    }
  }, [isOpen, trackingNumber, currentPage]); // Re-fetch when modal opens, tracking number changes, or page changes

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] flex flex-col max-h-[90vh] p-10">
        <DialogHeader>
          <DialogTitle>Email History for {trackingNumber}</DialogTitle>
          <DialogDescription>
            Emails sent to {applicantEmail || "N/A"} regarding this application.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-y-auto">
          {isLoadingHistory ? (
            <div className="text-center p-4 text-muted-foreground">
              Loading email history...
            </div>
          ) : emailHistory.length === 0 ? (
            <div className="text-center p-4 text-muted-foreground">
              No email history found for this application.
            </div>
          ) : (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Type</TableHead>
                    <TableHead>Template</TableHead>
                    <TableHead className="w-[200px]">Sent At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emailHistory.map((email, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {email.type}
                      </TableCell>
                      <TableCell>{email.template || "N/A"}</TableCell>
                      <TableCell>{formatDate(email.sentAt)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
        {emailHistory.length > 0 &&
          totalPages > 1 && ( // Only show pagination if there are multiple pages
            <div className="flex justify-end gap-2 pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePreviousPage}
                disabled={currentPage === 1 || isLoadingHistory}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleNextPage}
                disabled={currentPage === totalPages || isLoadingHistory}
              >
                Next
              </Button>
            </div>
          )}
      </DialogContent>
    </Dialog>
  );
}
