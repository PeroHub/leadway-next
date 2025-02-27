"use client";

import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      id: 1,
      question: "What is a visa?",
      answer:
        "A visa is an official document issued by a government that allows an individual to enter, exit, or stay in a specific country for a predetermined period and purpose.",
    },
    {
      id: 2,
      question: "How do I know which type of visa I need?",
      answer:
        "The type of visa you need depends on your purpose of travel—tourism, work, study, family reunion, etc. Our experts can assist you in determining the most suitable visa for your situation.",
    },
    {
      id: 3,
      question: "What are the common requirements for a visa application?",
      answer:
        "Common requirements include a valid passport, completed application form, passport-sized photographs, flight itinerary, hotel reservations, financial statements, and purpose-specific documents (e.g., invitation letters, employment letters).",
    },
    {
      id: 4,
      question: "How long does it take to process a visa application?",
      answer:
        "Visa processing times vary by country and type of visa. It can range from a few days to several weeks. Applying well in advance of your planned travel dates is advisable.",
    },
    {
      id: 5,
      question: "Can I apply for a visa online?",
      answer:
        "Some countries offer online visa application systems, while others require in-person or postal applications. We can guide you on the appropriate application method for your chosen destination.",
    },
    {
      id: 6,
      question: "What should I do if my visa application is denied?",
      answer:
        "If your application is denied, you may reapply with updated information or appeal the decision. Understanding the rejection reasons is crucial to rectify any issues before reapplying.",
    },
    {
      id: 7,
      question: "Can I apply for a visa without confirmed travel plans?",
      answer:
        "Yes, you can apply for a visa without confirmed travel plans. However, providing a tentative itinerary or explaining your travel intentions may enhance your application.",
    },
    {
      id: 8,
      question: "Is it necessary to have travel insurance for a visa?",
      answer:
        "While it may not always be mandatory, having travel insurance is highly recommended to cover unexpected events during your trip, such as medical emergencies or trip cancellations.",
    },
  ];

  const [activeId, setActiveId] = useState<number | null>(null);

  // interface FAQ {
  //     id: number;
  //     question: string;
  //     answer: string;
  // }

  const toggleAccordion = (id: number): void => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="section without-bottom-spacing">
      <div className="base-container w-container">
        <div className="section-title-wrapper">
          <div
            data-w-id="7eda39f8-72e1-8587-ed07-51f72d479399"
            style={{
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            className="subtitle-text"
          >
            FAQ
          </div>
          <h2
            data-w-id="f8941fc1-dca9-9a98-a8e4-d81f5318ed5d"
            style={{ opacity: 1 }}
            className="section-title"
          >
            The most common questions
          </h2>
        </div>
        <div
          data-w-id="8989ee74-68aa-89b0-f9fb-c214c3221b28"
          className="accordion-wrapper"
          style={{ opacity: 1 }}
        >
          <div className="accordion-wrap">
            {faqs.slice(0, 4).map((faq) => (
              <div
                key={faq.id}
                data-hover="false"
                data-delay="0"
                data-w-id={`8989ee74-68aa-89b0-f9fb-c214c3221b2a-${faq.id}`}
                className={`accordion-item cursor-pointer ${
                  activeId === faq.id ? "active" : ""
                }`}
              >
                <div
                  className="accordion-toggle"
                  onClick={() => toggleAccordion(faq.id)}
                  role="button"
                  tabIndex={0}
                >
                  <h6
                    className="accordion-title"
                    style={{ color: "rgb(14, 14, 14)" }}
                  >
                    {faq.question}
                  </h6>
                  <div
                    className="accordion-icon"
                    style={{
                      color: "rgb(14, 14, 14)",
                      transform:
                        activeId === faq.id ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▼
                  </div>
                </div>
                {activeId === faq.id && (
                  <nav className="accordion-list">
                    <p className="accordion-list-content">{faq.answer}</p>
                  </nav>
                )}
              </div>
            ))}
          </div>
          <div className="accordion-wrap last-child">
            {faqs.slice(4).map((faq) => (
              <div
                key={faq.id}
                data-hover="false"
                data-delay="0"
                data-w-id={`8989ee74-68aa-89b0-f9fb-c214c3221b2a-${faq.id}`}
                className={`accordion-item cursor-pointer ${
                  activeId === faq.id ? "active" : ""
                }`}
              >
                <div
                  className="accordion-toggle"
                  onClick={() => toggleAccordion(faq.id)}
                  role="button"
                  tabIndex={0}
                >
                  <h6
                    className="accordion-title"
                    style={{ color: "rgb(14, 14, 14)" }}
                  >
                    {faq.question}
                  </h6>
                  <div
                    className="accordion-icon"
                    style={{
                      color: "rgb(14, 14, 14)",
                      transform:
                        activeId === faq.id ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▼
                  </div>
                </div>
                {activeId === faq.id && (
                  <nav className="accordion-list">
                    <p className="accordion-list-content">{faq.answer}</p>
                  </nav>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
