import React, { useState, useEffect } from "react";
import "./Pricing.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");
  const [enterpriseUsers, setEnterpriseUsers] = useState(250);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const monthlyPrices = {
    basic: 1990,
    standard: 4990,
    professional: 9990,
  };

  const annualPrices = {
    basic: 19080,
    standard: 47880,
    professional: 95880,
  };

  const getPlanPrice = (plan) =>
    billing === "monthly" ? monthlyPrices[plan] : annualPrices[plan];

  const enterpriseOptions = [
    250, 500, 1000, 2000, 3000, 4000, 5000,
    6000, 7000, 8000, 9000, 10000,
  ];

  const getEnterprisePrice = (users) => {
    const monthlyMap = {
      250: 19990,
      500: 29990,
      1000: 49990,
      2000: 99990,
      3000: 149990,
      4000: 199990,
      5000: 249990,
      6000: 299990,
      7000: 349990,
      8000: 399990,
      9000: 449990,
      10000: 499990,
    };

    const annualMap = {
    250: 191880,
      500: 287880,
      1000: 479880,
      2000: 959880,
      3000: 1439880,
      4000: 1919880,
      5000: 2399880,
      6000: 2879880,
      7000: 3359880,
      8000: 3839880,
      9000: 4319880,
      10000: 4799880,
    };

    return billing === "monthly"
      ? monthlyMap[users] || 0
      : annualMap[users] || 0;
  };

  const handleBuy = (planName, baseAmount) => {
    const GST_RATE = 0.18;
    const totalAmount = Math.round(baseAmount * (1 + GST_RATE));

    const options = {
      key: "rzp_live_9ThypY2Vq1dvBU",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Unique Design Consultant",
      description: `${planName} Plan Purchase (incl. 18% GST)`,
      image: "/assets/img/udc-logo.png",
      theme: { color: "#007bff" },
      modal: {
        ondismiss: () => console.log("Razorpay closed"),
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const enterprisePrice = getEnterprisePrice(enterpriseUsers);

  const features = (items) =>
    items.map((item, i) => (
      <li key={i}>
        <FaCheckCircle className="me-2" /> {item}
      </li>
    ));

  return (
    <div className="pricing-section" id="pricing">
      <h2>One price for ALL users included within the plan limit</h2>

      <div className="billing-toggle">
        <button
          className={billing === "monthly" ? "active" : ""}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          className={billing === "annually" ? "active" : ""}
          onClick={() => setBilling("annually")}
        >
          Annually <span className="save">Save up to 20%</span>
        </button>
      </div>

      <div className="pricing-cards">
        {/* Basic Plan */}
        <div className="pricing-card" data-aos="fade-up">
          <h3>Basic</h3>
          <p className="price">Rs. {getPlanPrice("basic").toLocaleString()}</p>
          <p>/organization/{billing} billed</p>
          <div className="user-info">includes 5 users</div>
          <ul>
            {features([
              "Basic CRM",
              "Task Management",
              "Online Collaboration",
              "Contact Center",
              "Drive (24GB)",
              "5 users included",
            ])}
          </ul>
          <button
            className="buy-btn"
            onClick={() => handleBuy("Basic", getPlanPrice("basic"))}
          >
            BUY
          </button>
        </div>

        {/* Standard Plan */}
        <div className="pricing-card" data-aos="fade-up" data-aos-delay="100">
          <h3>Standard</h3>
          <p className="price">
            Rs. {getPlanPrice("standard").toLocaleString()}
          </p>
          <p>/organization/{billing} billed</p>
          <div className="user-info">includes 50 users</div>
          <ul>
            {features([
              "Advanced CRM Tools",
              "Sales Automation",
              "Marketing Features",
              "Task Management",
              "Contact Center",
              "Online Store",
              "Drive (100GB)",
            ])}
          </ul>
          <button
            className="buy-btn"
            onClick={() => handleBuy("Standard", getPlanPrice("standard"))}
          >
            BUY
          </button>
        </div>

        {/* Professional Plan */}
        <div
          className="pricing-card popular"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3>Professional</h3>
          <p className="price">
            Rs. {getPlanPrice("professional").toLocaleString()}
          </p>
          <p>/organization/{billing} billed</p>
          <div className="user-info">includes 100 users</div>
          <ul>
            {features([
              "All Features Included",
              "Business Automation",
              "Task Management",
              "HR Features",
              "Marketing Features",
              "Contact Center",
              "Drive (1TB)",
            ])}
          </ul>
          <button
            className="buy-btn"
            onClick={() =>
              handleBuy("Professional", getPlanPrice("professional"))
            }
          >
            BUY
          </button>
          <span className="badge">Most Popular</span>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card" data-aos="fade-up" data-aos-delay="300">
          <h3>Enterprise</h3>
          <p className="price">Rs. {enterprisePrice.toLocaleString()}</p>
          <p>/organization/{billing} billed</p>
          <select
            value={enterpriseUsers}
            onChange={(e) => setEnterpriseUsers(parseInt(e.target.value))}
          >
            {enterpriseOptions.map((opt) => (
              <option key={opt} value={opt}>
                includes {opt} users
              </option>
            ))}
          </select>
          <ul>
            {features([
              "Full Feature Access",
              "Advanced Automations",
              "Business Automation",
              "Branch Features",
              "HR Features",
              "Marketing Features",
              "Drive (3TB)",
            ])}
          </ul>
          <button
            className="buy-btn"
            onClick={() => handleBuy("Enterprise", enterprisePrice)}
          >
            BUY
          </button>
        </div>
      </div>

      <div className="pricing-cta mt-5" data-aos="fade-up" data-aos-delay="400">
        <h4>Not sure which plan is right for you?</h4>
        <a href="tel:+918958847686" className="btn btn-outline-primary mt-2">
          Talk to an Expert
        </a>
      </div>
    </div>
  );
};

export default Pricing;
