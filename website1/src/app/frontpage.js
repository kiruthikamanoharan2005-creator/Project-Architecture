import React, { useState } from "react";
import "./frontpage.css";
import Contact from "./Contact/contact";
import modern1 from "../assets/modern1.jpg";
import traditional from "../assets/traditional.jpg";
import cafe from "../assets/cafe.jpg";
import restaurant from "../assets/restaurant.jpg";
import office from "../assets/office.jpg";
import apartment from "../assets/apartment.jpg";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import interior2 from "../assets/interior2.jpg"; 
import Header from "../app/Header/header";
import Footer from "./Footer/footer";


import { useNavigate } from "react-router-dom";

const architectureImages = [
  { id: 1, title: "Modern House", src: house1, style: "modern" },
  { id: 2, title: "Traditional House", src: house2, style: "traditional" },
  { id: 3, title: "Apartment", src: apartment, style: "apartment" },
  { id: 4, title: "Office Building", src: office, style: "office" },
  { id: 5, title: "Café Design", src: cafe, style: "cafe" },
  { id: 6, title: "Restaurant Design", src: restaurant, style: "restaurant" },
];

export const architecturalPaths = [
  { name: "Modern House", img: modern1, link: "/modern" },
  { name: "Traditional House", img: traditional, link: "/tradition" },
  { name: "Cafés", img: cafe, link: "/cafes" },
  { name: "Restaurants", img: restaurant, link: "/restaurants" },
  { name: "Office Buildings", img: office, link: "/offices" },
  { name: "Apartments", img: apartment, link: "/apartments" },
];

function FrontPage() {
  const navigate = useNavigate();
  const [selectedStyle, setSelectedStyle] = useState("all");

  const filteredImages =
    selectedStyle === "all"
      ? architectureImages
      : architectureImages.filter((img) => img.style === selectedStyle);

  return (
    <div className="frontpage-container">
      {/* Navbar */}
   <Header setSelectedStyle={setSelectedStyle} />

      {/* Hero Section */}
     <section className="hero redesigned-hero">
  <div className="hero-content">
    <h1>Designs That Speak Your Lifestyle</h1>
    <p>
      Discover modern, traditional, commercial, and residential architecture
      crafted with vision.
    </p>

    <button
      className="cta-button"
      onClick={() => navigate("/explore")}
    >
      Explore
    </button>
  </div>
</section>


      {/* Category Section */}
      <section className="architectural-paths redesigned-paths">
        <h2>Explore Categories</h2>
        <div className="paths-grid">
          {architecturalPaths.map((path, index) => (
            <div key={index} className="path-box" onClick={() => navigate(path.link)}>
              <img src={path.img} alt={path.name} />
              <h4>{path.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Our History Section */}
      <section className="history-section">
        <div className="history-content">
          <div className="history-text">
            <h2>Our History</h2>
            <p>
              Creative Earth began as a small group of passionate architects dedicated
              to blending artistic vision with structural innovation. Over the years,
              we've expanded our offerings, working on residential, commercial, and
              concept-based projects that push design boundaries.
            </p>
            <p>
              Our mission has always remained the same: to create architecture that
              feels natural, purposeful, and timeless.
            </p>
            <p>
              With a team of skilled designers, engineers, and creative thinkers, we
              deliver exceptional experiences and iconic architectural projects.
            </p>
          </div>

          <div className="history-image">
            <img src={interior2} alt="Our Team" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you! Fill out the form below and our team will get
          back to you.
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section> */}
      <Contact />


      {/* Gallery */}
      <section className="gallery-section redesigned-gallery">
        <h2>Project Showcase</h2>
        <div className="gallery-grid">
          {filteredImages.map((img) => (
            <div key={img.id} className="gallery-card">
              <img src={img.src} alt={img.title} />
              <div className="gallery-info">
                <h3>{img.title}</h3>
                <p>Style: {img.style}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer redesigned-footer">
                      <Footer />

        <p>© 2025 Creative Earth. Crafted with style.</p>
      </footer>

    </div>
  );
}

export default FrontPage;
