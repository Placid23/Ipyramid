import React from "react";
import "./Process.css"; // Ensure styles are applied
import icon1 from "../assets/icon_01.svg"; // Update the paths if needed
import icon2 from "../assets/icon_02.png";
import icon3 from "../assets/icon_05.svg";
import icon4 from "../assets/icon_06.svg";

const Process = () => {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header">
          <span className="section-icon">🔷 OUR PROCESS</span>
          <h2>How Fiberswift Delivers Value</h2>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="process-icon">
              <img src={icon1} alt="Requirements" />
            </div>
            <span className="step-number">STEP-1</span>
            <h3>Understand Requirements</h3>
            <p>Collaborating closely with clients to understand their vision and business goals.</p>
          </div>
          <div className="process-step">
            <div className="process-icon">
              <img src={icon2} alt="Develop Strategies" />
            </div>
            <span className="step-number">STEP-2</span>
            <h3>Develop Strategies</h3>
            <p>Crafting tailored development plans that align with the client’s objectives.</p>
          </div>
          <div className="process-step">
            <div className="process-icon">
              <img src={icon3} alt="Implement Solutions" />
            </div>
            <span className="step-number">STEP-3</span>
            <h3>Implement Solutions</h3>
            <p>Bringing ideas to life through high-quality development and deployment.</p>
          </div>
          <div className="process-step">
            <div className="process-icon">
              <img src={icon4} alt="Maintain Excellence" />
            </div>
            <span className="step-number">STEP-4</span>
            <h3>Maintain Excellence</h3>
            <p>Ensuring long-term success through proactive support and continuous improvement.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
