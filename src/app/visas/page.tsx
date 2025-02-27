import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function VisaPage() {
  // Example visa data (can be fetched dynamically)
  const visas = [
    // {
    //   id: 1,
    //   icon: "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652917cce01c23b4bb9f6add_fi_3487093.svg",
    //   title: "Temporary Visa",
    //   image:
    //     "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652d849bcf4ebbc1f400149a_pexels-keira-burton-6146984.jpg",
    //   link: "/visa/temporary-visa",
    // },
    // {
    //   id: 2,
    //   icon: "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652917c21a0ce7d89150e84a_fi_3021253.svg",
    //   title: "Study Visa",
    //   image:
    //     "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652d84ffc6c49e94d80bf51b_pexels-anaid-alca%CC%81ntara-mora%CC%81n-12334457.jpg",
    //   link: "/visa/study-visa",
    // },
    // {
    //   id: 3,
    //   icon: "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652916be950271066614b15c_fi_6964169.svg",
    //   title: "Permanent Resident",
    //   image:
    //     "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652d860d80ad1acadd691e19_pexels-anna-shvets-5325104.jpg",
    //   link: "/visa/permanent-visa",
    // },
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
            <h1 className="banner-title">Visa</h1>
          </div>
        </div>
      </div>

      {/* Visa List Section */}
      <div className="section without-bottom-spacing">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="collection-list-wrapper-visa-main w-dyn-list">
            <div role="list" className="main-visa-wrapper w-dyn-items">
              {visas.map((visa) => (
                <div
                  key={visa.id}
                  role="listitem"
                  className="visa-item w-dyn-item"
                >
                  <Link
                    href={visa.link}
                    className="visa-item-overlay w-inline-block"
                  >
                    <Image
                      src={visa.icon}
                      alt=""
                      width={50}
                      height={50}
                      loading="lazy"
                      className="image-icon-visa-style"
                    />
                    <h3 className="text-white">{visa.title}</h3>
                  </Link>
                  <Image
                    src={visa.image}
                    alt=""
                    width={436}
                    height={300}
                    loading="lazy"
                    sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 1279px) 47vw, (max-width: 1919px) 370px, 436.671875px"
                    className="visa-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
