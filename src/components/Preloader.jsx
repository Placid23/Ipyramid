import React, { useEffect, useState } from "react";
import "./Preloader.css"; // Import styles

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 3000); // Adjust time as needed
  }, []);

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Preloader;
