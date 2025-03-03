"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            {/* <img src="/images/logo.png" loading="lazy" alt="logo" width="160" /> */}
          </Link>
          <nav
            role="navigation"
            className={`nav-menu w-nav-menu ${isMenuOpen ? "open" : ""}`}
          >
            <div className="menu-wrap">
              <Link href="/" className="nav-link white-style w-nav-link">
                Home
              </Link>
              <Link href="/about" className="nav-link white-style w-nav-link">
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="nav-link white-style w-nav-link"
              >
                Contact Us
              </Link>
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
                  <div
                    className="nav-dropdown-icon w-icon-dropdown-toggle"
                    aria-hidden="true"
                  ></div>
                  <Link
                    href="/our-services"
                    className="nav-item-title white-style"
                  >
                    <p className="nav-item-title white-style">Services</p>
                  </Link>
                </div>
                {/* Dropdown content can be added here */}
              </div>
              <Link
                href="/visa-application"
                className="nav-link white-style w-nav-link"
              >
                Visa Application
              </Link>
              <Link
                href="/track-visa"
                className="nav-link white-style w-nav-link"
              >
                Track Visa
              </Link>
              <Link href="/privacy" className="nav-link white-style w-nav-link">
                Privacy Policy
              </Link>
              <div
                data-hover="true"
                data-delay="0"
                className="nav-dropdown w-dropdown"
              >
                {/* <div
                  className="nav-dropdown-toggle w-dropdown-toggle"
                  id="w-dropdown-toggle-2"
                  aria-controls="w-dropdown-list-2"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  role="button"
                >
                  <div
                    className="nav-dropdown-icon w-icon-dropdown-toggle"
                    aria-hidden="true"
                  ></div>
                  <p className="nav-item-title white-style">Tools</p>
                </div> */}
                {/* Dropdown content can be added here */}
              </div>
              {/* <Link href="#" className="nav-link white-style w-nav-link">
                Sign In
              </Link> */}
              {/* <Link href="#" className="nav-link white-style w-nav-link">
                Create Account
              </Link> */}
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
          <div className="menu-button w-nav-button" onClick={toggleMenu}>
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
          <Link href="/about" className="nav-link white-style w-nav-link">
            About Us
          </Link>
          <Link href="/contact-us" className="nav-link white-style w-nav-link">
            Contact Us
          </Link>
          <Link
            href="/visa-application"
            className="nav-link white-style w-nav-link"
          >
            Visa Application
          </Link>
          <Link href="/track-visa" className="nav-link white-style w-nav-link">
            Track Visa
          </Link>
          <Link href="/privacy" className="nav-link white-style w-nav-link">
            Privacy Policy
          </Link>
          {/* <Link href="#" className="nav-link white-style w-nav-link">
            Sign In
          </Link> */}
          {/* <Link href="#" className="nav-link white-style w-nav-link">
            Create Account
          </Link> */}
          {/* <div className="button-wrapper">
            <Link href="/status" className="primary-button nav-tablet w-button">
              Track Application
            </Link>
          </div> */}
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></div>
    </div>
  );
}
