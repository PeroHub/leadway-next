import Image from "next/image";

export default function PNPFinderTool() {
  return (
    <section>
      <div className="pages-banner services">
        <div className="base-container w-container">
          <div className="banner-title-wrapper">
            <h1 className="banner-title">PNP Programs</h1>
          </div>
        </div>
      </div>
      <div
        className="max-w-5xl mx-auto p-4 text-gray-900"
        style={{ margin: "50px auto" }}
      >
        {/* Title */}
        <h1
          className="text-3xl font-bold mt-6 text-red-700"
          style={{ fontSize: "2rem" }}
        >
          Provincial Nominee Program (PNP) Finder Tool
        </h1>
        <p className="mt-2 text-lg">
          If you&apos;re considering immigrating to Canada, the Provincial
          Nominee Program (PNP) could be an excellent pathway.
        </p>

        {/* PNP Finder Tool Links */}
        <div className="mt-4 space-y-2">
          {[
            "What is the Provincial Nominee Program (PNP)?",
            "What is the PNP Finder Tool?",
            "How Does the PNP Finder Tool Work?",
            "Can the PNP Finder Tool Assess My Eligibility?",
            "What Program Details and Requirements are Provided?",
            "Does the Tool Offer an Immigration Points Calculator?",
            "How Can I Stay Updated on PNP Changes and News?",
            "Is the PNP Finder Tool Useful for All Potential Immigrants?",
          ].map((item, index) => (
            <p
              key={index}
              className="text-blue-600 underline cursor-pointer hover:text-blue-800"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Section with Red Header */}
        <div className="mt-6">
          <h2
            className="bg-red-700 text-white px-4 py-2 font-bold"
            style={{ fontSize: "1.5rem" }}
          >
            What is the Provincial Nominee Program (PNP)?
          </h2>
          <p className="mt-2">
            The PNP is an immigration program that allows provinces and
            territories to nominate individuals who meet their specific labor
            market needs.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-4 w-full h-64 relative">
          <Image
            src="/images/workers.jpg"
            alt="Canada PNP"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* More Sections */}
        {[
          "What is the PNP Finder Tool?",
          "How Does the PNP Finder Tool Work?",
          "Can the PNP Finder Tool Assess My Eligibility?",
        ].map((title, index) => (
          <div key={index} className="mt-6">
            <h2
              className="bg-red-700 text-white px-4 py-2 font-bold"
              style={{ fontSize: "1.5rem" }}
            >
              {title}
            </h2>
            <p className="mt-2 text-gray-700">
              The PNP Finder Tool provides in-depth information on each PNP,
              including specific eligibility requirements (e.g., minimum
              language proficiency, education levels, work experience, age),
              application processes, required documents, processing times, and
              quota information (if applicable).
            </p>
          </div>
        ))}

        {/* Final Image */}
        <div className="mt-6 w-full h-64 relative">
          <Image
            src="/images/maxresdefault.jpg"
            alt="PNP 600 Points"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}
