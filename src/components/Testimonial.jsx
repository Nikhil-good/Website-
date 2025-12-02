import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const testimonials = [
  {
    quote: "UDC has done a commendable job with the Bitrix24 and social media integration. The automation setup is functioning well, with only minor tweaks needed. We’re confident these will be addressed promptly once the Bitrix24 email service request is completed. Overall, a reliable and efficient collaboration so far.",
    name: "Manishchandra Rastogi.",
    role: "Rastogi Consultant ",
  },
  {
    quote: "Good and Their expertise in implementing Bitrix24 was truly impressive. The entire process was smooth, and the results have transformed how we manage our operations..",
    name: "Sanskaar.",
    role: "CorAge",
  },
  {
    quote: "Working with this team was an absolute pleasure. They understood our requirements perfectly and delivered beyond expectations. Highly recommended!",
    name: "Raj Mohan.",
    role: "Hirebuild",
  },
  {
    quote: "Great Support by the Advisor Partner and great options for expansion",
    name: "Hansraj Bose.",
    role: "H Bose E Commerce Pvt Ltd",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index}>
            <div className="testimonial-card">
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">"{t.quote}"</p>
              <div className="testimonial-client">
                <div className="avatar">{t.name.charAt(0)}</div>
                <h4 className="client-name">{t.name}</h4>
                <p className="client-role">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
