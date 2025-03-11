"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function AdminDashboard() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const response = await axios.get("/api/admin/applications");
      return response.data.data;
    },
  });

  return (
    <div className="p-6" style={{ marginTop: "40px", padding: "10px" }}>
      <h1 className="text-lg font-semibold mb-4" style={{ fontSize: "2.5rem" }}>
        Visa Applications
      </h1>

      {isLoading ? (
        <p>Loading applications...</p>
      ) : isError ? (
        <p>Error fetching data.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 hidden md:table">
            <thead>
              <tr className="bg-gray-100">
                <th
                  style={{ padding: "10px" }}
                  className="border p-3 text-left"
                >
                  Full Name
                </th>
                <th
                  style={{ padding: "10px" }}
                  className="border p-3 text-left"
                >
                  Email
                </th>
                <th
                  style={{ padding: "10px" }}
                  className="border p-3 text-left"
                >
                  Section
                </th>
                <th
                  style={{ padding: "10px" }}
                  className="border p-3 text-left"
                >
                  Documents
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (app: {
                  _id: string;
                  firstName: string;
                  lastName: string;
                  email: string;
                  sectionTitle: string;
                  documents: { fileUrl: string; fileName: string }[];
                }) => (
                  <tr key={app._id} className="border">
                    <td style={{ padding: "10px" }} className="p-3">
                      {app.firstName} {app.lastName}
                    </td>
                    <td style={{ padding: "10px" }} className="border p-3">
                      {app.email}
                    </td>
                    <td style={{ padding: "10px" }} className="border p-3">
                      {app.sectionTitle}
                    </td>
                    <td style={{ padding: "10px" }} className="border p-3">
                      {app.documents.length > 0 ? (
                        <ul>
                          {app.documents.map(
                            (
                              doc: { fileUrl: string; fileName: string },
                              index: number
                            ) => (
                              <li key={index}>
                                <a
                                  href={doc.fileUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 underline"
                                >
                                  {doc.fileName}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      ) : (
                        "No Documents"
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4 mt-10">
            {data.map(
              (app: {
                _id: string;
                firstName: string;
                lastName: string;
                email: string;
                sectionTitle: string;
                documents: { fileUrl: string; fileName: string }[];
              }) => (
                <div
                  key={app._id}
                  style={{ padding: "10px" }}
                  className="border rounded-lg p-4 bg-white shadow-md"
                >
                  <p className="font-semibold text-lg">
                    {app.firstName} {app.lastName}
                  </p>
                  <p className="text-gray-700">
                    <strong>Email:</strong> {app.email}
                  </p>
                  <p className="text-gray-700">
                    <strong>Section:</strong> {app.sectionTitle}
                  </p>
                  <p className="text-gray-700">
                    <strong>Documents:</strong>{" "}
                  </p>
                  {app.documents.length > 0 ? (
                    <ul className="list-disc list-inside mt-1">
                      {app.documents.map(
                        (
                          doc: { fileUrl: string; fileName: string },
                          index: number
                        ) => (
                          <li key={index}>
                            <a
                              href={doc.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 underline"
                            >
                              {doc.fileName}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  ) : (
                    "No Documents"
                  )}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
