import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
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
              About Us
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

      <section>
        <h3
          style={{
            // marginBottom: "20px",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          Our Team
        </h3>
        {/* Section 2: Two-column layout */}
        <div className="section">
          <div className="base-container w-container">
            <div className="two-column-wrapper center">
              <div className="column-two">
                <h2 className="in-section-title">Kerry Nathan</h2>
                <p>
                  Kerry Nathan CEO LEGAL PATHWAY IMMIGRATION SERVICES is an
                  attorney and a member of the Ontario Bar Association. He holds
                  a Civil and Common Law degree from the University of Ottawa,
                  as well as a Master&apos;s degree in law from King&apos;s
                  College London, in England. He is an experienced and certified
                  Canadian Immigration Lawyer with an in-depth knowledge of
                  Canadian Immigration law.
                  {/* My company&apos;s ICCRC
                  membership ID is R415879 */}
                </p>
              </div>
              <div className="column-one">
                <Image
                  // src="https://cdn.prod.website-files.com/651f2c08c5bd81eb296c17aa/652844c535ce8f641b2876fb_pexels-andrea-piacquadio-3764021.webp"
                  src="/images/kerry.jpg"
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

        <div className="section">
          <div className="base-container w-container">
            {/* <h3 style={{ marginBottom: "20px" }}>Our Team</h3> */}
            <div className="two-column-wrapper center">
              <div className="column-two">
                <div className="flex gap-4 items-center">
                  <h2 className="in-section-title">Andrew Runge</h2>
                  <Link
                    href={
                      "https://www.instagram.com/andrew_s.runge?igsh=ZnFzdHMzZG5nc3Vl"
                    }
                  >
                    <FaInstagram size={24} />
                  </Link>
                </div>
                <p>
                  Andrew Runge is a consultant with extensive expertise in legal
                  advisory services. He holds a dual degree in Civil and Common
                  Law from York University in Toronto and a Master’s degree in
                  Law from Imperial College London, United Kingdom. With years
                  of experience in legal consultancy, he specializes in
                  providing strategic guidance on immigration policies and
                  regulatory compliance in Canada. Andrew has a deep
                  understanding of Canadian immigration frameworks and offers
                  tailored solutions to individuals and businesses navigating
                  the complexities of the system.
                </p>
              </div>
              <div className="column-one">
                <Image
                  src="/images/andrew.jpg"
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
        <div className="section">
          <div className="base-container w-container">
            {/* <h3 style={{ marginBottom: "20px" }}>Our Team</h3> */}
            <div className="two-column-wrapper center">
              <div className="column-two">
                <div className="flex gap-4 items-center">
                  <h2 className="in-section-title">Larry Johnson</h2>
                  <Link href={"https://www.instagram.com/larryjohnson.11"}>
                    <FaInstagram size={24} />
                  </Link>
                </div>
                <p>
                  Larry Johnson is a consultant with extensive expertise in
                  legal advisory services. He holds a dual degree in Civil and
                  Common Law from York University in Toronto and a Master’s
                  degree in Law from Imperial College London, United Kingdom.
                  With years of experience in legal consultancy, he specializes
                  in providing strategic guidance on immigration policies and
                  regulatory compliance in Canada. Larry has a deep
                  understanding of Canadian immigration frameworks and offers
                  tailored solutions to individuals and businesses navigating
                  the complexities of the system.
                </p>
              </div>
              <div className="column-one">
                <Image
                  src="/images/larry.jpg"
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
        <div className="section">
          <div className="base-container w-container">
            {/* <h3 style={{ marginBottom: "20px" }}>Our Team</h3> */}
            <div className="two-column-wrapper center">
              <div className="column-two">
                <h2 className="in-section-title">Mary Robinson</h2>
                <p>
                  Mary Robinson as a licensed immigration attorney with dual
                  specialization in Canadian and USA immigration law, she
                  delivers authoritative counsel on diverse immigration issues.
                  With a proven track record of successful visa applications,
                  permanent residencies, and complex case resolutions, Mary
                  provides personalized strategies tailored to each
                  client&apos;s unique immigration goals.
                </p>
              </div>
              <div className="column-one">
                <Image
                  src="/images/mary.jpg"
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

        <div className="section">
          <div className="base-container w-container">
            {/* <h3 style={{ marginBottom: "20px" }}>Our Team</h3> */}
            <div className="two-column-wrapper center">
              <div className="column-two">
                <div className="flex gap-4 items-center">
                  <h2 className="in-section-title">Martin Graham</h2>
                  <Link href={"https://www.instagram.com/martin_graham092"}>
                    <FaInstagram size={24} />
                  </Link>
                </div>
                {/* <h2 className="in-section-title">Martin Graham</h2> */}
                <p>
                  Martin Graham is an immigration officer with extensive
                  experience in immigration policies and regulations. He holds a
                  dual degree in Civil and Common Law from the University of
                  British Columbia and a Master’s degree in Law from the
                  University of Edinburgh, United Kingdom. With a strong
                  background in immigration enforcement and policy
                  implementation, he is dedicated to ensuring compliance with
                  Canadian immigration laws. Martin plays a key role in
                  assessing applications, guiding applicants through the
                  immigration process, and upholding legal standards in
                  immigration services.
                </p>
              </div>
              <div className="column-one">
                <Image
                  src="/images/martin_graham.jpg"
                  alt="Photo"
                  width={350}
                  height={350}
                  loading="lazy"
                  sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 45vw, (max-width: 1919px) 535px, 635px"
                  className="about-block-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className=""
          style={{
            maxWidth: "70vw",
            margin: "0 auto",
            // border: "1px solid red",
          }}
        >
          <h2
            className="in-section-title text-center"
            style={{ margin: "30px 0" }}
          >
            Awards
          </h2>
          <div className="grid lg:grid-cols-3 gap-2">
            <Image
              src="/images/award1.jpg"
              alt="Photo"
              width={350}
              height={350}
              loading="lazy"
              sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 45vw, (max-width: 1919px) 535px, 635px"
              // className="about-block-image"
            />
            <Image
              src="/images/award2.jpg"
              alt="Photo"
              width={350}
              height={350}
              loading="lazy"
              sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 45vw, (max-width: 1919px) 535px, 635px"
              // className="about-block-image"
            />
            <Image
              src="/images/award3.jpg"
              alt="Photo"
              width={350}
              height={350}
              loading="lazy"
              sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 45vw, (max-width: 1919px) 535px, 635px"
              // className="about-block-image"
            />
            <Image
              src="/images/award4.jpg"
              alt="Photo"
              width={350}
              height={350}
              loading="lazy"
              sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, (max-width: 1279px) 45vw, (max-width: 1919px) 535px, 635px"
              // className="about-block-image"
            />
            s
          </div>
        </div>
      </section>

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
                {/* <Link href="/contact-us-1" className="primary-button dark">
                  Get a Free Consultation
                </Link> */}
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
                <Link href="/apply" className="primary-button w-button">
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
                <Link href="/apply" className="primary-button w-button">
                  View all
                </Link>
              </div>
            </div>
            <div className="about-6-projects-list-wrapper w-dyn-list">
              <div className="about-6-projects-wrapper w-dyn-items">
                {/* Repeat for each visa item */}
                <div className="visa-item w-dyn-item">
                  <Link href="" className="visa-item-overlay w-inline-block">
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
