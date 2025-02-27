"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
const visas = [
  { id: 1, title: "Temporary Visa", icon: "/path/to/icon1.png" },
  { id: 2, title: "Permanent Visa", icon: "/path/to/icon2.png" },
  { id: 3, title: "Study Visa", icon: "/path/to/icon3.png" },
  { id: 4, title: "Permanent Resident", icon: "/path/to/icon4.png" },
  { id: 5, title: "Citizenship by Investment", icon: "/path/to/icon5.png" },
  { id: 6, title: "Family Visa", icon: "/path/to/icon6.png" },
  { id: 7, title: "Work Permit Visa", icon: "/path/to/icon7.png" },
];

export default function Apply() {
  const [selectedVisa, setSelectedVisa] = useState<number | null>(null);

  function toggleDiv(id: number): void {
    setSelectedVisa(id);
  }

  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { files: FileList };
  }

  const handleFileChange = (event: FileChangeEvent): void => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    }
  };

  console.log(selectedFile, selectedVisa);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Apply - Legal Pathway Immigration Law Firm</title>
        <meta
          property="og:title"
          content="Apply - Legal Pathway Immigration Law Firm"
        />
        <meta
          property="twitter:title"
          content="Apply - Legal Pathway Immigration Law Firm"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <section>
        <div className="banner-section-photo-two">
          <div className="banner-content-container-two">
            <h1 className="home-title">Check Your Eligibility.</h1>
            <p className="home-main-banner-discription">
              We&apos;re here to guide you every step of the way. Our
              experienced team of experts is dedicated to making your journey to
              a new country as smooth and stress-free as possible.
            </p>
            <div className="collection-list-wrapper-visa hidden">
              <div role="list" className="visa-buttons-wrapper">
                {visas.map((visa) => (
                  <div key={visa.id} role="listitem" className="w-dyn-item">
                    <a
                      onClick={() => toggleDiv(visa.id)}
                      className="visa-link-block"
                    >
                      <Image
                        src={visa.icon}
                        alt=""
                        width={50}
                        height={50}
                        loading="lazy"
                        className="image-icon-visa"
                      />
                      <div>{visa.title}</div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Numbers Section */}
        <div className="numbers-wrapper">
          <div className="w-layout-grid working-numbers">
            <div className="working-wrap">
              <div className="numbers">15+</div>
              <div className="numbers-text white-style">
                Years of experience
              </div>
            </div>
            <div className="working-wrap">
              <div className="numbers">84k</div>
              <div className="numbers-text white-style">Clients worldwide</div>
              <div className="line home-white-left"></div>
            </div>
            <div className="working-wrap">
              <div className="numbers">98%</div>
              <div className="numbers-text white-style">Success rate</div>
              <div className="line home-white-left"></div>
            </div>
            <div className="working-wrap">
              <div className="numbers">28k</div>
              <div className="numbers-text white-style">Visa issued</div>
              <div className="line home-white-left"></div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-gray-50 py-16">
          <div className=" mx-auto px-4 flex items-center justify-center">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Seamless Visa Solutions with Expert Guidance
              </h2>
              <p className="text-gray-600 mb-6">
                Ready to embark on your immigration journey? Contact us to
                schedule a consultation and take the first step toward making
                your dream of living in a new country a reality.
              </p>
              <form id="docs" className="space-y-6">
                {/* Visa Selection Dropdown */}
                <div>
                  <label
                    htmlFor="countries"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Choose Visa
                  </label>
                  <select
                    id="countries"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Temporary Visa</option>
                    <option>Permanent Visa</option>
                    <option>Study Visa</option>
                    <option>Permanent Resident</option>
                    <option>Citizenship by Investment</option>
                    <option>Family Visa</option>
                    <option>Work Permit Visa</option>
                  </select>
                </div>

                {/* First and Last Name Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first"
                      name="first"
                      className="mt-1 block w-full p-5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last"
                      name="last"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full pl-10 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="email@address.com"
                      required
                    />
                  </div>
                </div>

                {/* File Upload Sections */}
                {[
                  { id: "passport", label: "International Passport" },
                  { id: "cv", label: "Work Experience (CV)" },
                  { id: "birth", label: "Birth Certificate" },
                  { id: "marriage", label: "Marriage Certificate" },
                  { id: "fdocuments", label: "Financial Documents" },
                  { id: "medical", label: "Medical Examination Reports" },
                ].map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-center w-full"
                  >
                    <label
                      htmlFor={file.id}
                      className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all"
                    >
                      <div className="flex flex-col items-center text-center justify-center p-4">
                        <svg
                          className="w-6 h-6 mb-2 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop your {file.label}
                        </p>
                      </div>
                      <input
                        id={file.id}
                        name={file.id}
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                    {/* Submit Button */}
                    <div className="mb-4">
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                ))}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
