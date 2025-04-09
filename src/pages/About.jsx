import React, { useEffect } from "react";
import "./About.css"; // Ensure styles are applied
import image1 from "../assets/1.jpg"; 
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";




const About = () => {
  useEffect(() => {
    const icon = document.querySelector(".icon");
    const aboutTitle = document.querySelector(".about-title");
    const images = document.querySelectorAll(".image1, .image2, .image3");

    setTimeout(() => {
      icon.classList.add("draw-line");
    }, 500);

    setTimeout(() => {
      aboutTitle.classList.add("slide-in");
    }, 1500);

    setTimeout(() => {
      images.forEach(img => img.classList.add("visible"));
    }, 2000);
  }, []);

  return (
    <section className="about-section animate">
      <div className="content-left">
        <h4 className="about-title">
          <span className="icon">🔷</span> About Fiberswift
        </h4>
        <h2>Pioneering Software Development for Businesses</h2>
        <p>
          Fiberswift combines years of expertise with cutting-edge technology to deliver
          exceptional software solutions that drive business success.
        </p>
        
        <ul className="features">
          <li><span className="green-check">✅</span> Custom Software Development</li>
          <li><span className="green-check">✅</span> Enterprise Solutions</li>
          <li><span className="green-check">✅</span> Digital Transformation</li>
          <li><span className="green-check">✅</span> Cloud Integration</li>

        </ul>
      </div>

      <div className="image-container-right">
        <img src={image1} className="image1 fade-in" alt="Team working on software development" />
        <img src={image2} className="image2 fade-in" alt="Presentation on analytics" />
      </div>

      <div className="image-container-left">
        <img src={image3} className="image3 fade-in" alt="Discussion in office" />
      </div>
    </section>
  );
};

export default About;
