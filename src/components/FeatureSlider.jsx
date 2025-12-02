import React, { useRef, useEffect } from "react";
import "./FeatureSlider.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const FeatureSlider = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  // ✅ AUTO SLIDE ONLY
  useEffect(() => {
    if (!sliderRef.current) return;

    const cardWidth = 330; // card width with gap

    intervalRef.current = setInterval(() => {
      const slider = sliderRef.current;

      // Slide smoothly
      slider.scrollLeft += cardWidth;

      // Reset when end reaches
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
      }
    }, 2500);

    return () => clearInterval(intervalRef.current);
  }, []);

  const features = [
    { title: "CRM & Sales", description: "Boost Sales with Bitrix24 CRM ✨", color: "#4e54c8", logo: "Bitrix24 CRM", path: "/crm-sales" },
    { title: "Pipeline Management", description: "Full Visibility ✨", color: "#0077b6", logo: "Bitrix24 Pipeline", path: "/pipeline-management" },
    { title: "Projects", description: "Organize & Track Work ✨", color: "#00b894", logo: "Bitrix24 Projects", path: "/project-management" },
    { title: "Communication", description: "Unify All Comms ✨", color: "#38b000", logo: "Bitrix24 Messenger", path: "/communications" },
    { title: "Copilot AI", description: "Your Smart Assistant ✨", color: "#ff9f1c", logo: "Bitrix24 Copilot", path: "/copilot" },
    { title: "Automation", description: "Streamline Workflows ✨", color: "#6c5ce7", logo: "Bitrix24 Automation", path: "/sales-automation" },
  ];

  return (
    <div className="feature-slider-section">
      <h2 className="title">Our Core Features</h2>

      <div className="slider-wrapper">
        <div className="slider-container" ref={sliderRef}>
          {features.map((item, index) => (
            <Link
              to={item.path}
              className="slider-card"
              style={{ backgroundColor: item.color }}
              key={index}
              data-aos="fade-up"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="logo">{item.logo}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSlider;
