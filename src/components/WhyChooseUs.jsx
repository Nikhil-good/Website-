// src/components/WhyChooseUs.jsx
import React, { useEffect } from 'react';
import { FaLightbulb, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WhyChooseUs.css';

const WhyChooseUs = ({ onPopupOpen }) => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const features = [
    {
      icon: <FaLightbulb className="icon-animated" size={40} />,
      title: 'All-in-One Branding',
      description: 'Visual identity, logo, and brand guidelines that resonate.',
    },
    {
      icon: <FaLaptopCode className="icon-animated" size={40} />,
      title: 'Fast & Responsive Websites',
      description: 'Beautiful, SEO-optimized, mobile-first websites built to scale.',
    },
    {
      icon: <FaChartLine className="icon-animated" size={40} />,
      title: 'Custom Strategy',
      description: 'Tailored strategies focused on your growth and success.',
    },
  ];

  return (
    <section className="why-choose-section" id="why-choose">
      <div className="container text-center">
        <h2 className="section-title text-white fw-bold mb-5">
          Why Choose Unique Design Consultant?
        </h2>

        <div className="cards-container row justify-content-center">
          {features.map((item, idx) => (
            <div
              className="col-md-4 mb-4"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="feature-card position-relative p-4">
                <div className="svg-blob"></div>
                <div className="icon-container">{item.icon}</div>
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          {/* ✅ Trigger custom popup instead of Bitrix embedded form */}
          <button className="free-quote-btn" onClick={onPopupOpen}>
            Get free consultation →
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
