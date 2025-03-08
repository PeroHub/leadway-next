import Image from "next/image";
import React from "react";

const CanadaImmigrationLanguageConverter = () => {
  return (
    <section>
      <div className="pages-banner services">
        <div className="base-container w-container">
          <div className="banner-title-wrapper">
            <h1 className="banner-title">
              Canada Immigration Language Converter
            </h1>
          </div>
        </div>
      </div>
      <div
        className="max-w-4xl mx-auto px-4 py-8 text-gray-900"
        style={{ margin: "50px auto" }}
      >
        <h1
          className="text-3xl font-bold text-red-700 mb-6"
          style={{ fontSize: "2rem" }}
        >
          Canada Immigration Language Converter
        </h1>
        <p className="text-lg mb-6">
          A standardized language test result showing proficiency in French,
          English, or both is required for immigration to Canada under Express
          Entry. This tool helps individuals understand and navigate the
          language proficiency process in immigration applications.
        </p>

        {/* Table of Contents */}
        <h2
          className="text-xl font-semibold text-red-700 mt-6"
          style={{ fontSize: "1.5rem" }}
        >
          Contents
        </h2>
        <ul className="list-disc list-inside text-blue-600">
          <li>How Does the Language Converter Work?</li>
          <li>
            Why is Language Proficiency Important for Canadian Immigration?
          </li>
          <li>What are the Benefits of Using the Language Converter?</li>
          <li>Can the Language Converter Identify Language Skill Gaps?</li>
          <li>Does the Language Converter Cover All Language Tests?</li>
        </ul>

        {/* Section */}
        <h2
          className="text-2xl font-semibold text-red-700 mt-8"
          style={{ fontSize: "1.5rem" }}
        >
          How Does the Language Converter Work?
        </h2>
        <p className="mb-4">
          The Language Converter helps translate different language test scores
          (such as IELTS, CELPIP, TEF, etc.) into the corresponding Canadian
          Language Benchmark (CLB) scores, which are required for immigration
          applications.
        </p>

        {/* Section */}
        <h2
          className="text-2xl font-semibold text-red-700 mt-8"
          style={{ fontSize: "1.5rem" }}
        >
          Why is Language Proficiency Important for Canadian Immigration?
        </h2>
        <p className="mb-4">
          Language proficiency is a crucial factor in immigration programs as it
          is essential for successful integration into Canadian society and the
          workforce.
        </p>

        {/* Language Proficiency Table */}
        <h2 className="text-2xl font-semibold text-red-700 mt-8">
          IELTS Canada PR
        </h2>
        <div className="overflow-x-auto mt-4">
          <Image
            src="/images/ielts.jpg"
            alt="Canada Express Entry"
            className="rounded-lg shadow-md"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default CanadaImmigrationLanguageConverter;
