import Image from "next/image";
export default function CoreServicesSection() {
  const services = [
    {
      id: 1,
      title: "Temporary Visa",
      description:
        "From filling out application forms to gathering supporting documents, we assist you in completing the visa application accurately.",
      image:
        "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652ea6d6583f67a8de3fa46e_pexels-keira-burton-6146978.jpg",
      icon: "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652db2fc45a71830e136ff99_fi_3022243.svg",
      link: "/visa/temporary-visa",
    },
    {
      id: 2,
      title: "Study Visa Application",
      description:
        "From filling out application forms to gathering supporting documents, we assist you in completing the visa application accurately.",
      image:
        "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/65286fb263f107046ea7900e_nicole-geri-gMJ3tFOLvnA-unsplash.jpg",
      icon: "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/6528915357f15ad2b94de740_visa.svg",
      link: "/visa/study-visa",
    },
    {
      id: 3,
      title: "Citizenship through Investment",
      description:
        "Investing in a second citizenship can offer various benefits, including better global mobility, a Plan B for the family, better quality of life, and business opportunities.",
      image:
        "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652891bd3236320ae1f0b84c_pexels-oleksandr-p-1008155.jpg",
      icon: "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/6528916057f15ad2b94df35b_relocation.svg",
      link: "/visa/investment-visa",
    },
    {
      id: 4,
      title: "Work Visa",
      description:
        "We create personalized immigration strategies that align with your long-term objectives, considering different factors.",
      image:
        "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652891e0a6170d2717dd7e55_pexels-vlada-karpovich-7368310.jpg",
      icon: "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652891689ec9911fdd305464_immigration.svg",
      link: "/visa/work-visa",
    },
    {
      id: 5,
      title: "Family Visa",
      description:
        "Ready to reunite with your family and create lasting memories? Contact our team of experts to assist you with the family visa application process and bring your family closer than ever.",
      image:
        "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652d84ffc6c49e94d80bf51b_pexels-anaid-alca%CC%81ntara-mora%CC%81n-12334457.jpg",
      icon: "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652891689ec9911fdd305464_immigration.svg",
      link: "/visa/family-visa",
    },
    {
      id: 6,
      title: "Permanent Resident",
      description:
        "Our team meticulously reviews all your documents to ensure they meet the specific requirements of the immigration authorities.",
      image:
        "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/652892299ec9911fdd311500_pexels-cytonn-photography-955389.jpg",
      icon: "https://cdn.prod.website-files.com/651f2c08c5bd81eb296c1823/65289172057200ddd4f42749_documents.svg",
      link: "/visa/family-visa",
    },
  ];

  return (
    <div className="section without-bottom-spacing">
      <div className="base-container w-container">
        <div className="w-layout-grid work-coach">
          <div
            id="w-node-e423d1b1-02c4-b0d6-9039-82433fcc6667-296c1808"
            data-w-id="e423d1b1-02c4-b0d6-9039-82433fcc6667"
            style={{ opacity: 1 }}
          >
            <h2
              data-w-id="e423d1b1-02c4-b0d6-9039-82433fcc6669"
              style={{ opacity: 1 }}
              className="in-section-title"
            >
              Core Services
            </h2>
            <p
              data-w-id="e423d1b1-02c4-b0d6-9039-82433fcc666b"
              style={{ opacity: 1 }}
              className="services-description"
            >
              Contact us to schedule a consultation and take the first step
              toward making your dream of living in a new country a reality.
            </p>
            <div
              data-w-id="9b9dd8e4-aa48-b210-245b-5519631af685"
              style={{ opacity: 1 }}
              className="button-wrapper"
            >
              <a href="/services" className="primary-button dark">
                Explore all
              </a>
            </div>
          </div>

          {services.map((service) => (
            <div
              key={service.id}
              className="collection-list-wrapper-services w-dyn-list"
            >
              <div role="list" className="collection-list-services w-dyn-items">
                <div
                  role="listitem"
                  className="collection-item-services w-dyn-item"
                >
                  <div
                    data-w-id={`${service.id}`}
                    style={{
                      backgroundImage: `url(${service.image})`,
                      opacity: 1,
                    }}
                    className="work-wrapper"
                  >
                    <Image
                      src={service.icon}
                      alt=""
                      className="icon-work"
                      width={50} // Adjust the width as needed
                      height={50} // Adjust the height as needed
                    />
                    <a href={service.link} className="w-inline-block">
                      <h5 className="services-titles">{service.title}</h5>
                    </a>
                    <p className="service-item-description">
                      {service.description}
                    </p>
                    <div className="button-wrapper smaller-spacing">
                      <a
                        href={service.link}
                        className="link-with-arrow-underline white-style"
                      >
                        Learn more
                      </a>
                    </div>
                    <div className="dark-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
