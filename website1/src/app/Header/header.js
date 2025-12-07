import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="navbar fixed-header">
      {/* BRAND LOGO + TITLE */}
      <div className="brand">
        <FaHome className="home-icon" />
        <span>Creative Earth Architect</span>
      </div>

      {/* HAMBURGER (Mobile) */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAVIGATION MENU */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>

        {/* Home */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        {/* Contact */}
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        {/* Categories with Dropdown */}
        {/* Categories with Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          style={{ position: "relative" }}
        >
          <span className="dropdown-title">Categories</span>

          <div
            className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              background: "white",
              border: "1px solid #ccc",
              padding: "10px",
              display: dropdownOpen ? "block" : "none",
              zIndex: 100,
            }}
          >
            <Link to="/modern" onClick={() => setMenuOpen(false)}>
              Modern
            </Link>

            <Link to="/tradition" onClick={() => setMenuOpen(false)}>
              TraditionalHouseSite
            </Link>
          </div>
        </div>


        {/* Projects */}
        <Link to="/projects" onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
      </nav>
    </header>
  );
}

export default Header;
