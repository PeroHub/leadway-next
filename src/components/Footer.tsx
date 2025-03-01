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
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
            >
              
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
            >
              
            </Link>
            <Link
              href="https://www.instagram.com/legal_pathway_immigration?igsh=MnlhaGpxaTdodzdj"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon last-child"
            >
              
            </Link>
          </div>
        </div>
        <div className="footer-wrapper">
          <div className="footer-links-wrapper">
            <h5 className="white-text mb-15">Visa Service</h5>
            <Link href="/visa-application/#work" className="footer-link">
              Business Visa
            </Link>
            <Link
              href="/visa-application/#study"
              aria-current="page"
              className="footer-link w--current"
            >
              Family Visa
            </Link>
            <Link href="visa-application/#work" className="footer-link">
              Work Permit Visa
            </Link>
            <Link href="/visa-application/#study" className="footer-link">
              Study Visa
            </Link>
            <Link href="/visa-application/#travel" className="footer-link">
              Travel Visa
            </Link>
            <Link href="/visa-application/#citizenship" className="footer-link">
              Citizenship Visa
            </Link>
          </div>
          <div className="footer-links-wrapper">
            <h5 className="white-text mb-15">Quick Links</h5>
            <Link href="/" className="footer-link">
              Home
            </Link>
            <Link href="#" className="footer-link">
              News/Blog
            </Link>
            <Link href="/contact-us" className="footer-link">
              Contact Us
            </Link>
          </div>
          <div className="footer-links-wrapper">
            <h5 className="white-text mb-15">Organization</h5>
            <Link href="/visa-application" className="footer-link">
              Visa
            </Link>
            <Link href="/our-services" className="footer-link">
              Our Services
            </Link>
            <Link href="/about" className="footer-link">
              About Us
            </Link>
            <Link href="/apply" className="footer-link">
              Free Assessment
            </Link>
            {/* <Link href="/coachings" className="footer-link">
              Coaching
            </Link> */}
          </div>
          {/* <div className="footer-form-wrapper">
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
          </div> */}
        </div>
        <div className="footer-bottom-wrapper">
          <div className="footer-copyright">
            © Legal Pathway Immigration Firm. All Rights Reserved 2025.{" "}
            <span className="footer-copyright">Licensing</span>
          </div>
        </div>
      </div>
    </div>
  );
}
