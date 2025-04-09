import React, { useState } from "react";
import "./FAQ.css";



const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What services does iPyramidTech offer?",
      answer:
        "We offer branding, web design, software development, school management database solutions, smart home security, and general contracts.",
    },
    {
      question: "How do you ensure the success of a project?",
      answer:
        "Success is achieved through our agile development approach, clear communication, and regular updates. Our team ensures each milestone aligns with your business objectives.",
    },
    {
      question: "Can you work with businesses in different industries?",
      answer:
        "Yes, we have experience across multiple industries, including education, finance, healthcare, e-commerce, and more.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "The timeline depends on the project scope and requirements. We provide estimated delivery times after the initial consultation.",
    },
    {
      question: "Do you offer post-launch support?",
      answer:
        "Yes, we provide maintenance and post-launch support to ensure smooth operation and updates as needed.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-content">
          {/* Left: FAQ Image */}
          <div className="faq-image">
            <img src="faq_home_2.jpg" alt="Business Discussion" />
          </div>

          {/* Right: FAQ Items */}
          <div className="faq-text">
            <h2>Answers to Your Questions</h2>
            <p className="faq-subtitle">Frequently Asked Questions</p>

            <div className="faq">
              {faqData.map((item, index) => (
                <div className="faq-item" key={index}>
                  <button
                    className={`faq-question ${openFAQ === index ? "open" : ""}`}
                    onClick={() => toggleFAQ(index)}
                  >
                    {item.question} <span>{openFAQ === index ? "−" : "+"}</span>
                  </button>
                  <div
                    className="faq-answer"
                    style={{ display: openFAQ === index ? "block" : "none" }}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
