import React from "react";
import "./Pricing.css"; // Ensure styles are applied

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <div className="pricing-intro">
          <h3>💎 Transparent and Flexible Plans</h3>
          <h2>Our Pricing Models</h2>
          <p>
            At iPyramidTech, we understand that every project is unique. That’s why we offer two dynamic pricing models—Fixed-Price and Time & Materials—designed to fit your specific business needs.
          </p>
          <button className="learn-more">Learn More →</button>
        </div>

        <div className="pricing-cards">
          {/* Fixed-Price Plan */}
          <div className="pricing-card fixed">
            <h3>Fixed-Price Plan</h3>
            <p>Ideal for projects with a clear scope, the Fixed-Price Plan ensures predictable costs and timely delivery without surprises.</p>
            <h4>Starting From:</h4>
            <p className="price"><strong>$1,099</strong> per project</p>
            <ul>
              <li>✔ Detailed Project Estimates</li>
              <li>✔ Milestone-Based Payments</li>
              <li>✔ Limited Scope Adjustments</li>
            </ul>
            <button className="quote">Get Free Quote →</button>
          </div>

          {/* Time & Materials Plan */}
          <div className="pricing-card time-materials">
            <h3>Time & Materials Plan</h3>
            <p>Perfect for evolving projects, the Time & Materials Plan offers flexibility to adapt as your requirements grow.</p>
            <h4>Starting From:</h4>
            <p className="price"><strong>$50</strong> per hour</p>
            <ul>
              <li>✔ Transparent Hourly Rates</li>
              <li>✔ Man Hour Tracking</li>
              <li>✔ Regular Progress Updates</li>
              <li>✔ Scalable Team Allocation</li>
            </ul>
            <button className="get-started">Get Started →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
