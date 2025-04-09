import React from "react";
import "./Consultation.css"; // Ensure styles are applied

const Consultation = () => {
  return (
    <section className="consultation-section">
      <div className="container">
        <h2>We have helped more than 700+ Clients Worldwide</h2>
        <p>
          Fiberswift has successfully partnered with over 700 clients across the globe, 
          delivering cutting-edge software solutions that drive success.
        </p>

        <div className="stats-container">
          <div className="stat-box">
            <span className="stat-circle">90%</span>
            <p>Client satisfaction rate for our custom software solutions.</p>
          </div>
          <div className="stat-box">
            <span className="stat-circle">85%</span>
            <p>Projects delivered on time and within budget.</p>
          </div>
          <div className="stat-box">
            <span className="stat-circle">75%</span>
            <p>Innovative solutions that keep us ahead in the tech industry.</p>
          </div>
          <div className="stat-box">
            <span className="stat-circle">90%</span>
            <p>Client-focused approach to ensuring success in every project.</p>
          </div>
        </div>

        <div className="consultation-form">
          <h3>Consultation for Free</h3>
          <p>
            Let Fiberswift help you turn your ideas into powerful software solutions. 
            Our experts are here to guide you through every step of your development journey.
          </p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Project Category" required />
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
