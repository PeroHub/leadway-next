"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisaDropdownOpen, setIsVisaDropdownOpen] = useState(false);
  const [isAboutusDropdownOpen, setIsAboutusDropdownOpen] = useState(false);
  const [isFreetoolsDropdownOpen, setIsFreetoolsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleVisaDropdown = () => {
    setIsVisaDropdownOpen(!isVisaDropdownOpen);
  };

  const toggleAboutusDropdown = () => {
    setIsAboutusDropdownOpen(!isAboutusDropdownOpen);
  };

  const toggleFreetoolsDropdown = () => {
    setIsFreetoolsDropdownOpen(!isFreetoolsDropdownOpen);
  };
  return (
    <div
      data-animation="over-left"
      className="navbar-absolute w-nav"
      data-easing2="ease"
      data-easing="ease"
      data-collapse="medium"
      role="banner"
      data-no-scroll="1"
      data-duration="400"
      data-doc-height="1"
    >
      <div className="nav-container w-container">
        <div className="nav-menu-wrapper">
          <Link href="/" className=" focus:outline-none">
            <Image src="/images/logo.png" alt="logo" width={160} height={50} />
          </Link>
          <nav
            role="navigation"
            className={`nav-menu w-nav-menu ${isMenuOpen ? "open" : ""}`}
          >
            <div className="menu-wrap" style={{ marginTop: "40px" }}>
              {/* <Link href="/" className="nav-link white-style w-nav-link">
                Home
              </Link> */}

              <div
                data-hover="true"
                data-delay="0"
                className="nav-dropdown w-dropdown"
              >
                <div
                  className="nav-dropdown-toggle w-dropdown-toggle"
                  id="w-dropdown-toggle-2"
                  aria-controls="w-dropdown-list-2"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  role="button"
                >
                  <Link href="/apply" className="nav-item-title white-style">
                    <p className="nav-item-title white-style">
                      Free Assessment
                    </p>
                  </Link>
                </div>
              </div>

              {/* Visa Application Dropdown */}
              <div
                className="nav-dropdown w-dropdown relative"
                onMouseEnter={() => setIsVisaDropdownOpen(true)}
                onMouseLeave={() => setIsVisaDropdownOpen(false)}
              >
                <div
                  className="nav-dropdown-toggle w-dropdown-toggle flex items-center cursor-pointer"
                  onClick={toggleVisaDropdown}
                >
                  <p className="nav-item-title white-style">Visa Application</p>
                  <span className="ml-2">&#9662;</span> {/* Dropdown arrow */}
                </div>
                {isVisaDropdownOpen && (
                  <div
                    className="absolute top-12 flex flex-col gap-4 transition-all left-0 bg-white shadow-md rounded-md mt-2 w-48 z-50"
                    style={{ padding: "10px" }}
                  >
                    <Link
                      href=""
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Student Visa
                    </Link>
                    <Link
                      href=""
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Work Visa
                    </Link>
                    <Link
                      href=""
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Business Visa
                    </Link>
                    <Link
                      href=""
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Tourist Visa
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/track-visa"
                className="nav-link white-style w-nav-link"
              >
                Track Visa
              </Link>
              <Link
                href="/contact-us"
                className="nav-link white-style w-nav-link"
              >
                Contact Us
              </Link>
              {/* <Link
                href="/track-visa"
                className="nav-link white-style w-nav-link"
              >
                Free Tools
              </Link> */}
              <div
                className="nav-dropdown w-dropdown relative"
                onMouseEnter={() => setIsFreetoolsDropdownOpen(true)}
                onMouseLeave={() => setIsFreetoolsDropdownOpen(false)}
              >
                <div
                  className="nav-dropdown-toggle w-dropdown-toggle flex items-center cursor-pointer"
                  // onClick={toggleVisaDropdown}
                >
                  <p className="nav-item-title white-style">Free Tools</p>
                  <span className="ml-2">&#9662;</span> {/* Dropdown arrow */}
                </div>
                {isFreetoolsDropdownOpen && (
                  <div
                    className="absolute top-12 transition-all flex flex-col gap-4 left-0 bg-white shadow-md rounded-md mt-2 w-48 z-50"
                    style={{ padding: "10px" }}
                  >
                    <Link
                      href=""
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      CRS Calculator
                    </Link>
                    <Link
                      href=""
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      PNP Finder
                    </Link>
                    <Link
                      href=""
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      {/* PNP Finder */}
                      CLB Language Converter
                    </Link>
                    <Link
                      href=""
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      {/* PNP Finder */}
                      Immigration Processing Time
                    </Link>
                    <Link
                      href=""
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      {/* PNP Finder */}
                      Job Finder
                    </Link>
                    <Link
                      href=""
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      {/* PNP Finder */}
                      Salary Calculator
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/privacy" className="nav-link white-style w-nav-link">
                Privacy Policy
              </Link>
              {/* <Link href="" className="nav-link white-style w-nav-link">
                About Us
              </Link> */}

              <div
                className="nav-dropdown w-dropdown relative"
                onMouseEnter={() => setIsAboutusDropdownOpen(true)}
                onMouseLeave={() => setIsAboutusDropdownOpen(false)}
              >
                <div
                  className="nav-dropdown-toggle w-dropdown-toggle flex items-center cursor-pointer"
                  // onClick={toggleVisaDropdown}
                >
                  <p className="nav-item-title white-style">About Us</p>
                  <span className="ml-2">&#9662;</span> {/* Dropdown arrow */}
                </div>
                {isAboutusDropdownOpen && (
                  <div
                    className="absolute top-12 flex flex-col gap-4 transition-all left-0 bg-white shadow-md rounded-md mt-2 w-48 z-50"
                    style={{ padding: "10px" }}
                  >
                    <Link
                      href=""
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Our Team
                    </Link>
                    <Link
                      href=""
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Client&apos;s Review
                    </Link>
                  </div>
                )}
              </div>

              <div className="button-wrapper">
                <Link
                  href="/status"
                  className="primary-button nav-tablet w-button"
                >
                  Track Application
                </Link>
              </div>
            </div>
          </nav>
          <div className="search-shop-con">
            <Link href="/contact-us" className="primary-button w-button">
              Contact Us
            </Link>
          </div>
          <div
            className="menu-button w-nav-button"
            style={{ marginRight: "20px" }}
            onClick={toggleMenu}
          >
            <Image
              src="https://cdn.prod.website-files.com/651f2c08c5bd81eb296c17aa/651f2c08c5bd81eb296c18c9_menu-btn.svg"
              alt="icon"
              width={24}
              height={24}
              className="image-burger white-style"
            />
          </div>
        </div>
      </div>

      {/* Left Sidebar */}
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <Link href="/" className="nav-link white-style w-nav-link">
            Home
          </Link>

          <div className="relative">
            <div
              className="nav-link white-style w-nav-link cursor-pointer flex justify-between items-center"
              onClick={toggleAboutusDropdown}
            >
              About Us <span>&#9662;</span>
            </div>
            {isAboutusDropdownOpen && (
              <div
                className="ml-4 mt-2 flex flex-col gap-4 bg-white rounded-lg"
                style={{ padding: "10px" }}
              >
                <Link href="" className="block text-gray-200 hover:text-white">
                  Client&apos;s Review
                </Link>
                <Link href="" className="block text-gray-200 hover:text-white">
                  Our Team
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="nav-link white-style w-nav-link cursor-pointer flex justify-between items-center"
              onClick={toggleFreetoolsDropdown}
            >
              Free Assessment <span>&#9662;</span>
            </div>
            {isFreetoolsDropdownOpen && (
              <div
                className="ml-4 mt-2 flex flex-col gap-4 bg-white rounded-lg"
                style={{ padding: "10px" }}
              >
                <Link
                  href=""
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  CRS Calculator
                </Link>
                <Link
                  href=""
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  PNP Finder
                </Link>
                <Link
                  href=""
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  {/* PNP Finder */}
                  CLB Language Converter
                </Link>
                <Link
                  href=""
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  {/* PNP Finder */}
                  Immigration Processing Time
                </Link>
                <Link
                  href=""
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  {/* PNP Finder */}
                  Job Finder
                </Link>
                <Link
                  href=""
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  {/* PNP Finder */}
                  Salary Calculator
                </Link>
              </div>
            )}
          </div>
          <Link href="/contact-us" className="nav-link white-style w-nav-link">
            Contact Us
          </Link>

          {/* Sidebar Visa Application Dropdown */}
          <div className="relative">
            <div
              className="nav-link white-style w-nav-link cursor-pointer flex justify-between items-center"
              onClick={toggleVisaDropdown}
            >
              Visa Application <span>&#9662;</span>
            </div>
            {isVisaDropdownOpen && (
              <div
                className="ml-4 mt-2 flex flex-col gap-4 bg-white rounded-lg"
                style={{ padding: "10px" }}
              >
                <Link
                  href="/visa-application/student"
                  className="block text-gray-200 hover:text-white"
                >
                  Student Visa
                </Link>
                <Link
                  href="/visa-application/work"
                  className="block text-gray-200 hover:text-white"
                >
                  Work Visa
                </Link>
                <Link
                  href="/visa-application/business"
                  className="block text-gray-200 hover:text-white"
                >
                  Business Visa
                </Link>
                <Link
                  href="/visa-application/tourist"
                  className="block text-gray-200 hover:text-white"
                >
                  Tourist Visa
                </Link>
              </div>
            )}
          </div>

          <Link href="/track-visa" className="nav-link white-style w-nav-link">
            Track Visa
          </Link>
          <Link href="/privacy" className="nav-link white-style w-nav-link">
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`sidebar-overlay  ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
}
