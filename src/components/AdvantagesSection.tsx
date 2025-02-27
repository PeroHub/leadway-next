export default function AdvantagesSection() {
  const advantages = [
    {
      id: 1,
      title: "Initial Consultation and Assessment",
      description:
        "Our experienced team of immigration experts is dedicated to making your journey to a new country stress-free.",
      number: "01",
    },
    {
      id: 2,
      title: "Personalized Guidance and Support",
      description:
        "Our experienced team of immigration experts is dedicated to making your journey to a new country stress-free.",
      number: "02",
      isCenter: true,
    },
    {
      id: 3,
      title: "Ongoing Follow-Up and Assistance",
      description:
        "Our experienced team of immigration experts is dedicated to making your journey to a new country stress-free.",
      number: "03",
    },
  ];

  return (
    <div className="section">
      <div className="base-container w-container">
        <div className="w-layout-grid advantages-wrapper">
          <div
            id="w-node-c651ba22-4432-547d-7cd0-369831cf9fba-296c1808"
            className="left-advatages-content"
          >
            {advantages.map((advantage) => (
              <div
                key={advantage.id}
                data-w-id={`c651ba22-4432-547d-7cd0-369831cf9fbb-${advantage.id}`}
                style={{ opacity: 1 }}
                className={`advantages-wrap ${
                  advantage.isCenter ? "center" : ""
                }`}
              >
                <div className="heading-advantages">
                  <h5 className={advantage.isCenter ? "white-text" : ""}>
                    {advantage.title}
                  </h5>
                  <div
                    className={`number ${
                      advantage.isCenter ? "white-text" : ""
                    }`}
                  >
                    {advantage.number}
                  </div>
                </div>
                <p
                  className={`small-paragraph ${
                    advantage.isCenter ? "white-w-95" : "_w-95"
                  }`}
                >
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
          <div
            id="w-node-c651ba22-4432-547d-7cd0-369831cf9fd3-296c1808"
            className="right-advantages-content"
          >
            <div
              data-w-id="c651ba22-4432-547d-7cd0-369831cf9fd4"
              style={{ opacity: 1 }}
              className="subtitle-text"
            >
              Advantages
            </div>
            <h2
              data-w-id="c651ba22-4432-547d-7cd0-369831cf9fd6"
              style={{ opacity: 1 }}
              className="in-section-title"
            >
              Ready to embark on your journey?
            </h2>
            <p
              data-w-id="c651ba22-4432-547d-7cd0-369831cf9fd8"
              style={{ opacity: 1 }}
            >
              We provide comprehensive consultations to help you determine the
              most suitable visa option based on your unique circumstances and
              goals. Our experts will assess your eligibility and guide you
              through the necessary requirements.
            </p>
            <div
              data-w-id="c651ba22-4432-547d-7cd0-369831cf9fda"
              style={{ opacity: 1 }}
              className="button-wrapper"
            >
              <a href="/contact-us-1" className="primary-button dark">
                Get a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
