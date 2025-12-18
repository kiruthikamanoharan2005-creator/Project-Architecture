import React from "react";
import "./footer.css"; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2>Creative Earth Architect Pvt Ltd</h2>
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

        <div className="footer-right">
          <h3>Contact Us</h3>

          <div className="footer-item">
            <i className="fa-solid fa-building"></i>
            <p>
              New Bus Stand, Tirupur.
            </p>
          </div>

          <div className="footer-item">
            <i className="fa-solid fa-phone"></i>
            <p>7845409370</p>
          </div>

          <div className="footer-item">

            <div className="contact-row">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:creativecreative818@gmail.com">
                creativecreative818@gmail.com
              </a>
            </div>

            <div className="contact-row">
              <i className="fa-brands fa-instagram"></i>
              <a
                href="https://www.instagram.com/creativeearth87"
                target="_blank"
                rel="noopener noreferrer"
              >
                creativeearth87
              </a>
            </div>

          </div>

          {/* <div  className="footer redesigned-footer slide-down">
        <p>© 2025 Creative Earth. Rooted For Nature, Build For Future.</p>
</div> */}



        </div>
      </div>
    </footer>
  );
}
