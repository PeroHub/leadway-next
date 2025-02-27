import Head from "next/head";
export default function Privacy() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Privacy - Legal Pathway Immigration Law Firm</title>
        <meta
          property="og:title"
          content="Privacy - Legal Pathway Immigration Law Firm"
        />
        <meta
          property="twitter:title"
          content="Privacy - Legal Pathway Immigration Law Firm"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <section>
        <div
          className="pages-banner visa-details"
          style={{
            backgroundImage: `url('https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652d849bcf4ebbc1f400149a_pexels-keira-burton-6146984.jpg')`,
          }}
        >
          <div className="dark-overlay"></div>
          <div className="base-container position-relative w-container">
            <div className="banner-title-wrapper">
              <h1 className="banner-title">Privacy Policy</h1>
              <p className="banner-description-visa">
                Your privacy is important to us. This Privacy Policy outlines
                how we collect, use, and protect your information when you visit
                or use our website and services.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Policy Content Section */}
        <div className="section without-bottom-spacing">
          <div className="base-container w-container">
            <div className="service-details-content">
              <div className="service-details-content-wrapper">
                <div className="rich-text-style">
                  <h4>1. Information We Collect</h4>
                  <p>We may collect the following types of information:</p>
                  <ul>
                    <li>
                      Personal Information: Name, email address, phone number,
                      and other details you provide voluntarily.
                    </li>
                    <li>
                      Usage Data: Information about how you use our website,
                      including IP address, browser type, and pages visited.
                    </li>
                    <li>
                      Cookies: Data collected through cookies to enhance user
                      experience and improve our services.
                    </li>
                  </ul>

                  <h4>2. How We Use Your Information</h4>
                  <p>We use your information for the following purposes:</p>
                  <ul>
                    <li>To provide and improve our services.</li>
                    <li>To respond to inquiries or process requests.</li>
                    <li>
                      To personalize user experience and send updates or
                      promotional material (with consent).
                    </li>
                  </ul>

                  <h4>3. How We Protect Your Information</h4>
                  <p>
                    We implement reasonable security measures to protect your
                    information from unauthorized access, alteration, or
                    disclosure. However, no online system is 100% secure.
                  </p>

                  <h4>4. Sharing Your Information</h4>
                  <p>
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share your information:
                  </p>
                  <ul>
                    <li>
                      With trusted service providers who assist us in operating
                      our website.
                    </li>
                    <li>
                      To comply with legal obligations or protect our rights.
                    </li>
                  </ul>

                  <h4>5. Third-Party Links</h4>
                  <p>
                    Our website may contain links to third-party websites. We
                    are not responsible for the privacy practices of these
                    sites, and we encourage you to review their privacy
                    policies.
                  </p>

                  <h4>6. Your Rights</h4>
                  <p>You have the right to:</p>
                  <ul>
                    <li>
                      Access, update, or delete your personal information.
                    </li>
                    <li>Opt-out of receiving marketing communications.</li>
                    <li>Withdraw consent for data processing at any time.</li>
                  </ul>

                  <h4>7. Changes to This Policy</h4>
                  <p>
                    We reserve the right to update this Privacy Policy at any
                    time. Any changes will be posted on this page with an
                    updated revision date.
                  </p>

                  <h4>8. Contact Us</h4>
                  <p>
                    If you have any questions about this Privacy Policy, please
                    contact us at:
                  </p>
                  <p>
                    Email:{" "}
                    <a href="mailto:support@kelenserceca.com">
                      support@kelenserceca.com
                    </a>
                  </p>
                  <p>Phone: +1 4753411577</p>
                  <p>
                    Address: 3250 Bloor St W Suite 600, Toronto, ON M8X 2X9,
                    Canada
                  </p>
                  <p>Thank you for trusting us with your information.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
