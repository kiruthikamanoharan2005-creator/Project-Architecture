import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="navbar fixed-header">
      <div className="brand">
  <img src={logo} alt="Creative Earth Architect Logo" className="logo" />
  <span>Creative Earth Architect</span>
</div>


      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>

        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        
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


        <Link to="/projects" onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
      </nav>
    </header>
  );
}

export default Header;
