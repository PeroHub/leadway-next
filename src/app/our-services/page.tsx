import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";
// import Link from "next/link";
// const services = [

//   {
//     id: 1,
//     title: "Temporary Visa",
//     description:
//       "From filling out application forms to gathering supporting documents, we assist you in completing the visa application accurately.",
//     image:
//       "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652ea6d6583f67a8de3fa46e_pexels-keira-burton-6146978.jpg",
//     icon: "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652db2fc45a71830e136ff99_fi_3022243.svg",
//     link: "",
//   },
//   {
//     id: 2,
//     title: "Study Visa Application",
//     description:
//       "From filling out application forms to gathering supporting documents, we assist you in completing the visa application accurately.",
//     image:
//       "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/65286fb263f107046ea7900e_nicole-geri-gMJ3tFOLvnA-unsplash.jpg",
//     icon: "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/6528915357f15ad2b94de740_visa.svg",
//     link: "",
//   },
// ];

const categories = [
  {
    title: "Permanent Residence",
    items: [
      { name: "Federal Skilled Worker", icon: "\u2708" },
      { name: "Federal Skilled Trade Workers", icon: "\u2708" },
      { name: "Canadian Experience Class", icon: "\u2708" },
      { name: "Provincial Nominee Programs", icon: "\u2708" },
    ],
  },
  {
    title: "Temporary Residence",
    items: [
      { name: "Study Permit", icon: "\u2708" },
      { name: "Intra-Company Transfer", icon: "\u2708" },
      { name: "Work Permit", icon: "\u2708" },
      { name: "Super Visa", icon: "\u2708" },
      { name: "LMIA Exemptions", icon: "\u2708" },
      { name: "Visitor", icon: "\u2708" },
      { name: "Post-Graduate Work Permits", icon: "\u2708" },
    ],
  },
  {
    title: "Family & Sponsorship Applications",
    items: [
      { name: "Spousal PR Sponsorship", icon: "\u2708" },
      { name: "Child Or Other Dependent Sponsorship", icon: "\u2708" },
      { name: "Spousal Work Permit", icon: "\u2708" },
      { name: "Parents, Grandparents Sponsorship", icon: "\u2708" },
    ],
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Our Services - Legal Pathway Immigration Law Firm</title>
        <meta
          property="og:title"
          content="Our Services - Legal Pathway Immigration Law Firm"
        />
        <meta
          property="twitter:title"
          content="Our Services - Legal Pathway Immigration Law Firm"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <div>
        <div className="pages-banner services">
          <div className="base-container w-container">
            <div className="banner-title-wrapper">
              <h1 className="banner-title">Services</h1>
            </div>
          </div>
        </div>

        {/* Services List Section */}
        {/* <div className="section without-bottom-spacing">
          <div className="base-container w-container">
            <div className="collection-list-wrapper-services w-dyn-list">
              <div role="list" className="services-list-wrapper w-dyn-items">
                {services.map((service) => (
                  <div
                    key={service.id}
                    role="listitem"
                    className="collection-item-services w-dyn-item"
                  >
                    <div className="work-wrapper">
                      <Image
                        src={service.icon}
                        alt=""
                        width={50}
                        height={50}
                        loading="lazy"
                        className="icon-work"
                      />
                      <Link href={service.link} className="w-inline-block">
                        <h5 className="services-titles">{service.title}</h5>
                      </Link>
                      <p className="service-item-description">
                        {service.description}
                      </p>
                      <div className="button-wrapper smaller-spacing">
                        <Link
                          href={service.link}
                          className="link-with-arrow-underline white-style"
                        >
                          Learn more
                        </Link>
                      </div>
                      <div className="dark-overlay"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
        <div className="max-w-6xl mx-auto p-6" style={{ margin: "40px auto" }}>
          {categories.map((category, index) => (
            <div key={index} className="" style={{ marginTop: "40px" }}>
              <h2
                className="font-bold text-center border-b-4 border-red-500 inline-block mb-6"
                style={{ fontSize: "1.7rem" }}
              >
                {category.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="border border-red-500 rounded-lg shadow-lg text-center p-8 bg-white hover:shadow-xl transition"
                  >
                    <div className="text-red-500 text-3xl mb-4">
                      {item.icon}
                    </div>
                    <h3
                      className="font-semibold mb-3"
                      style={{ fontSize: "1.3rem" }}
                    >
                      {item.name}
                    </h3>
                    <div className="flex w-full items-center justify-center flex-col gap-2">
                      {/* <span className="bg-red-600 text-black w-full">
                        Book Consultation
                      </span> */}
                      <Link href="/our-services/details">
                        <p
                          className="bg-blue-600 text-white w-50 p-6 py-4 rounded-sm"
                          style={{ marginBottom: "10px" }}
                        >
                          Read More
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
