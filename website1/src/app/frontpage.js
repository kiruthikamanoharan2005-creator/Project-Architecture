import React, { useState } from "react";
import "./frontpage.css";
import Contact from "./Contact/contact";
import modern1 from "../assets/modern1.jpg";
import traditional from "../assets/traditional.jpg";
import cafenew from "../assets/cafenew.jpg";
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
  { id: 5, title: "Café Design", src: cafenew, style: "cafe" },
  { id: 6, title: "Restaurant Design", src: restaurant, style: "restaurant" },
];

export const architecturalPaths = [
  { name: "Modern House", img: modern1, link: "/modern" },
  { name: "Traditional House", img: traditional, link: "/tradition" },
  { name: "Cafés", img: cafenew, link: "/cafes" },
  // { name: "Restaurants", img: restaurant, link: "/restaurants" },
  // { name: "Office Buildings", img: office, link: "/offices" },
  // { name: "Apartments", img: apartment, link: "/apartments" },
];

function FrontPage() {
  const navigate = useNavigate();
  const [selectedStyle, setSelectedStyle] = useState("all");
const [showPopup, setShowPopup] = useState(false);

const openPopup = () => setShowPopup(true);
const closePopup = () => setShowPopup(false);

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


      {/* Architectural Viewing Software Section */}
  {/* Architectural Viewing Software Section */}
      <section className="software-section">
        <h2>Architectural Viewing Software</h2>

        <p className="software-desc">
          Explore advanced architectural visualization tools that help you view your
          dream house from every angle. Choose the package that fits your needs.
        </p>

        <div className="software-grid">

          <div className="software-card">
            <h3>Front View</h3>
            <p>Single elevation view with clean detailing.</p>
            <span className="price">₹1,000</span>
          </div>

          <div className="software-card">
            <h3>2 Side View</h3>
            <p>Front + one side elevation for better clarity.</p>
            <span className="price">₹1,500</span>
          </div>

          <div className="software-card">
            <h3>4 Side View</h3>
            <p>Complete four-direction elevation package.</p>
            <span className="price">₹3,000</span>
          </div>

          <div className="software-card">
            <h3>360° View</h3>
            <p>Fully rotatable model showing all angles.</p>
            <span className="price">₹7,500</span>
          </div>

          <div className="software-card">
            <h3>Running View</h3>
            <p>Animated walk-through or fly-through view.</p>
            <span className="price">₹10,000</span>
          </div>

          <div className="software-card">
            <h3>Realistic View</h3>
            <p>High-quality real-life render with textures.</p>
            <span className="price">₹13,000</span>
          </div>

        </div>

        <button className="software-btn" onClick={openPopup}>
          View Demo Models
        </button>
      </section>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/d5xUdZbszC0"
              title="YouTube demo video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <button className="close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}




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
      {/* <Contact /> */}


      {/* Gallery */}
      {/* <section className="gallery-section redesigned-gallery">
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
      </section> */}

      {/* Footer */}
      <footer className="footer redesigned-footer">
        <Footer />

        <p>© 2025 Creative Earth. Crafted with style.</p>
      </footer>

    </div>
  );
}

export default FrontPage;
