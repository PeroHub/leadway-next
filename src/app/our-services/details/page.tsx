"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";

interface ImmigrationProgram {
  id: number;
  title: string;
  description: string;
  image: string;
  eligibility: string[];
  steps: string[];
  key_requirements: string[];
  resources: string[];
}

export default function ImmigrationPage() {
  const [program, setProgram] = useState<ImmigrationProgram | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem("selectedProgram");
    const storedProgram = storedData ? JSON.parse(storedData) : null;
    if (storedProgram) {
      setProgram(storedProgram);
    } else {
      router.push("/our-services"); // Redirect if no valid data
    }
  }, [router]);

  if (!program) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{program.title} - Legal Pathway Immigration Law Firm</title>
        <meta
          property="og:title"
          content={`${program.title} - Legal Pathway Immigration Law Firm`}
        />
        <meta
          property="twitter:title"
          content={`${program.title} - Legal Pathway Immigration Law Firm`}
        />
      </Head>
      <section>
        <div className="pages-banner services">
          <div className="base-container w-container">
            <div className="banner-title-wrapper">
              <h1 className="banner-title">{program.title}</h1>
            </div>
          </div>
        </div>
        <div
          className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10"
          style={{ margin: "0 auto" }}
        >
          {/* Left Content Section */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-lg font-bold text-gray-900">{program.title}</h1>
            <p className="text-gray-700">{program.description}</p>
            <Image
              src={program.image}
              width={500}
              height={200}
              alt={program.title}
              className="rounded-lg shadow-lg"
            />

            <h2 className="text-lg font-semibold text-gray-900">
              Eligibility Criteria
            </h2>
            <ul className="list-decimal pl-6 space-y-3 text-gray-700">
              {program.eligibility.map((criteria, index) => (
                <li key={index}>{criteria}</li>
              ))}
            </ul>

            <h2 className="text-lg font-semibold text-gray-900">
              Application Process
            </h2>
            <div className="space-y-4">
              {program.steps.map((step, index) => (
                <p key={index} className="text-gray-700">
                  <strong>
                    Step {index + 1}: {step}
                  </strong>
                </p>
              ))}
            </div>

            {/* Key Requirements Section */}
            {program.key_requirements &&
              program.key_requirements.length > 0 && (
                <>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Key Requirements
                  </h2>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700">
                    {program.key_requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </>
              )}

            {/* Resources Section */}
            {program.resources && (
              <>
                <h2 className="text-lg font-semibold text-gray-900">
                  Resources
                </h2>
                <p className="text-gray-700">{program.resources}</p>
              </>
            )}
          </div>
          {/* Right Side Form Section */}
          <div
            style={{ padding: "10px" }}
            className="bg-white max-h-[30rem] shadow-lg rounded-lg space-y-4 border border-gray-200 sticky top-10"
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
                style={{padding: "10px"}}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-md"
                style={{padding: "10px"}}
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-2 border rounded-md"
                style={{padding: "10px"}}
                required
              />
              <select className="w-full p-2 border rounded-md"
              style={{padding: "10px"}}
              >
                <option>Select Service</option>
                <option>Work Permit</option>
                <option>Study Permit</option>
              </select>
              <p style={{padding: "10px"}} className="w-full bg-red-600 text-center text-white py-2 rounded-md hover:bg-red-700">
                Send
              </p>
            </form>
            <div className="text-center border-t pt-4">
              <p className="text-gray-700 font-medium">Call for Information</p>
              <p className="text-lg font-bold text-gray-900">
              +1 (430) 248-5763
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
