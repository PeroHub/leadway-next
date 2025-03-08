"use client";

import React from "react";
import Image from "next/image";

const CRSCalculator: React.FC = () => {
  return (
    <section>
      <div className="pages-banner services">
        <div className="base-container w-container">
          <div className="banner-title-wrapper">
            <h1 className="banner-title">CRS Calculator Programs</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6" style={{ margin: "50px auto" }}>
        {/* Header Section */}
        <div className="p-6">
          <h1 className=" font-bold text-red-700" style={{ fontSize: "2rem" }}>
            CRS Calculator (Comprehensive Ranking System) and Express Entry
            Eligibility Evaluator
          </h1>
          <p className="mt-2 text-gray-700">
            This Comprehensive Ranking System (CRS) calculator is only an
            estimate. If you would like a more accurate assessment, you can
            complete our Free Express Entry assessment.
          </p>
        </div>

        {/* Content Sections */}
        <div className="mt-6">
          {/* FAQ Section */}
          <div className="mb-4">
            <h2
              className="text-xl font-bold text-gray-800"
              style={{ fontSize: "1.5rem" }}
            >
              Comprehensive Ranking System
            </h2>
            <ul className="list-disc list-inside text-blue-600">
              <li>What is the Comprehensive Ranking System (CRS) score?</li>
              <li>
                How can a Provincial Nominee Program increase my CRS score?
              </li>
              <li>What CRS score is required for PNP?</li>
            </ul>
          </div>

          {/* Information Sections */}
          <div className="bg-red-700 text-white p-4 font-semibold rounded-md mt-4">
            What is the Comprehensive Ranking System (CRS) score?
          </div>
          <p className="mt-2 text-gray-700">
            The CRS is a tool used by Immigration, Refugees and Citizenship
            Canada (IRCC) to rank profiles.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-6 flex justify-center">
          <Image
            src="/images/crs.jpg"
            alt="Canada Express Entry"
            className="rounded-lg shadow-md"
            width={500}
            height={500}
          />
        </div>

        {/* Additional Sections */}
        <div className="mt-6">
          <h2
            className="text-xl font-bold text-gray-800"
            style={{ fontSize: "1.5rem" }}
          >
            How can a Provincial Nominee Program increase my CRS score?
          </h2>
          <p className="mt-2 text-gray-700">
            Provincial Nominee Programs (PNP) offer pathways to permanent
            residency for candidates with low CRS scores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CRSCalculator;
