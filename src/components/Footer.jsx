import React from "react";
import "./Footer.css"; // Ensure CSS is applied

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} FiberSwift. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
