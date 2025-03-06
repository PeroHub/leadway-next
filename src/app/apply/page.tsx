"use client";

import { useState } from "react";
import Head from "next/head";
import { Button } from "@radix-ui/themes";
// import Image from "next/image";

const sections = [
  {
    title: "General Immigration Assessment Form",
    fields: [
      "Full Name",
      "Email",
      "Phone Number",
      "Country of Residence",
      "Reason for Immigration",
    ],
  },
  {
    title: "Family Visa Immigration Assessment Form",
    fields: [
      "Applicant Name",
      "Relationship to Sponsor",
      "Sponsor Name",
      "Country of Residence",
      "Immigration Purpose",
    ],
  },
  {
    title: "Business Visa Immigration Assessment Form",
    fields: [
      "Full Name",
      "Company Name",
      "Business Type",
      "Country of Business",
      "Investment Amount",
    ],
  },
  {
    title: "Study Visa Immigration Assessment Form",
    fields: [
      "Student Name",
      "Institution Name",
      "Course of Study",
      "Duration",
      "Country of Study",
    ],
  },
  {
    title: "Sponsorship Visa Immigration Assessment Form",
    fields: [
      "Applicant Name",
      "Sponsor Name",
      "Relationship",
      "Country",
      "Purpose of Sponsorship",
    ],
  },
  {
    title: "Work Permit Visa Immigration Assessment Form",
    fields: [
      "Full Name",
      "Employer Name",
      "Job Title",
      "Work Country",
      "Work Duration",
    ],
  },
];

export default function Apply() {
  const [uploadedFiles, setUploadedFiles] = useState<
    Record<string, File | null>
  >({});

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    sectionTitle: string
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFiles((prev) => ({
        ...prev,
        [sectionTitle]: e.target.files[0],
      }));
    }
  };
  return (
    <>
      <Head>
        <title>Apply - Immigration Law Firm</title>
      </Head>
      <div className="pages-banner about">
        <div className="base-container w-container">
          <div className="banner-title-wrapper">
            <h1
              data-w-id="fe347540-b17b-7eb6-0d52-86453fd36721"
              style={{ opacity: 1 }}
              className="banner-title"
            >
              Apply
            </h1>
          </div>
        </div>
      </div>
      <section className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Immigration Assessment Forms
        </h1>
        <p className="mb-6 text-gray-600">
          Please select the relevant form below and fill out the necessary
          details for your application.
        </p>
        {sections.map((section, index) => (
          <div
            key={index}
            className="mb-8 p-4 border rounded-lg bg-white shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {section.title}
            </h2>
            <form className="space-y-4">
              {section.fields.map((field, i) => (
                <div key={i}>
                  <label className="text-gray-700">{field}</label>
                  <input
                    type="text"
                    className="mt-1 block w-full"
                    placeholder={`Enter ${field}`}
                  />
                </div>
              ))}
              <div>
                <label className="text-gray-700">Upload Documents</label>
                <input
                  type="file"
                  className="mt-1 block w-full"
                  onChange={(e) => handleFileChange(e, section.title)}
                />
              </div>
              <Button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                Submit
              </Button>
            </form>
          </div>
        ))}
      </section>
    </>
  );
}
