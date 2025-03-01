"use client";
import Head from "next/head";
// import Image from "next/image";

const visas = [
  {
    id: 1,
    title: "Temporary Visa",
    icon: "/path/to/icon1.png",
    files: [
      "Upload your completed general assessment form",
      "Upload your International Passport",
      "Upload your passport photograph",
      "Upload birth certificate file",
      "Upload your marriage certificate",
    ],
  },
  {
    id: 2,
    title: "Permanent Visa",
    icon: "/path/to/icon2.png",
    files: ["Proof of Funds", "Medical Report", "Police Clearance"],
  },
  {
    id: 3,
    title: "Study Visa",
    icon: "/path/to/icon3.png",
    files: ["Admission Letter", "Tuition Payment Receipt", "Bank Statement"],
  },
  {
    id: 4,
    title: "Permanent Resident",
    icon: "/path/to/icon4.png",
    files: ["Employment Record", "Residency Form"],
  },
  {
    id: 5,
    title: "Citizenship by Investment",
    icon: "/path/to/icon5.png",
    files: ["Investment Proof", "Business Registration Certificate"],
  },
  {
    id: 6,
    title: "Family Visa",
    icon: "/path/to/icon6.png",
    files: ["Marriage Certificate", "Birth Certificate"],
  },
  {
    id: 7,
    title: "Work Permit Visa",
    icon: "/path/to/icon7.png",
    files: ["Job Offer Letter", "Work Contract"],
  },
];

export default function Apply() {
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
      <section>
        <div
          className="max-w-5xl mx-auto p-6 bg-white text-black"
          style={{ margin: "40px auto" }}
        >
          <h1 className="font-bold mb-4 text-2xl">
            Immigration Assessment Forms
          </h1>
          <p className="mb-4">
            Please complete the form below to provide your details for
            assessment.
          </p>
          {visas.map((visa) => (
            <VisaForm key={visa.id} title={visa.title} files={visa.files} />
          ))}
        </div>
      </section>
    </>
  );
}

function VisaForm({ title, files }: { title: string; files: string[] }) {
  return (
    <div className="mb-10 border-t border-gray-100 py-10 pt-6">
      <h2 className="font-semibold mb-4 text-xl">{title}</h2>
      <p className="text-gray-600 mb-4">Upload your required documents here:</p>
      <form className="">
        {files.map((file, index) => (
          <FileInput key={index} label={file} />
        ))}
        <Input label="Additional Information" type="text" />
        <div
          className="bg-[#FF5400] w-50 text-center mt-10  text-white"
          style={{ marginTop: "15px", padding: "10px", marginBottom: "40px" }}
        >
          Submit
        </div>
      </form>
    </div>
  );
}

function Input({ label, type }: { label: string; type: string }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <label className="block font-medium mb-1 text-gray-700">{label}</label>

      <input
        type={type}
        style={{ padding: "10px" }}
        placeholder="You may provide more infomation here."
        className="w-full p-2 border rounded-md"
        required
      />
    </div>
  );
}

function FileInput({ label }: { label: string }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <label className="block text-gray-700 font-medium">{label}</label>
      <input
        type="file"
        style={{ padding: "10px" }}
        className="bg-gray-300 border-none rounded-md focus:outline-none focus:ring-2"
        required
      />
    </div>
  );
}
