import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import NavigationMenu from '../components/NavigationMenu'; // Import your navigation menu component
// import FooterSection from '../components/FooterSection'; // Import your footer component

export default function About() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>About Us - Legal Pathway Immigration Law Firm</title>
        <meta
          property="og:title"
          content="About Us - Legal Pathway Immigration Law Firm"
        />
        <meta
          property="twitter:title"
          content="About Us - Legal Pathway Immigration Law Firm"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      {/* <NavigationMenu /> */}
      <div className="pages-banner about">
        <div className="base-container w-container">
          <div className="banner-title-wrapper">
            <h1
              data-w-id="fe347540-b17b-7eb6-0d52-86453fd36721"
              style={{ opacity: 1 }}
              className="banner-title"
            >
              About
            </h1>
          </div>
        </div>
      </div>
      {/* Rest of the content goes here... */}

      <div className="section without-bottom-spacing">
        <div className="base-container w-container">
          <div className="two-column-wrapper center">
            <div className="column-one">
              <Image
                src="https://cdn.prod.website-files.com/651f2c08c5bd81eb296c17aa/65284450eeb7d62f54f5b886_pexels-gustavo-fring-4173218-01.webp"
                alt="Photo"
                width={635}
                height={400}
                loading="lazy"
                sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 45vw, (max-width: 1919px) 535px, 635px"
                className="about-block-image-high"
              />
            </div>
            <div className="column-two">
              <h2 className="in-section-title">
                Your Gateway to a Seamless Immigration
              </h2>
              <p>
                Legal Pathway Immigration Law Firm is a trusted and experienced
                immigration law practice dedicated to providing expert guidance,
                personalized support, and tailored solutions to individuals,
                families, and businesses navigating the complex process of
                Canadian immigration.
              </p>
              <div className="about-info-cards-wrapper">
                <div className="about-5-info-cards-wrap">
                  <h3 className="numbers-small">15+</h3>
                  <p className="no-margin text-white">Years of experience</p>
                </div>
                <div className="about-5-info-cards-wrap">
                  <h3 className="numbers-small">84k</h3>
                  <p className="no-margin text-white">Clients worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Two-column layout */}
      <div className="section">
        <div className="base-container w-container">
          <div className="two-column-wrapper center">
            <div className="column-two">
              <h2 className="in-section-title">
                Options based on your unique circumstances
              </h2>
              <p>
                Navigating the complex world of visas and immigration can be a
                daunting task. That&apos;s why we&apos;re here to simplify the
                process and guide you every step of the way. Our experienced
                team of immigration experts is dedicated to making your journey
                to a new country as smooth as possible.
              </p>
            </div>
            <div className="column-one">
              <Image
                src="https://cdn.prod.website-files.com/651f2c08c5bd81eb296c17aa/652844c535ce8f641b2876fb_pexels-andrea-piacquadio-3764021.webp"
                alt="Photo"
                width={635}
                height={400}
                loading="lazy"
                sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 45vw, (max-width: 1919px) 535px, 635px"
                className="about-block-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Advantages */}
      <div className="section primary-light-background">
        <div className="base-container w-container">
          <div className="w-layout-grid advantages-wrapper">
            <div className="left-advatages-content">
              {/* Repeat for each advantage */}
              <div className="advantages-wrap white-style">
                <div className="heading-advantages">
                  <h5>Priority Processing</h5>
                  <div className="number">01</div>
                </div>
                <p className="small-paragraph _w-95">
                  Expedited processing of immigration applications to ensure
                  your journey begins as quickly as possible.
                </p>
              </div>
              {/* Add more advantages here */}
            </div>
            <div className="right-advantages-content">
              <div className="subtitle-text">Our Advantages</div>
              <h2 className="in-section-title">
                Benefits of Working with Legal Pathway Immigration Law Firm
              </h2>
              <p className="no-margin">
                Experience seamless immigration support with our team of
                dedicated lawyers who provide end-to-end assistance. From
                application preparation to post-landing services, we ensure
                every aspect of your immigration journey is handled with
                expertise and care.
              </p>
              <div className="button-wrapper">
                <Link href="/contact-us-1" className="primary-button dark">
                  Get a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Dark Background Section */}
      <div className="section dark-background">
        <div className="base-container w-container">
          <div className="two-column-wrapper center">
            <div className="column-two">
              <div className="subtitle-text">Advantages</div>
              <h2 className="in-section-title text-white">
                Here to simplify the process & guide you
              </h2>
              <p className="no-margin text-white">
                We have in-depth knowledge of the complex immigration systems,
                regulations, and processes of various countries.
              </p>
              <div className="button-wrapper">
                <Link href="/services" className="primary-button w-button">
                  Explore more
                </Link>
                <div className="clients-pics-wrapp">
                  <div className="avatars-wrapper">
                    <Image
                      src="https://cdn.prod.website-files.com/651f2c08c5bd81eb296c17aa/651f2c08c5bd81eb296c18b0_Member-Photo-Close-up-10.jpg"
                      alt="avatars image"
                      width={50}
                      height={50}
                      loading="lazy"
                      className="avatars-image"
                    />
                    {/* Add more avatars here */}
                  </div>
                  <div className="clients-subtitle text-white">
                    Trusted By 1000+ Clients
                  </div>
                </div>
              </div>
            </div>
            <div className="column-one">
              <Link
                href="#"
                className="video-in-section w-inline-block w-lightbox"
              >
                <div className="video-content-wrapper in-section-video">
                  <div className="video-button-wrapper">
                    <div className="btn-circle-big">
                      <div className="clip">
                        <Image
                          src="https://cdn.prod.website-files.com/651f2c08c5bd81eb296c17aa/6526bde578717103f92b5b9a_play-icon.svg"
                          alt="icon"
                          width={24}
                          height={24}
                          className="icon-bottom big"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Visa Solutions */}
      <div className="section">
        <div className="base-container w-container">
          <div className="visa-block">
            <div className="visa-title-wrapper">
              <div className="subtitle-text">Visa Solutions</div>
              <h2 className="in-section-title">Choosing the Right Visa</h2>
              <p className="no-margin">
                We provide comprehensive consultations to help you determine the
                most suitable visa option based on your needs.
              </p>
              <div className="button-wrapper">
                <Link href="/visa" className="primary-button w-button">
                  View all
                </Link>
              </div>
            </div>
            <div className="about-6-projects-list-wrapper w-dyn-list">
              <div className="about-6-projects-wrapper w-dyn-items">
                {/* Repeat for each visa item */}
                <div className="visa-item w-dyn-item">
                  <Link
                    href="/visa/student-visa"
                    className="visa-item-overlay w-inline-block"
                  >
                    <Image
                      src="https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652917cce01c23b4bb9f6add_fi_3487093.svg"
                      alt=""
                      width={50}
                      height={50}
                      className="image-icon-visa-style"
                    />
                    <h3 className="text-white">Student Visa</h3>
                  </Link>
                  <Image
                    src="https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652d849bcf4ebbc1f400149a_pexels-keira-burton-6146984.jpg"
                    alt=""
                    width={443}
                    height={300}
                    loading="lazy"
                    className="visa-image"
                  />
                </div>
                {/* Add more visa items here */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <FooterSection /> */}
    </>
  );
}
