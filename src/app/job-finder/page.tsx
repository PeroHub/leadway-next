import React from "react";
import Image from "next/image";
const ImmigrationPage = () => {
  return (
    <section>
      <div className="pages-banner services">
        <div className="base-container w-container">
          <div className="banner-title-wrapper">
            <h1 className="banner-title">A Guide for Newcomers</h1>
          </div>
        </div>
      </div>

      <div
        className="max-w-4xl mx-auto p-4 text-gray-900"
        style={{ margin: "50px auto" }}
      >
        {/* Header Section */}
        <header className=" text-white py-6 px-4 text-center">
          <h1 className="text-2xl font-bold" style={{ fontSize: "2rem" }}>
            Find Jobs in Canada for Skilled Workers
          </h1>
        </header>

        {/* Content Section */}
        <section className="mt-6">
          <h2
            className="text-xl font-semibold text-[#7D1D1D]"
            style={{ fontSize: "1.5rem" }}
          >
            Introduction
          </h2>
          <p className="mt-2 text-gray-700">
            Canada offers a range of job opportunities for skilled workers...
          </p>
        </section>

        {/* Image Section */}
        <div className="mt-4">
          <Image
            src="/images/can.jpeg"
            alt="Job Search in Canada"
            className=" rounded-lg shadow-md"
            height={500}
            width={500}
          />
        </div>

        {/* More Content Sections */}
        <section className="mt-6">
          <h2
            className="text-xl font-semibold text-[#7D1D1D]"
            style={{ fontSize: "1.5rem" }}
          >
            Job Opportunities
          </h2>
          <p className="mt-2 text-gray-700">
            There are numerous pathways to securing employment in Canada...
          </p>
        </section>

        <section className="mt-6">
          <h2
            className="text-xl font-semibold text-[#7D1D1D]"
            style={{ fontSize: "1.5rem" }}
          >
            How to Apply
          </h2>
          <p className="mt-2 text-gray-700">
            To apply for jobs, you need to prepare your resume, research
            employers...
          </p>
        </section>

        {/* Additional Images */}
        <div className="mt-4">
          <Image
            src="/images/search.webp"
            alt="Job Interview"
            className="w-full h-auto rounded-lg shadow-md"
            width={100}
            height={100}
          />
        </div>

        {/* Conclusion */}
        <section className="mt-6">
          <h2
            className="text-xl font-semibold text-[#7D1D1D]"
            style={{ fontSize: "1.5rem" }}
          >
            Final Thoughts
          </h2>
          <p className="mt-2 text-gray-700">
            Finding a job in Canada requires preparation, persistence, and the
            right approach...
          </p>
        </section>
      </div>
    </section>
  );
};

export default ImmigrationPage;
