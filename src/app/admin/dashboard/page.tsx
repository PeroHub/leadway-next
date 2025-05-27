"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { toast } from "react-toastify";

export default function AdminDashboard() {
  // const queryClient = useQueryClient();

  // const generateTrackingCode = (id: string) => {
  //   // Generate a tracking code based on the ID
  //   return `TRK-${id.substring(0, 8).toUpperCase()}`;
  // };

  // const updateStatusMutation = useMutation({
  //   mutationFn: async ({ id, status }: { id: string; status: string }) => {
  //     return axios.put(`/api/admin/applications/${id}/status`, { status });
  //   },
  //   onSuccess: () => {
  //     // Invalidate the query cache to refresh the data
  //     queryClient.invalidateQueries({ queryKey: ["applications"] });
  //     toast.success("Status updated successfully!");
  //   },
  //   onError: (error) => {
  //     console.error("Error updating status:", error);
  //     toast.error("Failed to update status.");
  //   },
  // });

  // const updateStatus = (id: string, status: string) => {
  //   updateStatusMutation.mutate({ id, status });
  // };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const response = await axios.get("/api/admin/applications");
      return response.data.data;
    },
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        // background: "linear-gradient(to top left, #e0f7fa, #e8f5e9)",
        padding: "40px 20px", // Increased padding for a spacious feel
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", // Modern, readable font
        color: "#333", // Default text color
        boxSizing: "border-box", // Include padding and border in the element's total width and height
      }}
    >
      <div
        style={{
          maxWidth: "1200px", // Max width for content
          margin: "0 auto", // Center the content
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
          padding: "30px", // Inner padding
          border: "1px solid #e0e0e0", // Subtle border
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem", // Larger, more prominent title
            fontWeight: "700", // Bold
            color: "#2c3e50", // Darker blue-gray for heading
            marginBottom: "30px", // More space below heading
            textAlign: "center", // Center align the title
          }}
        >
          Visa Applications Dashboard
        </h1>

        {isLoading ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "#5f7c8d",
              padding: "20px",
            }}
          >
            Loading applications...
          </p>
        ) : isError ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              color: "#d32f2f", // Red for error
              padding: "20px",
              backgroundColor: "#ffebee", // Light red background
              border: "1px solid #ef9a9a",
              borderRadius: "8px",
            }}
          >
            Error fetching data. Please try again.
          </p>
        ) : (
          <>
            {/* Desktop Table View (visible on md screens and up) */}
            <div
              style={{
                overflowX: "auto", // Allows horizontal scrolling if content overflows
                marginBottom: "30px",
              }}
              className="hidden md:block" // Hidden on mobile, block on md and up
            >
              <table
                style={{
                  minWidth: "100%", // Ensures table takes full width of container
                  borderCollapse: "separate",
                  borderSpacing: "0",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid #d1d5db",
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: "#f5f7fa",
                      color: "#4a5568",
                      fontSize: "0.95rem",
                      fontWeight: "600",
                    }}
                  >
                    <th
                      style={{
                        padding: "15px 20px",
                        textAlign: "left",
                        borderBottom: "1px solid #d1d5db",
                        borderRight: "1px solid #e2e8f0",
                      }}
                    >
                      Full Name
                    </th>
                    <th
                      style={{
                        padding: "15px 20px",
                        textAlign: "left",
                        borderBottom: "1px solid #d1d5db",
                        borderRight: "1px solid #e2e8f0",
                      }}
                    >
                      Email
                    </th>
                    <th
                      style={{
                        padding: "15px 20px",
                        textAlign: "left",
                        borderBottom: "1px solid #d1d5db",
                        borderRight: "1px solid #e2e8f0",
                      }}
                    >
                      Section
                    </th>
                    <th
                      style={{
                        padding: "15px 20px",
                        textAlign: "left",
                        borderBottom: "1px solid #d1d5db",
                      }}
                    >
                      Documents
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(
                    (
                      app: {
                        _id: string;
                        firstName: string;
                        lastName: string;
                        email: string;
                        sectionTitle: string;
                        trackingCode?: string;
                        status?: string;
                        documents: { fileUrl: string; fileName: string }[];
                      },
                      index: number
                    ) => (
                      <tr
                        key={app._id}
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "white" : "#fbfdfe",
                          borderBottom: "1px solid #edf2f7",
                        }}
                      >
                        <td
                          style={{
                            padding: "15px 20px",
                            borderRight: "1px solid #e2e8f0",
                            color: "#333",
                          }}
                        >
                          {app.firstName} {app.lastName}
                        </td>
                        <td
                          style={{
                            padding: "15px 20px",
                            borderRight: "1px solid #e2e8f0",
                            color: "#333",
                          }}
                        >
                          {app.email}
                        </td>
                        <td
                          style={{
                            padding: "15px 20px",
                            borderRight: "1px solid #e2e8f0",
                            color: "#333",
                          }}
                        >
                          {app.sectionTitle}
                        </td>
                        <td
                          style={{
                            padding: "15px 20px",
                            color: "#333",
                          }}
                        >
                          {app.documents.length > 0 ? (
                            <ul
                              style={{
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {app.documents.map(
                                (
                                  doc: { fileUrl: string; fileName: string },
                                  idx: number
                                ) => (
                                  <li key={idx} style={{ marginBottom: "5px" }}>
                                    <a
                                      href={doc.fileUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        color: "#3b82f6",
                                        textDecoration: "underline",
                                        transition: "color 0.2s ease",
                                      }}
                                      onMouseEnter={(e) =>
                                        (e.currentTarget.style.color =
                                          "#2563eb")
                                      }
                                      onMouseLeave={(e) =>
                                        (e.currentTarget.style.color =
                                          "#3b82f6")
                                      }
                                    >
                                      {doc.fileName}
                                    </a>
                                  </li>
                                )
                              )}
                            </ul>
                          ) : (
                            <span
                              style={{ color: "#777", fontStyle: "italic" }}
                            >
                              No Documents
                            </span>
                          )}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile Table View (visible only on screens smaller than md) */}
            <div
              style={{
                overflowX: "auto", // This makes the container horizontally scrollable
                WebkitOverflowScrolling: "touch", // Improves scrolling performance on iOS
                msOverflowStyle: "-ms-autohiding-scrollbar", // For IE/Edge
                marginBottom: "30px",
                // Ensure table inside takes up minimum width to enable scroll
              }}
              className="md:hidden" // Hidden on md and up, block on mobile
            >
              <table
                style={{
                  minWidth: "600px", // Set a minimum width for the table to ensure it overflows and scrolls
                  borderCollapse: "separate",
                  borderSpacing: "0",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid #d1d5db",
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: "#f5f7fa",
                      color: "#4a5568",
                      fontSize: "0.9rem", // Slightly smaller font for mobile table headers
                      fontWeight: "600",
                    }}
                  >
                    <th
                      style={{
                        padding: "10px 15px", // Smaller padding for mobile table
                        textAlign: "left",
                        borderBottom: "1px solid #d1d5db",
                        borderRight: "1px solid #e2e8f0",
                      }}
                    >
                      Full Name
                    </th>
                    <th
                      style={{
                        padding: "10px 15px",
                        textAlign: "left",
                        borderBottom: "1px solid #d1d5db",
                        borderRight: "1px solid #e2e8f0",
                      }}
                    >
                      Email
                    </th>
                    <th
                      style={{
                        padding: "10px 15px",
                        textAlign: "left",
                        borderBottom: "1px solid #d1d5db",
                        borderRight: "1px solid #e2e8f0",
                      }}
                    >
                      Section
                    </th>
                    <th
                      style={{
                        padding: "10px 15px",
                        textAlign: "left",
                        borderBottom: "1px solid #d1d5db",
                      }}
                    >
                      Documents
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(
                    (
                      app: {
                        _id: string;
                        firstName: string;
                        lastName: string;
                        email: string;
                        sectionTitle: string;
                        trackingCode?: string;
                        status?: string;
                        documents: { fileUrl: string; fileName: string }[];
                      },
                      index: number
                    ) => (
                      <tr
                        key={app._id}
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "white" : "#fbfdfe",
                          borderBottom: "1px solid #edf2f7",
                        }}
                      >
                        <td
                          style={{
                            padding: "10px 15px",
                            borderRight: "1px solid #e2e8f0",
                            color: "#333",
                            fontSize: "0.85rem", // Smaller font for mobile table cells
                          }}
                        >
                          {app.firstName} {app.lastName}
                        </td>
                        <td
                          style={{
                            padding: "10px 15px",
                            borderRight: "1px solid #e2e8f0",
                            color: "#333",
                            fontSize: "0.85rem",
                          }}
                        >
                          {app.email}
                        </td>
                        <td
                          style={{
                            padding: "10px 15px",
                            borderRight: "1px solid #e2e8f0",
                            color: "#333",
                            fontSize: "0.85rem",
                          }}
                        >
                          {app.sectionTitle}
                        </td>
                        <td
                          style={{
                            padding: "10px 15px",
                            color: "#333",
                            fontSize: "0.85rem",
                          }}
                        >
                          {app.documents.length > 0 ? (
                            <ul
                              style={{
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {app.documents.map(
                                (
                                  doc: { fileUrl: string; fileName: string },
                                  idx: number
                                ) => (
                                  <li key={idx} style={{ marginBottom: "3px" }}>
                                    <a
                                      href={doc.fileUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        color: "#3b82f6",
                                        textDecoration: "underline",
                                        transition: "color 0.2s ease",
                                      }}
                                      onMouseEnter={(e) =>
                                        (e.currentTarget.style.color =
                                          "#2563eb")
                                      }
                                      onMouseLeave={(e) =>
                                        (e.currentTarget.style.color =
                                          "#3b82f6")
                                      }
                                    >
                                      {doc.fileName}
                                    </a>
                                  </li>
                                )
                              )}
                            </ul>
                          ) : (
                            <span
                              style={{ color: "#777", fontStyle: "italic" }}
                            >
                              No Documents
                            </span>
                          )}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
