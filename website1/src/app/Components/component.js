
import React from "react";
import "./restaurant.css";
import heroImg from "../assets/restaurant-hero.jpg";
import aboutImg from "../assets/restaurant-about.jpg";
import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";
import dish4 from "../assets/dish4.jpg";

export default function Restaurant() {
  return (
    <div className="restaurant-page">

      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <img src={heroImg} alt="Restaurant" className="hero-bg" />
        <div className="hero-content">
          <h1>Welcome to Aroma Bites</h1>
          <p>Where taste meets elegance</p>
          <button className="hero-btn">Explore Menu</button>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="about">
        <div className="about-left">
          <h2>About Us</h2>
          <p>
            At Aroma Bites, we bring you fresh flavors crafted with passion.
            Experience a blend of traditional and modern cuisine prepared with
            premium ingredients.
          </p>
          <button className="learn-btn">Learn More</button>
        </div>

        <div className="about-right">
          <img src={aboutImg} alt="about" />
        </div>
      </section>

      {/* ===== MENU SECTION ===== */}
      <section className="menu">
        <h2>Our Special Dishes</h2>

        <div className="menu-grid">
          <div className="dish-card">
            <img src={dish1} alt="" />
            <h3>Spicy Grilled Chicken</h3>
            <p>₹420</p>
          </div>

          <div className="dish-card">
            <img src={dish2} alt="" />
            <h3>Classic Paneer Tikka</h3>
            <p>₹360</p>
          </div>

          <div className="dish-card">
            <img src={dish3} alt="" />
            <h3>Seafood Platter</h3>
            <p>₹550</p>
          </div>

          <div className="dish-card">
            <img src={dish4} alt="" />
            <h3>Italian Cream Pasta</h3>
            <p>₹480</p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>📍 Chennai, India</p>
        <p>📞 +91 98765 43210</p>
        <p>⏳ Open: 10AM – 11PM</p>

        <button className="reserve-btn">Reserve a Table</button>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>© 2025 Aroma Bites. Designed with ❤️</p>
      </footer>
    </div>
  );
}
