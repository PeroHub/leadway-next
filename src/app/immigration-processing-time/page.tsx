import Image from "next/image";

export default function CanadaProcessingTimes() {
  return (
    <section>
      <div className="pages-banner services">
        <div className="base-container w-container">
          <div className="banner-title-wrapper">
            <h1 className="banner-title">Immigration Processing Times</h1>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-4" style={{ margin: "50px auto" }}>
        <h1
          className="text-2xl font-bold text-red-700"
          style={{ fontSize: "2rem" }}
        >
          IRCC’s Canadian Immigration Processing Times
        </h1>
        <p className="mt-4">
          Whether you are looking to visit, study, work or immigrate to Canada,
          Immigration, Refugee and Citizenship Canada’s (IRCC) processing times
          tool provides the latest information on how long it may take your
          application to be processed.
        </p>
        <a href="#" className="text-blue-600 underline block mt-2">
          Discover IRCC’s Latest Immigration Processing time
        </a>

        <div className="bg-red-700 text-white p-2 mt-6 font-bold">
          Understanding Canadian Immigration Processing Times
        </div>
        <p className="mt-4">
          When it comes to Canadian immigration, one of the most frequently
          asked questions by applicants is about processing times. The time it
          takes for an application to be processed and a final decision to be
          made can vary significantly depending on various factors.
        </p>

        <div className="bg-red-700 text-white p-2 mt-6 font-bold">
          What is the Processing Time?
        </div>
        <p className="mt-4">
          The processing time for a Canadian immigration application is the
          period between the day IRCC receives a complete application and the
          day a final decision is made. This timeframe covers the entire
          process, from initial review to background checks, verification of
          documents, and ultimately, the final determination of eligibility.
        </p>

        <div className="mt-4">
          <Image
            src="/images/measurement.jpg"
            alt="Processing Time"
            width={600}
            height={300}
            className="rounded"
          />
        </div>

        <div className="bg-red-700 text-white p-2 mt-6 font-bold">
          Factors Influencing Processing Times
        </div>
        <ul className="list-disc list-inside mt-4">
          <li>
            <strong>Type of Application Submitted:</strong> IRCC processes
            various applications, each with unique processing times.
          </li>
          <li>
            <strong>Completeness of the Application:</strong> Missing documents
            may delay the processing timeline.
          </li>
          <li>
            <strong>Volume of Applications:</strong> High application volumes
            may increase wait times.
          </li>
          <li>
            <strong>Verification of Information:</strong> Background checks and
            employment verification impact processing times.
          </li>
          <li>
            <strong>Applicant Response Time:</strong> Delays in responding to
            IRCC requests can extend the processing period.
          </li>
        </ul>

        <div className="mt-4">
          <Image
            src="/images/Factors.webp"
            alt="Factors Affecting Processing Time"
            width={600}
            height={300}
            className="rounded"
          />
        </div>

        <div className="bg-red-700 text-white p-2 mt-6 font-bold">
          Managing Expectations and Staying Informed
        </div>
        <p className="mt-4">
          To stay informed about processing times and any updates, applicants
          can regularly check the IRCC website, which provides the most
          up-to-date information.
        </p>

        <div className="bg-red-700 text-white p-2 mt-6 font-bold">
          Patience and Preparation
        </div>
        <p className="mt-4">
          Preparing a comprehensive and complete application is crucial to
          minimizing delays and ensuring a smoother processing experience.
        </p>
      </div>
    </section>
  );
}
