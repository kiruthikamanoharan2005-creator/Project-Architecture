import { useState, useEffect } from "react";
import "./frontpage.css";
import modern1 from "../assets/modern1.jpg";
import traditional from "../assets/traditional.jpg";
import cafenew from "../assets/cafenew.jpg";
import interior2 from "../assets/interior2.jpg";
import Header from "../app/Header/header";
import Footer from "./Footer/footer";

import { useNavigate } from "react-router-dom";

export const architecturalPaths = [
  { name: "Modern House", img: modern1, link: "/modern" },
  { name: "Traditional House", img: traditional, link: "/tradition" },
  { name: "Cafés", img: cafenew, link: "/cafes" },
];

function FrontPage() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);


  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .slide-up, .slide-down, .slide-left, .slide-right"
    );

    const revealOnScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="frontpage-container">
      <Header />

      <section className="hero redesigned-hero slide-up">
        <div className="hero-content">
          <h1>Designs That Speak Your Lifestyle</h1>
          <p>
            Discover modern, traditional, commercial, and residential architecture
            crafted with vision.
          </p>

          <button className="cta-button" onClick={() => navigate("/explore")}>
            Explore
          </button>
        </div>
      </section>

      <section className="architectural-paths redesigned-paths slide-right">
        <h2>Explore Categories</h2>
        <div className="paths-grid">
          {architecturalPaths.map((path, index) => (
            <div
              key={index}
              className="path-box"
              onClick={() => navigate(path.link)}
            >
              <img src={path.img} alt={path.name} />
              <h4>{path.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="history-section slide-left">
        <div className="history-content">
          <div className="history-text">
            <h2>Our History</h2>
            <p>
              <span style={{ fontWeight: "bold" }}>"Creative Earth Architect"</span> began as a small group of passionate architects dedicated
              to blending artistic vision with structural innovation.
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

      <section className="software-section slide-up">
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
            <span className="price">₹1,000</span>
          </div>

          <div className="software-card">
            <h3>4 Side View</h3>
            <p>Complete four-direction elevation package.</p>
            <span className="price">₹1,500</span>
          </div>

          <div className="software-card">
            <h3>360° View</h3>
            <p>Fully rotatable model showing all angles.</p>
            <span className="price">₹5,000</span>
          </div>

          <div className="software-card">
            <h3>Running View</h3>
            <p>Animated walk-through or fly-through view.</p>
            <span className="price">₹7,500</span>
          </div>

          <div className="software-card">
            <h3>Realistic View</h3>
            <p>High-quality real-life render with textures.</p>
            <span className="price">₹8,000</span>
          </div>
        </div>

        <button className="software-btn" onClick={openPopup}>
          View Demo Models
        </button>
      </section>

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

      <footer className="footer redesigned-footer slide-down">
        <Footer />
      </footer>
    </div>
  );
}

export default FrontPage;
