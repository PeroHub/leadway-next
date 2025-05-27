"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Copy, MoreHorizontal, UserPlus, Search, X, Mail } from "lucide-react"; // Import Mail icon

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "../../../../lib/utils"; // Adjust path as needed
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { SimpleStatusUpdate } from "@/components/simple-status-update";
import { EmailHistoryModal } from "@/components/EmailHistoryModal"; // Import the new modal component

type Application = {
  trackingNumber: string;
  applicant: {
    fullName: string;
    email: string; // Ensure email is available in this type
    country: string;
  };
  status: {
    current: string;
  };
  visaDetails: {
    submissionDate: string;
  };
  // Add emailHistory type if you plan to fetch it with the main application list
  // For now, we'll fetch it separately in the modal
  // emailHistory?: EmailHistoryItem[];
};

export default function ApplicationsPage() {
  const { toast } = useToast();
  const [applications, setApplications] = useState<Application[]>([]);
  const [allApplications, setAllApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [updatingApplication, setUpdatingApplication] = useState<string | null>(
    null
  );

  // State for Email History Modal
  const [isEmailHistoryModalOpen, setIsEmailHistoryModalOpen] = useState(false);
  const [selectedTrackingNumber, setSelectedTrackingNumber] = useState<
    string | null
  >(null);
  const [selectedApplicantEmail, setSelectedApplicantEmail] = useState<
    string | null
  >(null);

  const fetchApplications = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/tracking");
      const data = await response.json();
      const apps = data.applications || [];
      setApplications(apps);
      setAllApplications(apps);
    } catch (error) {
      console.error("Error fetching applications:", error);
      toast({
        title: "Error",
        description: "Failed to load applications. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      setApplications(allApplications);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const filtered = allApplications.filter(
      (app) =>
        app.trackingNumber.toLowerCase().includes(query) ||
        app.applicant.fullName.toLowerCase().includes(query)
    );

    setApplications(filtered);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setApplications(allApplications);
  };

  const copyTrackingNumber = (trackingNumber: string) => {
    navigator.clipboard.writeText(trackingNumber);
    toast({
      title: "Copied",
      description: `Tracking number ${trackingNumber} copied to clipboard`,
    });
  };

  const handleStatusUpdateSuccess = (
    trackingNumber: string,
    newStatus: string
  ) => {
    const updateAppList = (appList: Application[]) =>
      appList.map((app) =>
        app.trackingNumber === trackingNumber
          ? {
              ...app,
              status: {
                ...app.status,
                current: newStatus,
              },
            }
          : app
      );

    setApplications(updateAppList(applications));
    setAllApplications(updateAppList(allApplications));
    setUpdatingApplication(null);

    // Find the email of the applicant whose status was updated
    const updatedApplicant = allApplications.find(
      (app) => app.trackingNumber === trackingNumber
    )?.applicant.email;

    function sendEmail() {
      fetch("/api/tracking-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trackingNumber,
          applicantEmail: updatedApplicant, // Pass the applicant's email
          emailType: "status_update",
          customMessage: `Your visa application status has been updated to ${newStatus}.`,
        }),
      })
        .then(() => {
          toast({
            title: "Email Sent",
            description: "Email notification sent to applicant",
          });
        })
        .catch(() => {
          toast({
            title: "Error",
            description: "Failed to send email",
            variant: "destructive",
          });
        });
    }

    sendEmail();

    toast({
      title: "Status Updated",
      description: `Application status updated to ${newStatus}`,
    });
  };

  // Status badge styles
  const getStatusBadgeStyle = (status: string) => {
    const baseStyle = {
      borderRadius: "6px",
      padding: "4px 8px",
      fontWeight: 500,
      fontSize: "0.75rem",
      lineHeight: "1.25",
      display: "inline-flex",
      alignItems: "center",
    };

    switch (status) {
      case "Visa Application Received":
        return {
          ...baseStyle,
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          color: "#1d4ed8",
          border: "1px solid #3b82f6",
        };
      case "Visa Is Being Processed":
        return {
          ...baseStyle,
          backgroundColor: "rgba(234, 179, 8, 0.1)",
          color: "#854d0e",
          border: "1px solid #eab308",
        };
      case "Visa Document Validated":
        return {
          ...baseStyle,
          backgroundColor: "rgba(249, 115, 22, 0.1)",
          color: "#9a3412",
          border: "1px solid #f97316",
        };
      case "Visa Almost Ready":
        return {
          ...baseStyle,
          backgroundColor: "rgba(168, 85, 247, 0.1)",
          color: "#6b21a8",
          border: "1px solid #a855f7",
        };
      default:
        return {
          ...baseStyle,
          backgroundColor: "rgba(34, 197, 94, 0.1)",
          color: "#166534",
          border: "1px solid #22c55e",
        };
    }
  };

  const openEmailHistoryModal = (
    trackingNumber: string,
    applicantEmail: string
  ) => {
    setSelectedTrackingNumber(trackingNumber);
    setSelectedApplicantEmail(applicantEmail);
    setIsEmailHistoryModalOpen(true);
  };

  const closeEmailHistoryModal = () => {
    setIsEmailHistoryModalOpen(false);
    setSelectedTrackingNumber(null);
    setSelectedApplicantEmail(null);
  };

  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh", // Keep minHeight for full page background
        padding: "1rem", // Add padding for overall responsiveness
        boxSizing: "border-box",
      }}
    >
      <Toaster />
      <div
        style={{
          // maxWidth: "1600px",
          margin: "0 auto",
          width: "100%", // Ensure it takes full width up to maxWidth
        }}
      >
        {/* Header Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", // Allow items to wrap on smaller screens
            justifyContent: "space-between", // Space between title and button
            alignItems: "center",
            marginBottom: "1.5rem",
            gap: "1rem", // Gap between items when they wrap
          }}
        >
          <h2
            style={{
              fontSize: "1.875rem", // Larger font for big screens
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#0f172a",
              margin: 0,
              flexShrink: 0, // Prevent shrinking
            }}
          >
            All Tracking Codes
          </h2>
          <Link href="/admin/tracking/new" style={{ flexShrink: 0 }}>
            {" "}
            {/* Prevent Link from shrinking */}
            <Button
              style={{
                backgroundColor: "#3b82f6",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                color: "white",
                fontWeight: 500,
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                transition: "all 0.15s ease",
                border: "none",
                cursor: "pointer",
                marginTop: "30px",
                // Remove width: "100%" and justifyContent: "center" here
                // Let flexbox handle the sizing
              }}
            >
              <UserPlus style={{ width: "1rem", height: "1rem" }} />
              <span>Generate Tracking Code</span>
            </Button>
          </Link>
        </div>

        {/* Main Card */}
        <Card
          style={{
            borderRadius: "0.5rem",
            boxShadow:
              "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e2e8f0",
            width: "100%", // Ensure card takes full available width
          }}
        >
          <CardHeader style={{ padding: "1.5rem" }}>
            {" "}
            {/* Consistent padding */}
            <CardTitle
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "#0f172a",
                margin: 0,
              }}
            >
              Visa Applications
            </CardTitle>
            <CardDescription
              style={{
                fontSize: "0.875rem",
                color: "#64748b",
                marginTop: "0.25rem",
              }}
            >
              Manage and track all visa applications in the system.
            </CardDescription>
          </CardHeader>

          <CardContent style={{ padding: "0 1.5rem 1.5rem" }}>
            {" "}
            {/* Consistent padding */}
            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              style={{
                display: "flex",
                flexWrap: "wrap", // Allow items to wrap
                gap: "0.75rem",
                marginBottom: "1rem",
                alignItems: "center", // Align items vertically
              }}
            >
              <div
                style={{
                  position: "relative",
                  flex: "1 1 250px", // flex-grow, flex-shrink, basis (min-width for input)
                  minWidth: "250px", // Ensures input doesn't get too small
                }}
              >
                <Search
                  style={{
                    position: "absolute",
                    left: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "1rem",
                    height: "1rem",
                    color: "#94a3b8",
                  }}
                />
                <Input
                  placeholder="Search by name or tracking number..."
                  style={{
                    height: "2.5rem",
                    width: "100%", // Input takes full width of its flex item
                    paddingLeft: "2.5rem",
                    borderRadius: "0.375rem",
                    border: "1px solid #e2e8f0",
                    fontSize: "0.875rem",
                  }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    style={{
                      position: "absolute",
                      right: "0.75rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#94a3b8",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <X style={{ width: "1rem", height: "1rem" }} />
                    <span style={{ display: "none" }}>Clear</span>
                  </button>
                )}
              </div>
              <Button
                type="submit"
                variant="outline"
                size="sm"
                style={{
                  height: "2.5rem",
                  borderRadius: "0.375rem",
                  border: "1px solid #e2e8f0",
                  backgroundColor: "white",
                  color: "#334155",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  marginTop: "40px", // Keep this if you want it aligned with the bottom of the input
                  padding: "0 0.75rem",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  flexShrink: 0, // Prevent button from shrinking
                  // Remove marginTop: "20px" as flexbox handles alignment
                }}
              >
                Search
              </Button>
            </form>
            {/* Table Container - Only this section scrolls horizontally */}
            <div
              style={{
                borderRadius: "0.375rem",
                border: "1px solid #e2e8f0",
                overflowX: "auto", // This is the key for horizontal scrolling
                width: "100%",
                WebkitOverflowScrolling: "touch", // For smoother scrolling on iOS
              }}
            >
              {/* IMPORTANT: No whitespace between these table tags */}
              <Table style={{ minWidth: "1200px" }}>
                <TableHeader>
                  <TableRow>
                    <TableHead
                      style={{
                        padding: "0.75rem 1rem",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#64748b",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Tracking Number
                    </TableHead>
                    <TableHead
                      style={{
                        padding: "0.75rem 1rem",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#64748b",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Applicant
                    </TableHead>
                    <TableHead
                      style={{
                        padding: "0.75rem 1rem",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#64748b",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Country
                    </TableHead>
                    <TableHead
                      style={{
                        padding: "0.75rem 1rem",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#64748b",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Status
                    </TableHead>
                    <TableHead
                      style={{
                        padding: "0.75rem 1rem",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#64748b",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Submission Date
                    </TableHead>
                    <TableHead
                      style={{
                        padding: "0.75rem 1rem",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#64748b",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        textAlign: "right",
                      }}
                    >
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        style={{
                          textAlign: "center",
                          padding: "2rem",
                          color: "#64748b",
                        }}
                      >
                        Loading applications...
                      </TableCell>
                    </TableRow>
                  ) : applications.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        style={{
                          textAlign: "center",
                          padding: "2rem",
                          color: "#64748b",
                        }}
                      >
                        No applications found.{" "}
                        {searchQuery && "Try a different search term."}
                      </TableCell>
                    </TableRow>
                  ) : (
                    applications.map((application) => (
                      <TableRow
                        key={application.trackingNumber}
                        style={{
                          backgroundColor: "white",
                          borderBottom: "1px solid #f1f5f9",
                          transition: "background-color 0.15s ease",
                        }}
                      >
                        <TableCell
                          style={{
                            padding: "1rem",
                            fontSize: "0.875rem",
                            color: "#0f172a",
                            fontWeight: 500,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                            }}
                          >
                            {application.trackingNumber}
                            <Button
                              variant="ghost"
                              size="icon"
                              style={{
                                width: "1.5rem",
                                height: "1.5rem",
                                padding: 0,
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: "#64748b",
                              }}
                              title="Copy tracking number"
                              onClick={() =>
                                copyTrackingNumber(application.trackingNumber)
                              }
                            >
                              <Copy
                                style={{ width: "0.75rem", height: "0.75rem" }}
                              />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell style={{ padding: "1rem" }}>
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                fontSize: "0.875rem",
                                color: "#0f172a",
                                fontWeight: 500,
                              }}
                            >
                              {application.applicant.fullName}
                            </span>
                            <span
                              style={{
                                fontSize: "0.75rem",
                                color: "#64748b",
                              }}
                            >
                              {application.applicant.email}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell
                          style={{
                            padding: "1rem",
                            fontSize: "0.875rem",
                            color: "#0f172a",
                          }}
                        >
                          {application.applicant.country}
                        </TableCell>
                        <TableCell style={{ padding: "1rem" }}>
                          {updatingApplication ===
                          application.trackingNumber ? (
                            <SimpleStatusUpdate
                              application={application}
                              onSuccess={(newStatus) =>
                                handleStatusUpdateSuccess(
                                  application.trackingNumber,
                                  newStatus
                                )
                              }
                              onCancel={() => setUpdatingApplication(null)}
                            />
                          ) : (
                            <Badge
                              style={getStatusBadgeStyle(
                                application.status.current
                              )}
                            >
                              {application.status.current}
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell
                          style={{
                            padding: "1rem",
                            fontSize: "0.875rem",
                            color: "#0f172a",
                          }}
                        >
                          {formatDate(application.visaDetails.submissionDate)}
                        </TableCell>
                        <TableCell
                          style={{
                            padding: "1rem",
                            textAlign: "right",
                          }}
                        >
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                style={{
                                  width: "2rem",
                                  height: "2rem",
                                  padding: 0,
                                  background: "none",
                                  border: "none",
                                  cursor: "pointer",
                                  color: "#64748b",
                                }}
                              >
                                <span style={{ display: "none" }}>
                                  Open menu
                                </span>
                                <MoreHorizontal
                                  style={{ width: "1rem", height: "1rem" }}
                                />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              align="end"
                              style={{
                                minWidth: "160px",
                                backgroundColor: "white",
                                borderRadius: "0.375rem",
                                boxShadow:
                                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
                                border: "1px solid #e2e8f0",
                                zIndex: 50,
                              }}
                            >
                              <DropdownMenuLabel
                                style={{
                                  padding: "0.5rem 0.75rem",
                                  fontSize: "0.75rem",
                                  fontWeight: 600,
                                  color: "#64748b",
                                }}
                              >
                                Actions
                              </DropdownMenuLabel>
                              <DropdownMenuItem
                                onClick={() =>
                                  setUpdatingApplication(
                                    application.trackingNumber
                                  )
                                }
                                style={{
                                  padding: "0.5rem 0.75rem",
                                  fontSize: "0.875rem",
                                  color: "#334155",
                                  cursor: "pointer",
                                  transition: "background-color 0.15s ease",
                                }}
                              >
                                Update Status
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => {
                                  // Find the email of the applicant for this row
                                  const applicantEmail = allApplications.find(
                                    (app) =>
                                      app.trackingNumber ===
                                      application.trackingNumber
                                  )?.applicant.email;

                                  fetch("/api/tracking-email", {
                                    method: "POST",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                      trackingNumber:
                                        application.trackingNumber,
                                      applicantEmail: applicantEmail, // Pass the applicant's email
                                      emailType: "general_update",
                                      customMessage:
                                        "This is a general update about your visa application.",
                                    }),
                                  })
                                    .then(() => {
                                      toast({
                                        title: "Email Sent",
                                        description:
                                          "Email notification sent to applicant",
                                      });
                                    })
                                    .catch(() => {
                                      toast({
                                        title: "Error",
                                        description: "Failed to send email",
                                        variant: "destructive",
                                      });
                                    });
                                }}
                                style={{
                                  padding: "0.5rem 0.75rem",
                                  fontSize: "0.875rem",
                                  color: "#334155",
                                  cursor: "pointer",
                                  transition: "background-color 0.15s ease",
                                }}
                              >
                                Send Email
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  openEmailHistoryModal(
                                    application.trackingNumber,
                                    application.applicant.email // Pass the email here
                                  )
                                }
                                style={{
                                  padding: "0.5rem 0.75rem",
                                  fontSize: "0.875rem",
                                  color: "#334155",
                                  cursor: "pointer",
                                  transition: "background-color 0.15s ease",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "0.5rem",
                                }}
                              >
                                <Mail
                                  style={{ width: "1rem", height: "1rem" }}
                                />
                                View Email History
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
            {/* Pagination */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "0.5rem",
                padding: "1rem 0",
              }}
            >
              <Button
                variant="outline"
                size="sm"
                style={{
                  padding: "0.375rem 0.75rem",
                  fontSize: "0.875rem",
                  borderRadius: "0.375rem",
                  border: "1px solid #e2e8f0",
                  backgroundColor: "white",
                  color: "#334155",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                style={{
                  padding: "0.375rem 0.75rem",
                  fontSize: "0.875rem",
                  borderRadius: "0.375rem",
                  border: "1px solid #e2e8f0",
                  backgroundColor: "white",
                  color: "#334155",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Email History Modal */}
      <EmailHistoryModal
        isOpen={isEmailHistoryModalOpen}
        onClose={closeEmailHistoryModal}
        trackingNumber={selectedTrackingNumber}
        applicantEmail={selectedApplicantEmail}
      />
    </div>
  );
}
