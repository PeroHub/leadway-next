"use client";

import type React from "react";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Copy, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

// Assuming these components are styled internally or have minimal inline styles
// as their primary styling will be handled by the direct inline CSS in this file.
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function NewApplicationPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const trackingNumberRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    phone: "",
    visaType: "",
    expectedCompletionDate: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyTrackingNumber = () => {
    if (trackingNumber) {
      navigator.clipboard.writeText(trackingNumber);
      toast({
        title: "Copied!",
        description: "Tracking number copied to clipboard",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (
        !formData.fullName ||
        !formData.email ||
        !formData.country ||
        !formData.visaType
      ) {
        throw new Error("Please fill in all required fields");
      }

      const applicationData = {
        applicant: {
          fullName: formData.fullName,
          country: formData.country,
          email: formData.email,
          phone: formData.phone,
        },
        visaDetails: {
          type: formData.visaType,
          submissionDate: new Date(),
          expectedCompletion: formData.expectedCompletionDate
            ? new Date(formData.expectedCompletionDate)
            : undefined,
        },
        documents: [],
      };

      const response = await fetch("/api/tracking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create application");
      }

      try {
        await fetch("/api/tracking-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            trackingNumber: data.trackingNumber,
            emailType: "application_confirmation",
            customMessage: `Congratulations! Your visa application has been submitted successfully. Your tracking number is ${data.trackingNumber}.`,
          }),
        });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
      }

      setSuccess(true);
      setTrackingNumber(data.trackingNumber);

      toast({
        title: "Application Created",
        description: `Application created successfully with tracking number: ${data.trackingNumber}`,
      });

      setTimeout(() => {
        if (trackingNumberRef.current) {
          trackingNumberRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } catch (error) {
      console.error("Error creating application:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to create application. Please try again."
      );
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to create application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", // Align items to the start vertically
        minHeight: "100vh",
        // background: "linear-gradient(to bottom right, #e0f2fe, #bfdbfe)",

        boxSizing: "border-box",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Professional font
      }}
    >
      <Toaster />
      <div
        style={{
          width: "100%",
          maxWidth: "500px", // Slightly reduced max width for tighter layout
          display: "flex",
          // margin: "0 auto",
          flexDirection: "column",
          gap: "30px", // Increased space between sections
          backgroundColor: "rgba(255, 255, 255, 0.95)", // Slightly transparent white background
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)", // More prominent shadow for main container
          border: "1px solid #e0e7ff", // Subtle border
        }}
      >
        <div
          className="lg:flex"
          style={{
            // display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "20px",
            borderBottom: "1px solid #e5e7eb", // Light divider
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              fontSize: "2rem", // Larger title
              fontWeight: "700", // Bold
              // letterSpacing: "-0.03em",
              color: "#1a202c", // Darker text for prominence
              // margin: 0, // Reset default margin
            }}
            className="mb-20"
          >
            New Application
          </h2>
          <Link
            href="/admin/tracking"
            style={{ textDecoration: "none" }}
            className="mt-10 lg:mt-0"
          >
            <Button
              variant="outline"
              style={{
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
                border: "1px solid #cbd5e0", // Lighter border
                backgroundColor: "white",
                color: "#4a5568", // Grayish text
                padding: "12px 20px", // More padding
                borderRadius: "8px", // More rounded
                display: "flex",
                alignItems: "center",
                gap: "8px", // Space between icon and text
                cursor: "pointer",
                transition:
                  "background-color 0.2s ease, border-color 0.2s ease", // Smooth transition
              }}
              // This is a common way to simulate hover for inline styles, but true hover is not possible
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f4f8")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              <ArrowLeft
                style={{ height: "18px", width: "18px", color: "#4a5568" }}
              />
              Back to Applications
            </Button>
          </Link>
        </div>

        {error && (
          <Alert
            variant="destructive"
            style={{
              marginBottom: "20px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
              backgroundColor: "#fef2f2", // Light red background
              borderColor: "#fccfcf", // Red border
              color: "#b91c1c", // Dark red text
              padding: "18px", // More padding
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <AlertTitle style={{ fontWeight: "600", color: "#b91c1c" }}>
              Error:
            </AlertTitle>
            <AlertDescription style={{ flex: 1, color: "#b91c1c" }}>
              {error}
            </AlertDescription>
          </Alert>
        )}

        {success ? (
          <Card
            style={{
              width: "100%",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              borderColor: "#a7f3d0",
              borderWidth: "1px",
              backgroundColor: "white",
            }}
          >
            <CardHeader
              style={{
                backgroundColor: "#dcfce7", // Lighter green background
                borderBottom: "1px solid #bbf7d0", // Slightly darker green border
                padding: "28px",
                borderRadius: "10px 10px 0 0",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <CheckCircle2
                  style={{ height: "32px", width: "32px", color: "#10b981" }}
                />
                <CardTitle
                  style={{
                    fontSize: "1.6rem", // Larger title
                    fontWeight: "600",
                    color: "#065f46", // Dark green
                  }}
                >
                  Application Submitted Successfully!
                </CardTitle>
              </div>
              <CardDescription
                style={{
                  color: "#065f46",
                  marginTop: "10px",
                  fontSize: "1.1rem", // Slightly larger description
                }}
              >
                The visa application has been created and a confirmation email
                has been sent to the applicant.
              </CardDescription>
            </CardHeader>
            <CardContent
              style={{
                padding: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "35px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.3rem", // Subtitle
                      fontWeight: "500",
                      color: "#374151",
                    }}
                  >
                    Application Details
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(280px, 1fr))", // Fluid grid with larger min-width
                      gap: "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: "500",
                          color: "#6b7280",
                        }}
                      >
                        Applicant Name
                      </p>
                      <p style={{ color: "#1f2937", fontSize: "1.05rem" }}>
                        {formData.fullName}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: "500",
                          color: "#6b7280",
                        }}
                      >
                        Email
                      </p>
                      <p style={{ color: "#1f2937", fontSize: "1.05rem" }}>
                        {formData.email}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: "500",
                          color: "#6b7280",
                        }}
                      >
                        Country
                      </p>
                      <p style={{ color: "#1f2937", fontSize: "1.05rem" }}>
                        {formData.country}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: "500",
                          color: "#6b7280",
                        }}
                      >
                        Visa Type
                      </p>
                      <p style={{ color: "#1f2937", fontSize: "1.05rem" }}>
                        {formData.visaType}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    borderRadius: "10px",
                    border: "1px solid #e5e7eb",
                    backgroundColor: "#f9fafb",
                    padding: "30px",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)", // Inner shadow
                  }}
                  ref={trackingNumberRef}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      textAlign: "center",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "500",
                        color: "#374151",
                      }}
                    >
                      Tracking Number
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "2rem", // Very large tracking number
                          fontWeight: "800", // Extra bold
                          letterSpacing: "0.08em", // Wider tracking
                          backgroundColor: "#fff",
                          padding: "15px 10px",
                          borderRadius: "8px",
                          border: "2px solid #a7f3d0", // Green border for success
                          color: "#10b981", // Green text
                          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                        }}
                      >
                        {trackingNumber}
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        style={{
                          marginLeft: "12px",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: "10px",
                          borderRadius: "50%", // Circular button
                          transition: "background-color 0.2s ease",
                        }}
                        onClick={copyTrackingNumber}
                        title="Copy tracking number"
                        // Simulate hover
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor = "#e0e7ff")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "transparent")
                        }
                      >
                        <Copy
                          style={{
                            height: "20px",
                            width: "20px",
                            color: "#6b7280",
                          }}
                        />
                      </Button>
                    </div>
                    <p style={{ fontSize: "0.95rem", color: "#6b7280" }}>
                      This tracking number can be used to check the status of
                      the application.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: "1px solid #e5e7eb",
                padding: "28px",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <Button
                variant="outline"
                onClick={() => router.push(`/admin/tracking`)}
                style={{
                  border: "1px solid #cbd5e0",
                  backgroundColor: "white",
                  color: "#4a5568",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
                  cursor: "pointer",
                  transition:
                    "background-color 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f0f4f8")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                View Application Details
              </Button>
              <Button
                onClick={() => {
                  setSuccess(false);
                  setTrackingNumber("");
                  setFormData({
                    fullName: "",
                    email: "",
                    country: "",
                    phone: "",
                    visaType: "",
                    expectedCompletionDate: "",
                    notes: "",
                  });
                }}
                style={{
                  backgroundColor: "#4f46e5", // Indigo-600
                  color: "white",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 8px rgba(79, 70, 229, 0.2)", // Shadow matching button color
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#4338ca")
                } // Darker indigo on hover
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#4f46e5")
                }
              >
                Create Another Application
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card
            style={{
              width: "100%",
              // boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              backgroundColor: "white",
            }}
          >
            <form onSubmit={handleSubmit}>
              <CardHeader
                style={{
                  padding: "28px",
                  borderBottom: "1px solid #e5e7eb",
                  borderRadius: "10px 10px 0 0",
                  backgroundColor: "#fcfcfc", // Slightly off-white background
                }}
              >
                <CardTitle
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: "600",
                    color: "#1f2937",
                  }}
                >
                  Create New Visa Application
                </CardTitle>
                <CardDescription
                  style={{ color: "#6b7280", fontSize: "1.1rem" }}
                >
                  Enter the applicant&apos;s information to create a new visa
                  application.
                </CardDescription>
              </CardHeader>
              <CardContent
                style={{
                  padding: "30px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: "500",
                          color: "#374151",
                        }}
                      >
                        Applicant Information
                      </h3>
                      <p style={{ fontSize: "0.95rem", color: "#6b7280" }}>
                        Enter the personal details of the visa applicant.
                      </p>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(280px, 1fr))", // Fluid grid for form fields
                        gap: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <Label
                          htmlFor="fullName"
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "500",
                            color: "#374151",
                          }}
                        >
                          Full Name <span style={{ color: "#ef4444" }}>*</span>
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Smith"
                          required
                          style={{
                            padding: "12px",
                            border: "1px solid #d1d5db",
                            borderRadius: "8px",
                            fontSize: "1rem",
                            width: "100%",
                            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.06)",
                            transition:
                              "border-color 0.2s ease, box-shadow 0.2s ease",
                          }}
                          // Simulate focus
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "#6366f1";
                            e.currentTarget.style.boxShadow =
                              "0 0 0 3px rgba(99, 102, 241, 0.25)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = "#d1d5db";
                            e.currentTarget.style.boxShadow =
                              "inset 0 1px 2px rgba(0,0,0,0.06)";
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <Label
                          htmlFor="email"
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "500",
                            color: "#374151",
                          }}
                        >
                          Email <span style={{ color: "#ef4444" }}>*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email"
                          placeholder="john.smith@example.com"
                          required
                          style={{
                            padding: "12px",
                            border: "1px solid #d1d5db",
                            borderRadius: "8px",
                            fontSize: "1rem",
                            width: "100%",
                            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.06)",
                            transition:
                              "border-color 0.2s ease, box-shadow 0.2s ease",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "#6366f1";
                            e.currentTarget.style.boxShadow =
                              "0 0 0 3px rgba(99, 102, 241, 0.25)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = "#d1d5db";
                            e.currentTarget.style.boxShadow =
                              "inset 0 1px 2px rgba(0,0,0,0.06)";
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <Label
                          htmlFor="country"
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "500",
                            color: "#374151",
                          }}
                        >
                          Country <span style={{ color: "#ef4444" }}>*</span>
                        </Label>
                        <Select
                          value={formData.country}
                          onValueChange={(value) =>
                            handleSelectChange("country", value)
                          }
                          required
                        >
                          <SelectTrigger
                            id="country"
                            style={{
                              padding: "12px",
                              border: "1px solid #d1d5db",
                              borderRadius: "8px",
                              fontSize: "1rem",
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              cursor: "pointer",
                              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.06)",
                              backgroundColor: "white",
                              transition:
                                "border-color 0.2s ease, box-shadow 0.2s ease",
                            }}
                            // SelectTrigger can't directly simulate focus well with inline, relies on component behavior
                          >
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent
                            style={{
                              backgroundColor: "white",
                              border: "1px solid #e5e7eb",
                              borderRadius: "8px",
                              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                              zIndex: 10,
                            }}
                          >
                            {[
                              "United States",
                              "United Kingdom",
                              "Canada",
                              "Australia",
                              "India",
                              "China",
                              "Japan",
                              "France",
                              "Germany",
                              "Brazil",
                              "Mexico",
                              "Spain",
                              "Italy",
                              "Russia",
                              "South Africa",
                            ].map((country) => (
                              <SelectItem
                                key={country}
                                value={country}
                                style={{
                                  padding: "10px 15px",
                                  cursor: "pointer",
                                  transition: "background-color 0.15s ease",
                                }}
                                onMouseEnter={(e) =>
                                  (e.currentTarget.style.backgroundColor =
                                    "#f0f4f8")
                                }
                                onMouseLeave={(e) =>
                                  (e.currentTarget.style.backgroundColor =
                                    "white")
                                }
                              >
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <Label
                          htmlFor="phone"
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "500",
                            color: "#374151",
                          }}
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          style={{
                            padding: "12px",
                            border: "1px solid #d1d5db",
                            borderRadius: "8px",
                            fontSize: "1rem",
                            width: "100%",
                            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.06)",
                            transition:
                              "border-color 0.2s ease, box-shadow 0.2s ease",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "#6366f1";
                            e.currentTarget.style.boxShadow =
                              "0 0 0 3px rgba(99, 102, 241, 0.25)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = "#d1d5db";
                            e.currentTarget.style.boxShadow =
                              "inset 0 1px 2px rgba(0,0,0,0.06)";
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: "500",
                          color: "#374151",
                        }}
                      >
                        Visa Details
                      </h3>
                      <p style={{ fontSize: "0.95rem", color: "#6b7280" }}>
                        Specify the type of visa and other relevant details.
                      </p>
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <Label
                          htmlFor="visaType"
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "500",
                            color: "#374151",
                          }}
                        >
                          Visa Type <span style={{ color: "#ef4444" }}>*</span>
                        </Label>
                        <Select
                          value={formData.visaType}
                          onValueChange={(value) =>
                            handleSelectChange("visaType", value)
                          }
                          required
                        >
                          <SelectTrigger
                            id="visaType"
                            style={{
                              padding: "12px",
                              border: "1px solid #d1d5db",
                              borderRadius: "8px",
                              fontSize: "1rem",
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              cursor: "pointer",
                              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.06)",
                              backgroundColor: "white",
                              transition:
                                "border-color 0.2s ease, box-shadow 0.2s ease",
                            }}
                          >
                            <SelectValue placeholder="Select visa type" />
                          </SelectTrigger>
                          <SelectContent
                            style={{
                              backgroundColor: "white",
                              border: "1px solid #e5e7eb",
                              borderRadius: "8px",
                              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                              zIndex: 10,
                            }}
                          >
                            {[
                              "Tourist Visa",
                              "Business Visa",
                              "Student Visa",
                              "Work Visa",
                              "Family Visa",
                              "Transit Visa",
                            ].map((visa) => (
                              <SelectItem
                                key={visa}
                                value={visa}
                                style={{
                                  padding: "10px 15px",
                                  cursor: "pointer",
                                  transition: "background-color 0.15s ease",
                                }}
                                onMouseEnter={(e) =>
                                  (e.currentTarget.style.backgroundColor =
                                    "#f0f4f8")
                                }
                                onMouseLeave={(e) =>
                                  (e.currentTarget.style.backgroundColor =
                                    "white")
                                }
                              >
                                {visa}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        <Label
                          htmlFor="expectedCompletionDate"
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: "500",
                            color: "#374151",
                          }}
                        >
                          Expected Completion Date
                        </Label>
                        <Input
                          id="expectedCompletionDate"
                          name="expectedCompletionDate"
                          value={formData.expectedCompletionDate}
                          onChange={handleChange}
                          type="date"
                          style={{
                            padding: "12px",
                            border: "1px solid #d1d5db",
                            borderRadius: "8px",
                            fontSize: "1rem",
                            width: "100%",
                            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.06)",
                            transition:
                              "border-color 0.2s ease, box-shadow 0.2s ease",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = "#6366f1";
                            e.currentTarget.style.boxShadow =
                              "0 0 0 3px rgba(99, 102, 241, 0.25)";
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = "#d1d5db";
                            e.currentTarget.style.boxShadow =
                              "inset 0 1px 2px rgba(0,0,0,0.06)";
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <Label
                      htmlFor="notes"
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "500",
                        color: "#374151",
                      }}
                    >
                      Additional Notes
                    </Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Enter any additional information about the application"
                      style={{
                        minHeight: "120px", // Taller textarea
                        padding: "12px",
                        border: "1px solid #d1d5db",
                        borderRadius: "8px",
                        fontSize: "1rem",
                        width: "100%",
                        resize: "vertical",
                        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.06)",
                        transition:
                          "border-color 0.2s ease, box-shadow 0.2s ease",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#6366f1";
                        e.currentTarget.style.boxShadow =
                          "0 0 0 3px rgba(99, 102, 241, 0.25)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "#d1d5db";
                        e.currentTarget.style.boxShadow =
                          "inset 0 1px 2px rgba(0,0,0,0.06)";
                      }}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderTop: "1px solid #e5e7eb",
                  padding: "28px",
                  flexWrap: "wrap",
                  gap: "20px",
                  backgroundColor: "#fcfcfc",
                  borderRadius: "0 0 10px 10px",
                }}
              >
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/admin/tracking")}
                  style={{
                    border: "1px solid #cbd5e0",
                    backgroundColor: "white",
                    color: "#4a5568",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
                    cursor: "pointer",
                    transition:
                      "background-color 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f0f4f8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: "#4f46e5",
                    color: "white",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    opacity: isSubmitting ? 0.7 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 8px rgba(79, 70, 229, 0.2)",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting)
                      e.currentTarget.style.backgroundColor = "#4338ca";
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting)
                      e.currentTarget.style.backgroundColor = "#4f46e5";
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2
                        style={{
                          marginRight: "8px",
                          height: "18px",
                          width: "18px",
                          animation: "spin 1s linear infinite",
                          color: "white", // Ensure loader color is white
                        }}
                      />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        )}
      </div>
      {/* Basic CSS for the spin animation, as inline styles don't support keyframes */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
