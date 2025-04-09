import React, { useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const portfolioItems = [
    {
      category: "web",
      title: "Nintrend",
      description: "A web application for exchanging and trading cryptocurrency.",
    },
    {
      category: "web",
      title: "Tethub",
      description: "A social networking platform connecting students from multiple tertiary institutions.",
    },
    {
      category: "custom-software",
      title: "Testignitor",
      description: "An online-based testing and assessment platform.",
    },
    {
      category: "mobile",
      title: "Easyflip",
      description: "A cross-platform mobile application for trading and exchanging digital assets.",
    },
  ];

  return (
    <section className="portfolio-section animate">
      <div className="container">
        <h2>Showcasing Our Expertise</h2>
        <p>Our Recent Innovations</p>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {["all", "web", "data-science", "job-recruitment", "business-dev", "custom-software", "mobile"].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter.replace("-", " ").toUpperCase()}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {portfolioItems
            .filter((item) => activeFilter === "all" || item.category === activeFilter)
            .map((item, index) => (
              <div key={index} className="portfolio-item">
                <div className="portfolio-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href="#" className="read-more">READ MORE →</a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
