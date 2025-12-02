// Hero.jsx
import React from "react";
import "./Hero.css";

// 1. Define the array of image file paths
// IMPORTANT: Replace these paths with the actual paths to your 4 images.
// I'm using placeholder names (hero-banner-1.png, hero-banner-2.png, etc.)
const heroImages = [
  `${import.meta.env.BASE_URL}assets/img/hero/hero-banner-2.png`,
  `${import.meta.env.BASE_URL}assets/img/hero banner-2.png`,
  `${import.meta.env.BASE_URL}assets/img/why.png`,
  `${import.meta.env.BASE_URL}assets/img/template.jpg`,
];

// Set the duration for how long each image is visible (e.g., 5000ms = 5 seconds)
const SLIDE_INTERVAL = 2000;

const Hero = ({ onPopupOpen }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent jump to #contact
    if (onPopupOpen) onPopupOpen();
  };

  const [isMobile, setIsMobile] = React.useState(false);
  
  // 2. State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // 3. Effect for the automatic image change interval
  React.useEffect(() => {
    // Set up the interval
    const intervalId = setInterval(() => {
      // Calculate the next index: (current + 1) % total number of images
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, SLIDE_INTERVAL);

    // Clear the interval when the component unmounts or the effect re-runs
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this runs once on mount

  const marqueeText =
    "🚀 We are a Bitrix24 Gold Partner | ✅ 100+ CRM Clients Served | 💬 Free Consultation Available | 📞 Call Now: +91 8958847686 | 📩 info@uniquedesignconsultnt.in";

  return (
    <section className="hero-wrapper">
      <div
        className="hero-content-container"
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : undefined,
          alignItems: isMobile ? "center" : undefined,
        }}
      >
        <div className="hero-text" style={{ width: isMobile ? "100%" : undefined }}>
          {/* ... (Your existing marquee code) ... */}
          {isMobile ? (
            <div
              className="marquee-mobile"
              style={{
                overflow: "hidden",
                width: "100%",
                boxSizing: "border-box",
                padding: "8px 0",
                touchAction: "pan-y", 
              }}
              role="region"
              aria-label="Announcements"
            >
              <style>
                {`
                  /* Track will contain two copies of the text and scroll left continuously */
                  .hero-marquee-mobile-track {
                    display: inline-flex;
                    white-space: nowrap;
                    gap: 1.5rem;
                    align-items: center;
                    will-change: transform;
                    animation: heroMarqueeMobile 18s linear infinite;
                    font-size: inherit;
                  }
                  /* Pause on hover / touch (improves accessibility) */
                  .marquee-mobile:active .hero-marquee-mobile-track,
                  .marquee-mobile:hover .hero-marquee-mobile-track {
                    animation-play-state: paused;
                  }
                  @keyframes heroMarqueeMobile {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                `}
              </style>

              {/* Two copies ensure a seamless loop */}
              <div
                className="hero-marquee-mobile-track"
                aria-hidden={false}
              >
                <span style={{ display: "inline-block", paddingRight: "1.5rem" }}>
                  {marqueeText}
                </span>
                <span style={{ display: "inline-block", paddingRight: "1.5rem" }}>
                  {marqueeText}
                </span>
              </div>
            </div>
          ) : (
            <div className="navbar-marquee " style={{paddingBottom:"75px "}}>
              <div className="marquee-container">
                <div className="marquee-track">
                  <div className="marquee-text">{marqueeText}</div>
                  <div className="marquee-text">{marqueeText}</div>
                </div>
              </div>
            </div>
          )}

          <h1>
            One Platform,
            <br />
            find a <span>Many Possibilities</span>
          </h1>
          <p>Make your business perfect right now!</p>

          {/* Connect the button */}
          <a
            href="#contact"
            className="free-quote-btn"
            onClick={handleClick}
            style={{ display: "inline-block" }}
          >
            Free Quote →
          </a>

          <a
            href="tel:+918958847686"
            className="hero-support text-decoration-none"
            style={{ marginTop: isMobile ? 12 : undefined, display: "inline-flex", alignItems: "center" }}
          >
            <div className="support-icon">📞</div>
            <div>
              <p className="support-label">ONLINE SUPPORT</p>
              <p className="support-number">+91 8958847686</p>
            </div>
          </a>
        </div>

        {/* 4. Modified hero-image section for image rotation */}
        <div className="hero-image" style={{ width: isMobile ? "100%" : undefined, display: "flex", justifyContent: isMobile ? "center" : undefined }}>
          <div className="image-slider-container">
            {heroImages.map((imageSrc, index) => (
              <img
                key={index}
                src={imageSrc}
                alt={`Hero Visual ${index + 1}`}
                // Apply a class to images that are not the current one
                className={`hero-main-img ${index === currentImageIndex ? 'active' : 'inactive'}`}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                  position: 'absolute', // Position absolute for stacking
                  top: 0,
                  left: 0,
                  opacity: index === currentImageIndex ? 1 : 0, // Control visibility
                  transition: 'opacity 1s ease-in-out', // Smooth transition
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;