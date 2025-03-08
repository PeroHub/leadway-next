"use client";
import Head from "next/head";
import { useEffect } from "react";

// Function to scroll to the section based on the hash in the URL
const scrollToSection = () => {
  const hash = window.location.hash; // Get the hash from the URL
  if (hash) {
    const sectionId = hash.replace("#", ""); // Remove the '#' from the hash
    const sectionElement = document.getElementById(sectionId); // Find the section by ID
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the section
    }
  }
};

export default function VisaPage() {
  // Example visa data (can be fetched dynamically)
  const visas = [
    {
      id: 1,
      icon: "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652db2fc45a71830e136ff99_fi_3022243.svg",
      title: "Working Visa",
      image:
        "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652db1d2562548aff2e7129f_pexels-alexander-suhorucov-6457562.jpg",
      link: "#",
    },
    {
      id: 2,
      icon: "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652db339678183c890509e1e_fi_4508618.svg",
      title: "Citizenship by Investment",
      image:
        "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652db231fefe0f232879aa88_pexels-august-de-richelieu-4427545.jpg",
      link: "#",
    },
  ];

  console.log(visas);

  // Scroll to the section on initial load and when the hash changes
  useEffect(() => {
    scrollToSection(); // Scroll to the section on initial load
    window.addEventListener("hashchange", scrollToSection); // Listen for hash changes
    return () => {
      window.removeEventListener("hashchange", scrollToSection); // Clean up the listener
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Visa Application - Legal Pathway Immigration Law Firm</title>
        <meta
          property="og:title"
          content="Visa Application - Legal Pathway Immigration Law Firm"
        />
        <meta
          property="twitter:title"
          content="Visa Application - Legal Pathway Immigration Law Firm"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      {/* Banner Section */}
      <div className="pages-banner visa">
        <div className="base-container w-container">
          <div className="banner-title-wrapper">
            <h1 className="banner-title">IMMIGRATE TO CANADA/US</h1>
            <p className="text-white">
              Learn more about immigrating to Canada and the options available
              for Canada immigration
            </p>
          </div>
        </div>
      </div>

      {/* Existing Sections with IDs for Scrolling */}
      <section id="what" className="b-con mt-20">
        <h2 className="text-[2rem]">
          <a href="#what">What you need to know</a>
        </h2>
        <p>
          Canada offers one of the world’s most open and dynamic immigration
          systems. There are over 100 different Canadian immigration pathways
          for skilled workers, business people, and families.
        </p>
        <p>
          By the end of 2024, Canada will have over 1.3 million new immigrants!
          There are many routes to immigrate to Canada and secure Canadian
          permanent residence, but not to worry because GATEWAY IMMIGRATION
          LAWFIRM has made it a cinch.
        </p>
      </section>

      <section id="easiet" className="b-con mt-20">
        <h2 className="text-[2rem]">
          <a href="#easiet">Easiest Ways to Immigrate to Canada in 2024</a>
        </h2>
        <p>
          The easiest way to immigrate to Canada will depend on your own unique
          profile or connections to the country. With Canadian immigration
          targets higher than ever, now is the time to start your immigration
          journey.
        </p>
        <p>
          It should be noted that there is no one simple way to immigrate to
          Canada. While some programs may be easier for you to apply to, the
          process is long and involves many steps.
        </p>
      </section>

      <section id="tre" className="b-con mt-20">
        <h2 className="text-[2rem]">
          <a href="#tre">Trending ways of immigrating to Canada:</a>
        </h2>
        <ul>
          <li>Express Entry</li>
          <li>Provincial Nominee Programs</li>
          <li>Business Immigration</li>
          <li>Sponsorship Immigration</li>
        </ul>
      </section>

      <section id="work" className="b-con mt-20">
        <h2 className="text-[2rem]">
          <a href="#work">Express Entry</a>
        </h2>
        <p>
          Express Entry is Canada’s fastest and most popular immigration
          program. Candidates that apply through the Express Entry system can
          receive permanent residence status as soon as six months.
        </p>
        <p>
          By 2025, Canada plans to invite half a million newcomers. Of which a
          large percentage will come through one of the three streams of Express
          Entry:
        </p>
        <ul>
          <li>Federal Skilled Trades (FST)</li>
          <li>Canadian Experience Class (CEC)</li>
          <li>Federal Skilled Trades (FST)</li>
        </ul>
        <p>
          The Express Entry system involves submitting an online profile that is
          scored by Canada’s Comprehensive Ranking System (CRS). To submit an
          Express Entry profile, you must first be eligible under one of
          Canada’s above three federal streams. The Canadian government then
          issues invitations to apply for permanent residence to the
          highest-ranking candidates in the Express Entry pool.
        </p>
      </section>

      <section id="wo" className="b-con mt-20">
        <h2 className="text-[2rem]">
          <a href="#wo">Provincial Nominee Programs</a>
        </h2>
        <p>
          Throughout the pandemic, provinces continued to nominate overseas
          workers for Canadian permanent residence. By 2025, Canada plans to
          welcome 117,500 new immigrants through PNPs.
        </p>
        <p>
          There are countless nominee programs offered by Canada’s ten provinces
          and three territories. Each PNP has its own unique eligibility
          criteria. Many PNPs require a connection to the province to apply for
          nomination. However, there are some programs that invite overseas
          candidates solely based on their ability to respond to the province’s
          labour market needs.
        </p>
      </section>

      <section id="Businessvisa" className="b-con mt-20">
        <h2 className="text-[2rem]">
          <a href="#Businessvisa">Business Immigration</a>
        </h2>
        <p>
          For seasoned entrepreneurs and business owners seeking new horizons,
          Canada’s business immigration programs offer a promising avenue to
          establish or expand their ventures in a thriving economic landscape.
        </p>
      </section>

      <section id="travelvisa" className="b-con mt-20">
        <h2 className="text-[2rem]">
          <a href="#travelvisa">Travel Visa Immigration</a>
        </h2>
        <p>
          Canada is a country renowned for its natural beauty, vibrant cities,
          and welcoming immigration policies. Whether it’s for tourism,
          business, or personal reasons, obtaining a travel visa is often the
          first step for individuals seeking to visit this vast and diverse
          nation.
        </p>
      </section>

      <section id="studyvisa" className="b-con mt-20">
        <h2 className="text-[2rem]">
          <a href="#studyvisa">Study Visa Immigration</a>
        </h2>
        <p>
          Canada is widely recognized as a hub for world-class education,
          offering exceptional opportunities for international students seeking
          to further their academic pursuits.
        </p>
      </section>

      <section id="citizenshipvisa" className="b-con mt-20">
        <h2 className="text-[2rem]">
          <a href="#citizenshipvisa">Citizenship Visa Immigration</a>
        </h2>
        <p>
          Canada is a nation that welcomes diversity and encourages newcomers to
          embrace its values and become full-fledged citizens. Obtaining
          Canadian citizenship is a significant milestone for immigrants,
          granting them the rights, privileges, and responsibilities associated
          with being a Canadian.
        </p>
      </section>
    </>
  );
}
