// components/application-details-page.tsx (or whatever your page file is named)
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Copy,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { StatusTimeline } from "@/components/status-timeline";
import { DocumentList } from "@/components/document-list";
import { StatusHistory } from "@/components/status-history";
import { formatDate } from "../../../../../../lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useRouter } from "next/navigation";

// Define the props type explicitly for Client Components
interface Props {
  trackingNumber: string;
}

export default function ApplicationDetailsPage({ trackingNumber }: Props) {
  // Use the defined interface here
  //   const { trackingNumber } = params;
  const { toast } = useToast();
  const router = useRouter();

  type Document = {
    name: string;
    url: string;
    verified: boolean;
    uploadDate?: string;
  };

  type Application = {
    status: {
      current: string;
      history: Array<{
        status: string;
        updatedAt: string | Date;
        updatedBy: string;
        notes: string;
      }>;
    };
    documents: Document[];
    applicant: {
      fullName: string;
      country: string;
      email: string;
      phone?: string;
    };
    visaDetails: {
      type: string;
      submissionDate: string | Date;
      expectedCompletion?: string | Date;
    };
  };

  const [application, setApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newStatus, setNewStatus] = useState("");
  const [statusNotes, setStatusNotes] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchApplication = async () => {
      if (!trackingNumber) {
        setError("Invalid tracking number");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/tracking/${trackingNumber}`);

        if (!response.ok) {
          if (response.status === 404) {
            setError(
              `Application with tracking number ${trackingNumber} not found`
            );
          } else {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || "Failed to fetch application");
          }
          setLoading(false);
          return;
        }

        const data = await response.json();
        setApplication(data);
        setNewStatus(data.status.current);
      } catch (error) {
        console.error("Error fetching application:", error);
        const errorMessage =
          typeof error === "object" && error !== null && "message" in error
            ? (error as { message?: string }).message
            : undefined;
        setError(errorMessage || "Failed to load application details");
        toast({
          title: "Error",
          description: errorMessage || "Failed to load application details",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    // The window.location.pathname check is generally not needed in App Router
    // for page components as they are rendered based on the route.
    // However, if you have specific client-side rendering logic that depends on
    // this, you can keep it, but often it can be simplified.
    // For now, I'll keep it as it is in your original code to avoid introducing
    // unexpected behavioral changes.
    if (
      window.location.pathname.includes("/tracking/") &&
      !window.location.pathname.includes("/tracking/new") &&
      !window.location.pathname.includes("/tracking/search")
    ) {
      fetchApplication();
    } else {
      setLoading(false);
    }
  }, [trackingNumber, toast]);

  const handleStatusUpdate = async () => {
    if (
      !newStatus ||
      !application ||
      newStatus === application.status.current
    ) {
      return;
    }

    setIsUpdating(true);

    try {
      const response = await fetch(`/api/tracking/${trackingNumber}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: newStatus,
          updatedBy: "Admin User",
          notes: statusNotes || `Status updated to ${newStatus}`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to update status");
      }

      await fetch("/api/tracking-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trackingNumber: trackingNumber,
          emailType: "status_update",
          customMessage: `Your visa application status has been updated to: ${newStatus}`,
        }),
      }).catch((error) => {
        console.error("Error sending email:", error);
      });

      setApplication({
        ...application,
        status: {
          ...application.status,
          current: newStatus,
          history: [
            {
              status: newStatus,
              updatedAt: new Date(),
              updatedBy: "Admin User",
              notes: statusNotes || `Status updated to ${newStatus}`,
            },
            ...application.status.history,
          ],
        },
      });

      toast({
        title: "Status Updated",
        description: `Application status updated to ${newStatus}`,
      });

      setStatusNotes("");
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Error",
        description:
          typeof error === "object" && error !== null && "message" in error
            ? (error as { message?: string }).message
            : "Failed to update status",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const copyTrackingNumber = () => {
    navigator.clipboard.writeText(trackingNumber);
    toast({
      title: "Copied",
      description: `Tracking number ${trackingNumber} copied to clipboard`,
    });
  };

  // The window.location.pathname check for returning null might be problematic
  // if this component is rendered directly by Next.js as a page.
  // In the App Router, if you have a `page.tsx` file for, say, `app/tracking/[trackingNumber]/page.tsx`,
  // Next.js will only render this component when the URL matches `tracking/[trackingNumber]`.
  // The checks for `tracking/new` or `tracking/search` in `window.location.pathname`
  // suggest that this component might be conditionally rendered in an older
  // `pages` router setup or a more complex routing scenario.
  // For a typical App Router setup, these checks might be unnecessary or
  // indicate a potential for a simpler routing structure.
  // However, preserving existing logic to avoid breaking other parts.
  if (
    typeof window !== "undefined" && // Ensure window is defined (client-side)
    (window.location.pathname.includes("/tracking/new") ||
      window.location.pathname.includes("/tracking/search"))
  ) {
    return null;
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error || !application) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold">Application Not Found</h2>
        <p className="mt-2 text-muted-foreground">
          {error ||
            `The application with tracking number ${trackingNumber} could not be found.`}
        </p>
        <div className="mt-6 flex gap-4">
          <Button onClick={() => router.back()} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Link href="/applications">
            <Button>View All Applications</Button>
          </Link>
        </div>
      </div>
    );
  }

  const validStatuses = [
    "Visa Application Received",
    "Visa Is Being Processed",
    "Visa Document Validated",
    "Visa Almost Ready",
    "Visa Ready",
  ];

  return (
    <div className="flex flex-col">
      <Toaster />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex items-center space-x-2">
            <Link href="/applications">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h2 className="text-3xl font-bold tracking-tight">
              Application #{trackingNumber}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              title="Copy tracking number"
              onClick={copyTrackingNumber}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              onClick={() => {
                fetch("/api/email", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    trackingNumber: trackingNumber,
                    emailType: "general_update",
                    customMessage:
                      "This is a general update about your visa application.",
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
              }}
            >
              Send Email
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <div className="md:col-span-5 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Application Status</CardTitle>
                <CardDescription>
                  Current status and progression of the visa application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <StatusTimeline currentStatus={application.status.current} />
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-4">
                <div className="space-y-2 w-full">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">Update Status</h4>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Select value={newStatus} onValueChange={setNewStatus}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select new status" />
                      </SelectTrigger>
                      <SelectContent>
                        {validStatuses.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button
                      onClick={handleStatusUpdate}
                      disabled={
                        isUpdating || newStatus === application.status.current
                      }
                    >
                      {isUpdating ? "Updating..." : "Update Status"}
                    </Button>
                  </div>
                  <div className="pt-2">
                    <Textarea
                      placeholder="Add notes about this status update"
                      className="min-h-[80px]"
                      value={statusNotes}
                      onChange={(e) => setStatusNotes(e.target.value)}
                    />
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Documents</CardTitle>
                <CardDescription>
                  Uploaded documents for this application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DocumentList documents={application.documents} />
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Upload New Document
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Status History</CardTitle>
                <CardDescription>
                  Complete history of status changes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <StatusHistory statusHistory={application.status.history} />
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Applicant Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>{application.applicant.fullName}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{application.applicant.country}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{application.applicant.email}</span>
                </div>
                {application.applicant.phone && (
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{application.applicant.phone}</span>
                  </div>
                )}
                <Separator />
                <div className="space-y-1">
                  <div className="text-sm font-medium">Visa Type</div>
                  <div className="text-sm">{application.visaDetails.type}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Submission Date</div>
                    <div className="text-sm">
                      {formatDate(application.visaDetails.submissionDate)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div className="space-y-1">
                    <div className="text-sm font-medium">
                      Expected Completion
                    </div>
                    <div className="text-sm">
                      {application.visaDetails.expectedCompletion
                        ? formatDate(application.visaDetails.expectedCompletion)
                        : "Not specified"}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Edit Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Send Email Notification
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Print Application
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Download Documents
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Add Note
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

ApplicationDetailsPage.displayName = "ApplicationDetailsPage";
