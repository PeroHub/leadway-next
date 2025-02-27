import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function ContactUs() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Contact Us - Legal Pathway Immigration Law Firm</title>
        <meta
          property="og:title"
          content="Contact Us - Legal Pathway Immigration Law Firm"
        />
        <meta
          property="twitter:title"
          content="Contact Us - Legal Pathway Immigration Law Firm"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <section>
        <div className="pages-banner contact-us-two">
          <div className="base-container w-container">
            <div className="banner-title-wrapper contact-us-two">
              <h1 className="banner-title">Contact Us</h1>
              <p className="contacts-2-banner-description">
                Feel free to get in touch, and we&apos;ll ensure your inquiries
                are addressed promptly and professionally.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="section no-spacing mt-10">
          <div className="base-container w-container">
            <div className="services-wrapper">
              <div className="services-item">
                <Image
                  src="https://cdn.prod.website-files.com/651f2c08c5bd81eb296c17aa/653254cd5363ff458c03a0ae_fi_3022243.svg"
                  alt="icon"
                  width={50}
                  height={50}
                  loading="lazy"
                  className="more-features-icon"
                />
                <h6 className="text-white">Services</h6>
                <p className="no-margin text-white">
                  We provide comprehensive consultations to help you determine
                  the most suitable visa option based on your unique
                  circumstances and goals.
                </p>
                <div className="button-wrapper smaller-spacing">
                  <Link
                    href="/services"
                    className="link-with-arrow-underline white-style-white-underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="services-item">
                <Image
                  src="https://cdn.prod.website-files.com/651f2c08c5bd81eb296c17aa/653254cdc467891a3dadb7f8_assistance.svg"
                  alt="icon"
                  width={50}
                  height={50}
                  loading="lazy"
                  className="more-features-icon"
                />
                <h6 className="text-white">Coachings</h6>
                <p className="no-margin text-white">
                  Equip yourself with the knowledge and skills needed for a
                  successful visa application process.
                </p>
                <div className="button-wrapper smaller-spacing">
                  <Link
                    href="/coachings"
                    className="link-with-arrow-underline white-style-white-underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="services-item last-child">
                <Image
                  src="https://cdn.prod.website-files.com/651f2c08c5bd81eb296c17aa/653254cdd32f85fce0c2f335_fi_6964169.svg"
                  alt="icon"
                  width={50}
                  height={50}
                  loading="lazy"
                  className="more-features-icon"
                />
                <h6 className="text-white">Career</h6>
                <p className="no-margin text-white">
                  Join our team as an Immigration Consultant and help
                  individuals and families navigate the complexities of
                  immigration processes and assist clients in preparing visa
                  applications.
                </p>
                <div className="button-wrapper smaller-spacing">
                  <Link
                    href="/career"
                    className="link-with-arrow-underline white-style-white-underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="section without-bottom-spacing">
          <div className="base-container w-container">
            <div className="two-column-wrapper center">
              <div className="column-two team-info-block">
                <div className="subtitle-text">Contact Us</div>
                <h2 className="in-section-title">
                  Expert Guidance for Seamless Visa Solutions
                </h2>
                <p className="no-margin">
                  We understand that navigating the complex world of visas and
                  immigration can be a daunting task. We&apos;re here to
                  simplify the process and guide you every step of the way.
                </p>
                <ul role="list" className="list-home">
                  <li className="home-list-item">
                    <span className="check-icon-in-list">o</span>Years of
                    experience in the field
                  </li>
                  <li className="home-list-item">
                    <span className="check-icon-in-list">o</span>Your needs are
                    our priority
                  </li>
                  <li className="home-list-item">
                    <span className="check-icon-in-list">o</span>We maintain
                    transparent communication
                  </li>
                </ul>
              </div>
              <div className="column-one">
                <div className="contacts-two-form-wrapper">
                  <form
                    id="email-form-2"
                    name="email-form-2"
                    className="contacts-3-form"
                  >
                    <div className="contact-3-inputs-wrapper">
                      <div>
                        <input
                          className="contacts-3-input on-dark-bg"
                          type="text"
                          placeholder="Your name*"
                          id="name-3"
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="contacts-3-input on-dark-bg"
                          type="email"
                          placeholder="Email*"
                          id="email-3"
                          required
                        />
                      </div>
                      <input
                        className="contacts-3-input on-dark-bg"
                        type="tel"
                        placeholder="Phone*"
                        id="phone-3"
                        required
                      />
                      <select
                        className="contacts-3-input select-input"
                        required
                      >
                        <option value="">Subject*</option>
                        <option value="First">Visa</option>
                        <option value="Second">Immigration</option>
                        <option value="Third">Coachings</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        className="contacts-textarea "
                        placeholder="Message*"
                        id="field-4"
                        required
                      ></textarea>
                    </div>
                    <div className="mt-10">
                      <button type="submit" className="primary-button">
                        Send message
                      </button>
                    </div>
                  </form>
                  {/* <div className="success-message">
                    <div>Thank you! Your submission has been received!</div>
                  </div> */}
                  {/* <div className="error-message">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="section without-bottom-spacing">
          <div className="base-container w-container">
            <div className="section-title-wrapper">
              <h2 className="section-title">Customers frequently ask</h2>
            </div>
            <div className="accordion-wrapper">
              <div className="accordion-wrap">
                <div className="accordion-item">
                  <div className="accordion-toggle">
                    <h6 className="accordion-title">What is a visa?</h6>
                    <div className="accordion-icon">▼</div>
                  </div>
                  <div className="accordion-list">
                    <p className="accordion-list-content">
                      A visa is an official document issued by a government that
                      allows an individual to enter, exit, or stay in a specific
                      country for a predetermined period and purpose.
                    </p>
                  </div>
                </div>
                {/* Repeat for each FAQ item */}
              </div>
              <div className="accordion-wrap last-child">
                <div className="accordion-item">
                  <div className="accordion-toggle">
                    <h6 className="accordion-title">
                      Can I apply for a visa online?
                    </h6>
                    <div className="accordion-icon">▼</div>
                  </div>
                  <div className="accordion-list">
                    <p className="accordion-list-content">
                      Some countries offer online visa application systems,
                      while others require in-person or postal applications. We
                      can guide you on the appropriate application method for
                      your chosen destination.
                    </p>
                  </div>
                </div>
                {/* Add more FAQ items here */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
