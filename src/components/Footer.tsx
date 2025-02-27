import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="footer">
      <div className="base-container w-container">
        <div className="footer-wrapper-top">
          <div className="footer-logo-wrapper">
            <Link href="/" className="footer-brand w-nav-brand">
              <Image
                src="/images/logo2.png"
                alt="logo"
                height={28}
                width={100} // You need to specify the width
                className="footer-logo"
              />
            </Link>
          </div>
          <div className="footer-social-icons-wrapper">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
            >
              
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
            >
              
            </a>
            <a
              href="https://www.instagram.com/legal_pathway_immigration?igsh=MnlhaGpxaTdodzdj"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon last-child"
            >
              
            </a>
          </div>
        </div>
        <div className="footer-wrapper">
          <div className="footer-links-wrapper">
            <h5 className="white-text mb-15">Products</h5>
            <a href="/apply" className="footer-link">
              Application
            </a>
            <a
              href="/status"
              aria-current="page"
              className="footer-link w--current"
            >
              Track Application
            </a>
            <a href="/blog" className="footer-link">
              Blog
            </a>
          </div>
          <div className="footer-links-wrapper">
            <h5 className="white-text mb-15">About</h5>
            <a href="/our-team" className="footer-link">
              Our Team
            </a>
            <a href="/career" className="footer-link">
              Career
            </a>
            <a href="/contact-us" className="footer-link">
              Contact Us
            </a>
          </div>
          <div className="footer-links-wrapper">
            <h5 className="white-text mb-15">Explore</h5>
            <a href="/visa" className="footer-link">
              Visa
            </a>
            <a href="/services" className="footer-link">
              Our Services
            </a>
            <a href="/coachings" className="footer-link">
              Coaching
            </a>
          </div>
          <div className="footer-form-wrapper">
            <h5 className="white-text mb-15">Stay Tuned</h5>
            <p className="footer-form-description">
              Subscribe to our newsletter and never miss our news.
            </p>
            <div className="form-block-footer w-form">
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                className="form-footer"
              >
                <input
                  className="text-field w-input"
                  //   maxLength="256"
                  name="name"
                  data-name="Name"
                  placeholder="email"
                  type="text"
                  id="name"
                />
                <input
                  type="submit"
                  data-wait="Please wait..."
                  className="primary-button w-button"
                  value="Submit"
                />
              </form>
              <div className="success-message w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-wrapper">
          <div className="footer-copyright">
            © Legal Pathway Immigration Firm. All Rights Reserved 2025.{" "}
            <a href="/coachings" className="footer-copyright">
              Licensing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
