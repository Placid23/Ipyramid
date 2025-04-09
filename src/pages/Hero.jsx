import React from "react";
import "./Hero.css"; // Ensure the styles are applied
import heroImage from "../assets/3.jpg"; // Update the path if needed

const Hero = () => {
  return (
    <section className="hero animate">
      <div className="hero-content">
        <div className="hero-image">
          <img src={heroImage} width="100" alt="Innovative Software Solutions" />
        </div>
        <div className="Hero-div">
          <p className="ISS"><b>Innovative Software Solutions</b></p>
          <h1 className="TII">Transforming Ideas Into Reality</h1>
          <p className="button-container">
            <button className="Explore">Custom Development</button>
            <button className="Explore">Scalable Solutions</button><br /><br />
            <button className="Explore">Business Growth</button>
          </p>
          <h2 className="FSI">Fiberswift specializes in creating tailor-made<br></br> software solutions to meet <br></br> unique business needs.</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
