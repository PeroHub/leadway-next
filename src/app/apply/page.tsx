"use client";

import { useState } from "react";
import Head from "next/head";
import { FaArrowAltCircleRight, FaDownload, FaTimes } from "react-icons/fa";
import Image from "next/image";

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
      "/pdf/imm.gatewayimmigrationlawfirmassessmentform.generalvisa.pdf",
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
      "/pdf/imm.gatewayimmigrationlawfirmassessmentform.familyvisa.pdf",
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
      "/pdf/imm.gatewayimmigrationlawfirmassessmentform.businessvisa.pdf",
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
      "/pdf/imm.gatewayimmigrationlawfirmassessmentform.businessvisa.pdf",
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
      "/pdf/imm.gatewayimmigrationlawfirmassessmentform.sponsorshipvisa.pdf",
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
      "/pdf/imm.gatewayimmigrationlawfirmassessmentform.workpermitvisa.pdf",
    instruction:
      "Instructions: Download and complete the assessment form. Once filled out, return to this page and upload the completed form along with the required supporting documents in their respective fields for review and assessment by our attorneys. You will receive an email confirming that your documents have been received, verified, and whether you are eligible to proceed with the visa application process.",
  },
];

export default function Apply() {
  const [uploadedFiles, setUploadedFiles] = useState<
    Record<string, Record<string, File[]>>
  >({});
  const [additionalInfo, setAdditionalInfo] = useState<
    Record<string, Record<string, string>>
  >({});

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle multiple file selection per field
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

  // Handle additional text input per field
  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    sectionTitle: string
  ) => {
    setAdditionalInfo((prev) => ({
      ...prev,
      [sectionTitle]: {
        ...(prev[sectionTitle] || {}),
      },
    }));
  };

  console.log({ uploadedFiles, additionalInfo });

  // Handle file removal
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

      // Remove field if empty
      if (updatedFiles[sectionTitle][fieldName].length === 0) {
        delete updatedFiles[sectionTitle][fieldName];
      }

      // Remove section if empty
      if (Object.keys(updatedFiles[sectionTitle]).length === 0) {
        delete updatedFiles[sectionTitle];
      }

      return { ...updatedFiles };
    });
  };

  // Render file previews
  const renderFilePreviews = (
    files: File[],
    sec: string,
    p: string,
    i: number
  ) => {
    return files.map((file, index) => {
      const fileUrl = URL.createObjectURL(file);
      const isImage = file.type.startsWith("image/");
      console.log(files, sec, p, i);
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
            onClick={() => handleRemoveFile(sec, p, index)}
            className="text-red-600"
          >
            <FaTimes />
          </button>
        </div>
      );
    });
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
        className="p-6 max-w-3xl mx-auto"
        style={{ margin: "40px auto" }}
      >
        <h1
          className="text-xl font-bold text-gray-900 mb-4"
          style={{ fontSize: "3rem", color: "#A5272B" }}
        >
          Immigration Assessment Forms
        </h1>
        <p className="mb-6 text-gray-600">
          Please spend a few minutes completing the assessment form. Once you
          complete the form and submitted, LEGAL PATHWAY IMMIGRATION LAWFIRM
          assessment team will contact you to provide further assistance.
          Explore other immigration categories for precise assessment.
        </p>

        <p
          className=""
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
            className="mb-8 p-4 border-b  bg-white"
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
                className=""
                style={{
                  color: "oklch(0.546 0.245 262.881)",
                  marginTop: "30px",
                  marginBottom: "20px",
                  fontSize: "0.9rem",
                }}
              >
                Download {section.title}
              </a>
            )}
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {section.fields.map((field, i) => (
                <div key={i} className="">
                  <p
                    className=""
                    style={{
                      marginTop: "15px",
                      fontSize: "14px",
                      color: "#777777",
                    }}
                  >
                    {field}
                  </p>
                  {/* File Input */}
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
                    className="block w-26 border-none bg-[#828385]  border rounded"
                    onChange={(e) => handleFileChange(e, section.title, field)}
                  />
                  {/* Additional Info Input */}
                  {/* File Previews */}
                  {uploadedFiles[section.title]?.[field] &&
                    renderFilePreviews(
                      uploadedFiles[section.title][field],
                      section.title,
                      field,
                      i
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
                  Addtional Info
                </p>
                <input
                  type="text"
                  placeholder="Optional additional info"
                  className="mt-1 w-[75%] block border focus:outline-none rounded"
                  onChange={(e) => handleTextChange(e, section.title)}
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
              >
                Submit
              </button>
            </form>
          </div>
        ))}
      </section>
    </>
  );
}
