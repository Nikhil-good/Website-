import React from "react";
import "./Technology.css";

import wazzup from "../assets/partners/Wazzup24.jpg";
import chatapp from "../assets/partners/chatapp.jpg";
import zoho from "../assets/partners/zoho.jpg";
import bitrix from "../assets/partners/bitrix.png";
import edna from "../assets/partners/edna.webp";
import propertyFinder from "../assets/partners/property-finder.jpg";
import hubspot from "../assets/partners/hubspot.jpg";
import telephony from "../assets/partners/Telephony integration.png";
import myhub from "../assets/partners/myhub.jpg";

const logos = [
  { src: bitrix },
  { src: telephony },
  { src: wazzup },
  { src: propertyFinder },
  { src: hubspot },
  { src: zoho },
  { src: edna },
  { src: chatapp },
  { src: myhub },
];

const Technology = () => {
  return (
    <div className="floating-logo-wrapper">
      <h2 className="section-heading">Our Technology Partners</h2>

      {/* ✅ Desktop Floating Layout */}
      <div className="floating-logo-desktop">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="floating-logo"
            style={{
              top: `${15 + (index % 3) * 20}%`,
              left: `${10 + (index % 5) * 15}%`,
              animationDuration: `${4 + index * 2}s`,
            }}
          >
            <img src={logo.src} alt={`partner-${index}`} />
          </div>
        ))}
      </div>

      {/* ✅ Mobile Grid Layout */}
      <div className="floating-logo-mobile">
        {logos.map((logo, index) => (
          <div className="mobile-logo-card" key={index}>
            <img src={logo.src} alt={`partner-${index}`} />
          </div>
        ))}
      </div>

      {/* Background bubbles remain */}
      <div className="bubble pink"></div>
      <div className="bubble blue"></div>
      <div className="bubble green"></div>
      <div className="bubble yellow"></div>
      <div className="bubble purple"></div>
    </div>
  );
};

export default Technology;
