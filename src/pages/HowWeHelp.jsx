import React from "react";
import "./HowWeHelp.css"; // Ensure styles are applied
import helpMain from "../assets/blog1.jpg"; // Update the path if needed
import helpImage1 from "../assets/blog2.jpg";
import helpImage2 from "../assets/blog3.jpg";
import softwareIcon from "../assets/software.PNG";
import uiuxIcon from "../assets/ui-ux.jpg";



const HowWeHelp = () => {
  return (
    <section className="how-we-help">
      <div className="container">
        <div className="section-header">
          <span className="section-icon">🔷 How We Help</span>
          <h2>Driving Your Business Forwards</h2>
        </div>
        <div className="help-content animate">
          <div className="help-image">
            <img src={helpMain} alt="Business Discussion" />
          </div>
          <div className="help-cards">
            <div className="help-card">
              <img src={helpImage1} alt="IT Consultancy" />
              <h3>IT Consultancy</h3>
              <p>Empowering businesses with tailored IT strategies.</p>
            </div>
            <div className="help-card">
              <img src={helpImage2} alt="Cybersecurity" />
              <h3>Cybersecurity</h3>
              <p>Ensuring robust protection for your digital assets.</p>
            </div>
            <div className="help-card">
              <img src={softwareIcon} alt="Software Development" />
              <h3>Software Development</h3>
              <p>Innovative solutions tailored to your unique needs.</p>
            </div>
            <div className="help-card">
              <img src={uiuxIcon} alt="UX/UI Strategy" />
              <h3>UX/UI Strategy</h3>
              <p>Designing intuitive interfaces for better user experiences.</p>
            </div>
          </div>
        </div>
        <div className="help-footer">
          <p>At Fiberswift, we transform challenges into opportunities, delivering solutions that drive success.</p>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
