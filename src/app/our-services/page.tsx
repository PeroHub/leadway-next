"use client";
// import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";

const immigrationPrograms = [
  {
    id: 1,
    title: "Federal Skilled Worker Program",
    description:
      "A program for skilled professionals looking to move to Canada...",
    image: "/images/larry.jpg",
    eligibility: [
      "At least one year (1,650 hours) of work experience.",
      "English or French proficiency required.",
      "Educational credential assessment (ECA) needed.",
      "No security risk or criminal record.",
      "Applicants are evaluated using a points system.",
    ],
    steps: [
      "Express Entry Profile",
      "Receive an Invitation",
      "Submit Documents",
      "Application Review",
      "Permanent Residence",
    ],
    link: "/our-services/details",
  },
  {
    id: 2,
    title: "Canadian Experience Class",
    description: "For individuals with skilled work experience in Canada...",
    image: "/images/kerry.jpg",
    eligibility: [
      "Minimum 1 year of skilled work experience in Canada.",
      "CLB 7 for TEER 0 or 1 jobs, CLB 5 for TEER 2 or 3.",
      "Not admissible due to security or criminal records.",
    ],
    steps: [
      "Express Entry Profile",
      "Receive an Invitation",
      "Submit Documents",
      "Application Review",
      "Permanent Residence",
    ],
    link: "/our-services/details",
  },
  {
    id: 3,
    title: "Study Permit for Canada",
    description:
      "Annually, more than 135,000 students choose Canada for their education. To study in Canada, a study permit issued by the government is required.",
    image: "/images/visa-ambassador.jpg",
    eligibility: [
      "Obtain a letter of acceptance from a Designated Learning Institution (DLI).",
      "Demonstrate intent to leave Canada upon permit expiry.",
      "Provide financial proof to cover tuition, living expenses, and return travel.",
      "Maintain a clean legal record and adhere to Canadian laws.",
      "Be in good health and complete required medical examinations.",
      "Meet general admissibility criteria for entry into Canada.",
      "For Quebec studies, obtain a Quebec Acceptance Certificate (QAC).",
    ],
    steps: [
      "Assess Your Eligibility",
      "Prepare Required Documents",
      "Complete Study Permit Forms",
      "Pay Application Fees",
      "Submit Study Permit Application",
      "Provide Additional Information (if required)",
    ],
    link: "/our-services/details",
  },
  {
    id: 4,
    title: "Parents & Grandparents Sponsorship Program",
    description:
      "A pathway for Canadian citizens and permanent residents to reunite with their parents and grandparents in Canada.",
    image: "/images/visa-ambassador.jpg",
    eligibility: [
      "Be a Canadian Citizen or Permanent Resident.",
      "Meet minimum income requirements (typically LICO+30%).",
      "Commit to financially supporting your parents or grandparents.",
    ],
    steps: [
      "Submit the Interest to Sponsor Form",
      "Receive an Invitation to Apply",
      "Submit the Application",
      "Processing of Application",
      "Decision and Arrival",
    ],
    key_requirements: [
      "Provide financial documentation (tax returns, pay stubs, employment letters).",
      "Submit proof of relationship (birth certificates, marriage certificates, etc.).",
      "Undergo required medical examinations.",
      "Provide police certificates for background verification.",
    ],
    resources:
      "Explore our resources, FAQs, and connect with our team for assistance in your sponsorship journey.",
    link: "/our-services/details",
  },
];

export default function ImmigrationPrograms() {
  // useEffect(() => {
  //   // Clear localStorage when component loads to prevent stale data
  //   localStorage.removeItem("selectedProgram");
  // }, []);

  const handleProgramSelect = (program: {
    id: number;
    title: string;
    description: string;
    image: string;
    eligibility: string[];
    steps: string[];
  }) => {
    localStorage.setItem("selectedProgram", JSON.stringify(program));
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Immigration Programs - Legal Pathway Immigration Law Firm</title>
        <meta
          property="og:title"
          content="Immigration Programs - Legal Pathway Immigration Law Firm"
        />
        <meta
          property="twitter:title"
          content="Immigration Programs - Legal Pathway Immigration Law Firm"
        />
      </Head>

      <div className="pages-banner services">
        <div className="base-container w-container">
          <div className="banner-title-wrapper">
            <h1 className="banner-title">Immigration Programs</h1>
          </div>
        </div>
      </div>

      <div className="section without-bottom-spacing mb-20">
        <div className="base-container w-container">
          <div className="collection-list-wrapper-services w-dyn-list">
            <div role="list" className="services-list-wrapper w-dyn-items">
              {immigrationPrograms.map((program) => (
                <div
                  key={program.id}
                  role="listitem"
                  className="collection-item-services w-dyn-item"
                >
                  <div className="work-wrapper">
                    {/* <Image
                      src={program.image}
                      alt={program.title}
                      width={100}
                      height={100}
                      className="rounded-lg shadow-lg"
                    /> */}
                    <h5 className="services-titles">{program.title}</h5>
                    <p className="service-item-description">
                      {program.description}
                    </p>
                    <div className="button-wrapper smaller-spacing">
                      <Link
                        href={`${program.link}`}
                        className="link-with-arrow-underline white-style"
                        onClick={() => handleProgramSelect(program)}
                      >
                        Learn more
                      </Link>
                    </div>
                    <div className="dark-overlay"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
