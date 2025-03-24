"use client";

import { useState } from "react";
import Head from "next/head";
import { FaArrowAltCircleRight, FaDownload, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const otherImmigration = [
  {
    icon: <FaArrowAltCircleRight />,
    text: "Business Visa Immigration Assessment Form",
  },
  {
    icon: <FaArrowAltCircleRight />,
    text: "Study Visa Immigration Assessment Form",
  },
  {
    icon: <FaArrowAltCircleRight />,
    text: "Family Visa Immigration Assessment Form",
  },
  {
    icon: <FaArrowAltCircleRight />,
    text: "Sponsorship Visa Immigration Assessment Form",
  },
  {
    icon: <FaArrowAltCircleRight />,
    text: "General Immigration Assessment Form",
  },
  {
    icon: <FaArrowAltCircleRight />,
    text: "Work Permit Visa Immigration Assessment Form",
  },
];

const sections = [
  {
    title: "General Immigration Assessment Form",
    fields: [
      "Upload your completed general assessment form",
      "Upload your International Passport",
      "Upload your passport photograph",
      "Upload birth certificate file",
      "Upload your marriage certificate",
    ],
    downloadLink:
      "/pdf/imm.legalpathwayimmigrationlawfirmassessmentform.generalvisa.pdf",
    instruction:
      "Instructions: Download and complete the assessment form. Once filled out, return to this page and upload the completed form along with the required supporting documents in their respective fields for review and assessment by our attorneys. You will receive an email confirming that your documents have been received, verified, and whether you are eligible to proceed with the visa application process.",
  },
  {
    title: "Family Visa Immigration Assessment Form",
    fields: [
      "Upload your completed family visa assessment form",
      "Upload your International Passport",
      "Upload your passport photograph",
      "Upload birth certificate file",
      "Upload your marriage certificate",
      "Upload your financial documents ",
      "Upload your medical examination reports",
    ],
    downloadLink:
      "/pdf/imm.legalpathwayimmigrationlawfirmassessmentform.familyvisa.pdf",
    instruction:
      "Instructions: Download and complete the assessment form. Once filled out, return to this page and upload the completed form along with the required supporting documents in their respective fields for review and assessment by our attorneys. You will receive an email confirming that your documents have been received, verified, and whether you are eligible to proceed with the visa application process.",
  },
  {
    title: "Business Visa Immigration Assessment Form",
    fields: [
      "Upload your completed business visa assessment form",
      "Upload your International Passport",
      "Upload your passport photograph",
      "Upload birth certificate file",
      "Upload your business registration document",
      "Upload your financial documents",
      "Upload your proof of investment or assets",
      "Upload your business plan",
    ],
    downloadLink:
      "/pdf/imm.legalpathwayimmigrationlawfirmassessmentform.businessvisa.pdf",
    instruction:
      "Instructions: Download and complete the assessment form. Once filled out, return to this page and upload the completed form along with the required supporting documents in their respective fields for review and assessment by our attorneys. You will receive an email confirming that your documents have been received, verified, and whether you are eligible to proceed with the visa application process.",
  },
  {
    title: "Study Visa Immigration Assessment Form",
    fields: [
      "Upload your completed study visa assessment form",
      "Upload your International Passport",
      "Upload your passport photograph",
      "Upload birth certificate file",
      "Upload your acceptance letter",
      "Upload your financial documents",
      "Upload your proof of english proficiency",
      "Upload your medical examination reports",
    ],
    downloadLink:
      "/pdf/imm.legalpathwayimmigrationlawfirmassessmentform.businessvisa.pdf",
    instruction:
      "Instructions: Download and complete the assessment form. Once filled out, return to this page and upload the completed form along with the required supporting documents in their respective fields for review and assessment by our attorneys. You will receive an email confirming that your documents have been received, verified, and whether you are eligible to proceed with the visa application process.",
  },
  {
    title: "Sponsorship Visa Immigration Assessment Form",
    fields: [
      "Upload your completed sponsorship visa assessment form",
      "Upload your International Passport",
      "Upload your passport photograph",
      "Upload birth certificate file",
      "Upload your sponsor's Identification",
      "Upload your financial documents",
      "Upload your proof of sponsor's status",
      "Upload your police clearance certificates",
      "Upload your medical examination reports",
    ],
    downloadLink:
      "/pdf/imm.legalpathwayimmigrationlawfirmassessmentform.sponsorshipvisa.pdf",
    instruction:
      "Instructions: Download and complete the assessment form. Once filled out, return to this page and upload the completed form along with the required supporting documents in their respective fields for review and assessment by our attorneys. You will receive an email confirming that your documents have been received, verified, and whether you are eligible to proceed with the visa application process.",
  },
  {
    title: "Work Permit Visa Immigration Assessment Form",
    fields: [
      "Upload your completed work permit visa assessment form",
      "Upload your International Passport",
      "Upload your passport photograph",
      "Upload birth certificate file (If any)",
      "Upload your Resume/CV",
      "Upload your financial documents",
      "Upload your educational qualifications (If any)",
      "Upload your police clearance certificates (If any)",
      "Upload your medical examination reports (If any)",
    ],
    downloadLink:
      "/pdf/imm.legalpathwayimmigrationlawfirmassessmentform.workpermitvisa.pdf",
    instruction:
      "Instructions: Download and complete the assessment form. Once filled out, return to this page and upload the completed form along with the required supporting documents in their respective fields for review and assessment by our attorneys. You will receive an email confirming that your documents have been received, verified, and whether you are eligible to proceed with the visa application process.",
  },
];

export default function Apply() {
  // State to track files per section and field
  const [uploadedFiles, setUploadedFiles] = useState<
    Record<string, Record<string, File[]>>
  >({});
  // State to track text input values per section and field
  const [additionalInfo, setAdditionalInfo] = useState<
    Record<string, Record<string, string>>
  >({});

  // React Query Mutation using Axios to post FormData
  const applyMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await axios.post("/api/apply-visa", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success(
        "Your Application was submitted successfully. You will be contacted shortly via the email you provided."
      );
    },
    onError: (error: unknown) => {
      toast.error("Ooops! Error submitting application.");
      // alert("Ooops! Error submitting application.");
      console.error("Error submitting application:", error);
    },
  });

  // Scroll to a specific section by ID
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle file input changes for a specific section and field
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    sectionTitle: string,
    fieldName: string
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadedFiles((prev) => ({
      ...prev,
      [sectionTitle]: {
        ...(prev[sectionTitle] || {}),
        [fieldName]: [
          ...(prev[sectionTitle]?.[fieldName] || []),
          ...Array.from(files),
        ],
      },
    }));
  };

  // Handle text input changes for a specific section and field
  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    sectionTitle: string,
    fieldName: string
  ) => {
    const { value } = e.target;
    setAdditionalInfo((prev) => ({
      ...prev,
      [sectionTitle]: {
        ...(prev[sectionTitle] || {}),
        [fieldName]: value,
      },
    }));
  };

  // Handle removal of a file from a specific section and field
  const handleRemoveFile = (
    sectionTitle: string,
    fieldName: string,
    fileIndex: number
  ) => {
    setUploadedFiles((prev) => {
      if (!prev[sectionTitle] || !prev[sectionTitle][fieldName]) return prev;

      const updatedFiles = { ...prev };
      updatedFiles[sectionTitle] = {
        ...updatedFiles[sectionTitle],
        [fieldName]: updatedFiles[sectionTitle][fieldName].filter(
          (_, index) => index !== fileIndex
        ),
      };

      // If no files remain for the field, remove that field
      if (updatedFiles[sectionTitle][fieldName].length === 0) {
        delete updatedFiles[sectionTitle][fieldName];
      }
      // If no fields remain for the section, remove the section
      if (Object.keys(updatedFiles[sectionTitle]).length === 0) {
        delete updatedFiles[sectionTitle];
      }

      return updatedFiles;
    });
  };

  // Render file previews for the provided files
  const renderFilePreviews = (
    files: File[],
    sec: string,
    fieldName: string
    // i: number
  ) => {
    return files.map((file, index) => {
      const fileUrl = URL.createObjectURL(file);
      const isImage = file.type.startsWith("image/");
      return (
        <div key={index} className="flex items-center gap-2 mt-2">
          {isImage ? (
            <Image
              src={fileUrl}
              alt={`Preview ${index + 1}`}
              className="object-cover rounded"
              width={200}
              height={20}
            />
          ) : (
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              <FaDownload /> View File
            </a>
          )}
          <button
            onClick={() => handleRemoveFile(sec, fieldName, index)}
            className="text-red-600"
            type="button"
          >
            <FaTimes />
          </button>
        </div>
      );
    });
  };

  // Handle submission for a given section: build a FormData with text and file values then submit
  const handleSectionSubmit = (e: React.FormEvent, sectionTitle: string) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("sectionTitle", sectionTitle);

    // Append text values
    const textData = additionalInfo[sectionTitle] || {};
    for (const [fieldName, value] of Object.entries(textData)) {
      formData.append(fieldName, value);
    }

    // Append files
    const fileData = uploadedFiles[sectionTitle] || {};
    for (const [fieldName, fileArr] of Object.entries(fileData)) {
      fileArr.forEach((file) => {
        formData.append(fieldName, file);
      });
    }

    // Submit the form data using our React Query mutation
    applyMutation.mutate(formData);
  };

  return (
    <>
      <Head>
        <title>Apply - Immigration Law Firm</title>
      </Head>
      <div className="pages-banner about">
        <div className="base-container w-container">
          <div className="banner-title-wrapper">
            <h1 className="banner-title">Apply</h1>
          </div>
        </div>
      </div>
      <section
        className="p-10 max-w-3xl mx-auto"
        style={{ margin: "40px auto", padding: "10px" }}
      >
        <h1
          className="text-xl font-bold text-gray-900 mb-4"
          style={{ fontSize: "2.5rem", color: "#A5272B" }}
        >
          Immigration Assessment Forms
        </h1>
        <p className="mb-6 text-gray-600">
          Please spend a few minutes completing the assessment form. Once you
          complete the form and submit, our assessment team will contact you to
          provide further assistance. Explore other immigration categories for
          precise assessment.
        </p>
        <p
          style={{ fontSize: "1.3rem", fontWeight: "bold", marginTop: "20px" }}
        >
          Links to other Immigration Assessment Forms Categories:
        </p>
        {otherImmigration.map((other) => (
          <div key={other.text} className="flex items-center gap-2">
            <p className="text-[#A5272B]">{other.icon}</p>
            <p
              className="text-blue-600 text-xs cursor-pointer"
              onClick={() => scrollToSection(other.text)}
            >
              {other.text}
            </p>
          </div>
        ))}
        {sections.map((section, index) => (
          <div
            key={index}
            id={section.title}
            className="mb-8 p-4 border-b bg-white"
            style={{ marginTop: "60px" }}
          >
            <h2
              className="text-xl font-semibold text-gray-900 mb-4"
              style={{ fontSize: "1.5rem", color: "#A5272B" }}
            >
              {section.title}
            </h2>
            <p>{section.instruction}</p>
            {section.downloadLink && (
              <a
                href={section.downloadLink}
                download
                style={{
                  color: "oklch(0.546 0.245 262.881)",
                  marginTop: "30px",
                  marginBottom: "20px",
                  fontSize: "0.9rem",
                  display: "block",
                }}
              >
                Download {section.title}
              </a>
            )}
            <form
              className="space-y-8"
              onSubmit={(e) => handleSectionSubmit(e, section.title)}
            >
              <div>
                <p
                  style={{
                    marginTop: "15px",
                    fontSize: "14px",
                    color: "#777777",
                  }}
                >
                  First Name
                </p>
                <input
                  type="text"
                  placeholder="First Name"
                  className="mt-1 w-[75%] block border focus:outline-none rounded"
                  onChange={(e) =>
                    handleTextChange(e, section.title, "firstName")
                  }
                  style={{ marginTop: "-6px", padding: "10px" }}
                />
              </div>
              <div>
                <p
                  style={{
                    marginTop: "15px",
                    fontSize: "14px",
                    color: "#777777",
                  }}
                >
                  Last Name
                </p>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="mt-1 w-[75%] block border focus:outline-none rounded"
                  onChange={(e) =>
                    handleTextChange(e, section.title, "lastName")
                  }
                  style={{ marginTop: "-6px", padding: "10px" }}
                />
              </div>
              <div>
                <p
                  style={{
                    marginTop: "15px",
                    fontSize: "14px",
                    color: "#777777",
                  }}
                >
                  Email Address
                </p>
                <input
                  type="email"
                  placeholder="Email address"
                  className="mt-1 w-[75%] block border focus:outline-none rounded"
                  onChange={(e) => handleTextChange(e, section.title, "email")}
                  style={{ marginTop: "-6px", padding: "10px" }}
                />
              </div>
              {section.fields.map((field, i) => (
                <div key={i}>
                  <p
                    style={{
                      marginTop: "15px",
                      fontSize: "14px",
                      color: "#777777",
                    }}
                  >
                    {field}
                  </p>
                  <input
                    type="file"
                    multiple
                    placeholder="Choose File"
                    style={{
                      padding: "8px",
                      marginTop: "-6px",
                      color: "#fff",
                      marginBottom: "10px",
                      cursor: "pointer",
                    }}
                    className="block w-26 border-none bg-[#828385] border rounded"
                    onChange={(e) => handleFileChange(e, section.title, field)}
                  />
                  {uploadedFiles[section.title]?.[field] &&
                    renderFilePreviews(
                      uploadedFiles[section.title][field],
                      section.title,
                      field
                      // i
                    )}
                </div>
              ))}
              <div>
                <p
                  style={{
                    marginTop: "15px",
                    fontSize: "14px",
                    color: "#777777",
                  }}
                >
                  Additional Info
                </p>
                <input
                  type="text"
                  placeholder="Optional additional info"
                  className="mt-1 w-[75%] block border focus:outline-none rounded"
                  onChange={(e) =>
                    handleTextChange(e, section.title, "additionalInfo")
                  }
                  style={{ marginTop: "-6px", padding: "10px" }}
                />
              </div>
              <button
                type="submit"
                style={{
                  marginTop: "40px",
                  marginBottom: "15px",
                  backgroundColor: "#A5272B",
                  color: "white",
                  padding: "5px 30px",
                  borderRadius: "5px",
                }}
                disabled={applyMutation.status === "pending"}
              >
                {applyMutation.status === "pending"
                  ? "Submitting..."
                  : "Submit"}
              </button>
            </form>
          </div>
        ))}
      </section>
    </>
  );
}
