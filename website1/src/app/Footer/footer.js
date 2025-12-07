import React from "react";
import "./footer.css"; // Make sure this file exists

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <h2>Creative Earth Architecture Pvt Ltd</h2>
          <p>
            Plan & design hub and professional construction company for home,
            villa and office constructions.
          </p>
          <p>
            We are a dedicated team striving to bring growth to our community,
            helping to maintain existing companies and assisting our clients in
            making their dreams become a reality.
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3>Contact Us</h3>

          <div className="footer-item">
            <i className="fa-solid fa-building"></i>
            <p>
              Innovate Designers & Builders Pvt Ltd, Tc 93/1944, KRA 111A,
              Railway station road, Pallimuku, Pettah.P.O, Trivandrum,
              Kerala-695024
            </p>
          </div>

          <div className="footer-item">
            <i className="fa-solid fa-phone"></i>
            <p>9995 365 128, 9388 100 090</p>
          </div>

          <div className="footer-item">
            <i className="fa-solid fa-envelope"></i>
            <p>info@innovatebuilder.com</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
