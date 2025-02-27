import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const services = [
  //   {
  //     id: 1,
  //     icon: "/path/to/icon1.png",
  //     link: "/service1",
  //     title: "Service 1",
  //     description: "Description for service 1",
  //   },
  //   {
  //     id: 2,
  //     icon: "/path/to/icon2.png",
  //     link: "/service2",
  //     title: "Service 2",
  //     description: "Description for service 2",
  //   },
  {
    id: 1,
    title: "Temporary Visa",
    description:
      "From filling out application forms to gathering supporting documents, we assist you in completing the visa application accurately.",
    image:
      "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652ea6d6583f67a8de3fa46e_pexels-keira-burton-6146978.jpg",
    icon: "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652db2fc45a71830e136ff99_fi_3022243.svg",
    link: "",
  },
  {
    id: 2,
    title: "Study Visa Application",
    description:
      "From filling out application forms to gathering supporting documents, we assist you in completing the visa application accurately.",
    image:
      "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/65286fb263f107046ea7900e_nicole-geri-gMJ3tFOLvnA-unsplash.jpg",
    icon: "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/6528915357f15ad2b94de740_visa.svg",
    link: "",
  },
  // Add more services as needed
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
        <div className="section without-bottom-spacing">
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
        </div>
      </div>
    </>
  );
}
