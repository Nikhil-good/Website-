import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo1 .png";
import "./Navbar.css";

const Navbar = ({ onAuthOpen, onOpenForm }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavClick = () => {
    setIsNavCollapsed(true);
  };

  return (
    <nav className="navbar custom-navbar navbar-expand-lg px-3 px-lg-4 shadow sticky-top">
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          onClick={handleNavClick}
        >
          <img
            src={logo}
            alt="UDC Logo"
            className="me-2 size"
            style={{ height: "40px" }}
          />
          <span className="custom-text d-none d-sm-inline">
            Unique Design Consultant
          </span>
          {/* <span className="custom-text d-inline d-sm-none">Unique Design Cons</span> */}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {[
              { to: "/", label: "Home" },
              { to: "/bitrix24crm", label: "Bitrix24 CRM" },
              { to: "/pricing", label: "Pricing" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <Link
                  to={to}
                  className={`nav-link px-3 ${currentPath === to ? "active" : ""}`}
                  onClick={handleNavClick}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex mt-3 mt-lg-0 ms-lg-3">
             <a href="https://www.bitrix24.net/authorization/?client_id=site.5602b8e8a41202.94213120&_ga=GA1.1.1642785908.1755578423" target="_blank">
             <button className="btn btn-primary w-100">
             Get Started
            </button>
             </a>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
