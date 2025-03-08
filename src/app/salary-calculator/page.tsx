"use client";
import Image from "next/image";

import React from "react";

/**
 * Tailwind classes used:
 * - Container: max-w-4xl mx-auto p-4
 * - Heading color: text-[#7D1D1D]
 * - Text color: text-gray-700
 * - Spacing: mb-4, mt-4, etc.
 */

export default function CanadianJobsSalaryCalculatorTest() {
  return (
    <section>
      <div className="pages-banner services">
        <div className="base-container w-container">
          <div className="banner-title-wrapper">
            <h1 className="banner-title">Salary Calculator Tool</h1>
          </div>
        </div>
      </div>

      <div
        className="max-w-4xl mx-auto p-4 text-gray-900"
        style={{ margin: "50px auto" }}
      >
        {/* Page Title */}
        <h1
          className="text-3xl font-bold text-[#7D1D1D] mb-4"
          style={{ fontSize: "2rem" }}
        >
          Canadian Jobs Salary Calculator Test
        </h1>

        {/* Intro Text */}
        <p className="mb-4 text-gray-700">
          This tool helps individuals to estimate their potential salary or
          income in Canada based on various factors such as occupation,
          education, experience, and location. By entering your details, you can
          get a clearer picture of what to expect when pursuing a career in
          Canada.
        </p>

        {/* Example Image */}
        <div className="mb-6">
          <Image
            src="/images/boy.jpg"
            alt="Canadian Jobs Salary Calculator"
            className="w-full h-auto rounded-lg shadow-md"
            width={100}
            height={100}
          />
        </div>

        {/* Section 1 */}
        <h2
          className="text-xl font-semibold text-[#7D1D1D] mb-2"
          style={{ fontSize: "1.5rem" }}
        >
          How the Salary Calculator Works
        </h2>
        <p className="mb-4 text-gray-700">
          The tool typically requires input from users about their occupation,
          job title, level of experience, education, and the region or city in
          which they plan to work. It then uses data from official labor
          statistics, industry reports, or salary surveys to estimate an
          expected salary range. This provides users with valuable insights into
          the average compensation they might earn in their chosen field.
        </p>

        {/* Section 2 */}
        <h2
          className="text-xl font-semibold text-[#7D1D1D] mb-2"
          style={{ fontSize: "1.5rem" }}
        >
          Data Sources
        </h2>
        <p className="mb-4 text-gray-700">
          The Canadian Jobs Salary Calculator tool typically relies on salary
          data from reputable sources, such as government labor market surveys,
          industry associations, or job boards that gather data from employers
          and job seekers. These sources help ensure accurate, up-to-date
          information for a wide range of occupations across different regions
          in Canada.
        </p>

        {/* Section 3 */}
        <h2
          className="text-xl font-semibold text-[#7D1D1D] mb-2"
          style={{ fontSize: "1.5rem" }}
        >
          Benefits of Using the Calculator
        </h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>
            <strong>Career Planning:</strong> Individuals can explore potential
            career paths by comparing different occupations and regions.
          </li>
          <li>
            <strong>Salary Negotiation:</strong> Job seekers can enter salary
            discussions with realistic expectations based on market data.
          </li>
          <li>
            <strong>Budgeting and Financial Goals:</strong> Knowing your
            potential salary helps with financial planning and setting
            achievable goals.
          </li>
        </ul>

        {/* Section 4 */}
        <h2
          className="text-xl font-semibold text-[#7D1D1D] mb-2"
          style={{ fontSize: "1.5rem" }}
        >
          Accuracy and Limitations
        </h2>
        <p className="mb-4 text-gray-700">
          While the salary calculator provides valuable estimates, it cannot
          account for every variable that may impact an individual&apos;s
          compensation. Factors such as company size, industry growth,
          networking opportunities, and negotiation skills can significantly
          influence actual salaries. Thus, the tool should be used as a guide
          rather than a definitive predictor of earnings.
        </p>

        {/* Section 5 */}
        <h2
          className="text-xl font-semibold text-[#7D1D1D] mb-2"
          style={{ fontSize: "1.5rem" }}
        >
          How to Use the Calculator
        </h2>
        <p className="mb-4 text-gray-700">
          Using the Canadian Jobs Salary Calculator tool is typically simple:
          you provide your job title, years of experience, highest level of
          education, and preferred location. The tool then processes this
          information and displays a salary range based on current market trends
          and historical data.
        </p>

        {/* Section 6 */}
        <h2
          className="text-xl font-semibold text-[#7D1D1D] mb-2"
          style={{ fontSize: "1.5rem" }}
        >
          Frequently Asked Questions
        </h2>
        <p className="mb-4 text-gray-700">
          <strong>Q:</strong> Do I need a specific occupation to use the
          calculator? <br />
          <strong>A:</strong> While entering a precise occupation yields more
          accurate results, general fields can still provide rough estimates.
        </p>
        <p className="mb-4 text-gray-700">
          <strong>Q:</strong> How often is the data updated? <br />
          <strong>A:</strong> The calculator updates periodically to reflect
          changes in labor market statistics and salary surveys.
        </p>

        {/* Final Thoughts */}
        <h2
          className="text-xl font-semibold text-[#7D1D1D] mb-2"
          style={{ fontSize: "1.5rem" }}
        >
          Conclusion
        </h2>
        <p className="mb-4 text-gray-700">
          The Canadian Jobs Salary Calculator Test is a valuable resource for
          individuals planning their career paths in Canada. By providing
          realistic salary estimates, it empowers users to make informed
          decisions about their professional future. Whether you&apos;re
          negotiating a salary, changing careers, or simply curious about
          earning potential, this tool can offer crucial insights to guide your
          journey.
        </p>
      </div>
    </section>
  );
}
