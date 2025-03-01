"use client";
import Image from "next/image";
import Head from "next/head";

// import { useState } from "react";

export default function ImmigrationPage() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Our Services details - Legal Pathway Immigration Law Firm</title>
        <meta
          property="og:title"
          content="Our Services - Legal Pathway Immigration Law Firm"
        />
        <meta
          property="twitter:title"
          content="Our Services - Legal Pathway Immigration Law Firm"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <section>
        <div className="pages-banner services">
          <div className="base-container w-container">
            <div className="banner-title-wrapper">
              <h1 className="banner-title">Immigration Details</h1>
            </div>
          </div>
        </div>
        <div
          className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10"
          style={{ margin: "0 auto" }}
        >
          {/* Left Content Section */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Federal Skilled Worker Program
            </h1>
            <p className="text-gray-700">
              Are you a skilled professional looking to build your career and
              life in Canada? The Federal Skilled Worker (FSW) Program might be
              the pathway for you...
            </p>
            <Image
              src="/images/larry.jpg"
              width={800}
              height={400}
              alt="Skilled Worker"
              className="rounded-lg shadow-lg"
            />

            <h2 className="text-2xl font-semibold text-gray-900">
              Eligibility Criteria
            </h2>
            <ul className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>
                <strong>Work Experience:</strong> At least one year (1,650
                hours)...
              </li>
              <li>
                <strong>Language Proficiency:</strong> English or French
                proficiency...
              </li>
              <li>
                <strong>Education:</strong> Possess an educational credential
                assessment (ECA)...
              </li>
              <li>
                <strong>Admissibility:</strong> No security risk, criminal
                record...
              </li>
              <li>
                <strong>Points System:</strong> Applicants are evaluated using a
                points system...
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900">
              Application Process
            </h2>
            <div className="space-y-4">
              {[
                "Express Entry Profile",
                "Receive an Invitation",
                "Submit Documents",
                "Application Review",
                "Permanent Residence",
              ].map((step, index) => (
                <p key={index} className="text-gray-700">
                  <strong>
                    Step {index + 1}: {step}
                  </strong>{" "}
                  - Description of the step...
                </p>
              ))}
            </div>
          </div>

          {/* Right Side Form Section */}
          <div
            style={{ padding: "10px" }}
            className="bg-white max-h-[30rem] shadow-lg rounded-lg  space-y-4 border border-gray-200 sticky top-10"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              Quick Enquiry
            </h3>
            <p className="text-gray-600">
              Provide your requirements below, and we’ll get back to you
              shortly.
            </p>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 border rounded-md"
                style={{ padding: "10px" }}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-md"
                style={{ padding: "10px" }}
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 border rounded-md"
                style={{ padding: "10px" }}
                required
              />
              <select
                className="w-full p-2 border rounded-md"
                style={{ padding: "10px" }}
              >
                <option>Select Service</option>
                <option>Work Permit</option>
                <option>Study Permit</option>
              </select>
              <p
                style={{ padding: "10px" }}
                className="w-full bg-red-600 text-center text-white py-2 rounded-md hover:bg-red-700"
              >
                Send
              </p>
            </form>
            {/* <p className="w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-800">
              Click Here to Book Consultation
            </p> */}
            <div className="text-center border-t pt-4">
              <p className="text-gray-700 font-medium">Call for Information</p>
              <p className="text-lg font-bold text-gray-900">
                +1 (236) 818 5558
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
