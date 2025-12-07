import React, { useState } from "react";
import "./header.css";

function Header({ setSelectedStyle }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar fixed-header">
      <div className="brand">CREATIVE EARTH</div>

      {/* Hamburger Icon (Mobile Only) */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV MENU */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <button onClick={() => setSelectedStyle("all")}>All</button>
        <button onClick={() => setSelectedStyle("modern")}>Modern</button>
        <button onClick={() => setSelectedStyle("traditional")}>Traditional</button>
        <button onClick={() => setSelectedStyle("cafe")}>Cafés</button>
        <button onClick={() => setSelectedStyle("restaurant")}>Restaurants</button>
        <button onClick={() => setSelectedStyle("office")}>Offices</button>
        <button onClick={() => setSelectedStyle("apartment")}>Apartments</button>
      </nav>
    </header>
  );
}

export default Header;
