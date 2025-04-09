import React from "react";
import "./TechStack.css";

const techTools = [
  {
    name: "Figma",
    img: "figma.svg",
    description: "Design and iterate faster with collaborative design tools built for teams.",
  },
  {
    name: "Discord",
    img: "discord.svg",
    description: "Connect with your team effortlessly using real-time chat and voice features.",
  },
  {
    name: "Slack",
    img: "slack.svg",
    description: "Streamline communication and keep your team aligned with Slack.",
  },
  {
    name: "Trello",
    img: "trello.svg",
    description: "Stay organized and achieve your goals with Trello’s powerful boards.",
  },
];

const TechStack = () => {
  return (
    <section className="tech-stack">
      <div className="container">
        <h2>iPyramidTech Supercharges Your Development Process</h2>
        <p>
          Leverage the power of tools you trust, seamlessly integrated to optimize your software development workflow
          and enhance team collaboration.
        </p>

        <div className="tech-grid">
          {techTools.map((tool, index) => (
            <div className="tech-item" key={index}>
              <img src={tool.img} alt={tool.name} />
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>

        <a href="#" className="see-all">
          See All Integrations →
        </a>
      </div>
    </section>
  );
};

export default TechStack;
