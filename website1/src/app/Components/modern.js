import React, { useState } from "react";
import "./modern.css";

import modernjs1 from "../../assets/modernjs1.jpg";
import house1 from "../../assets/house1.jpg";
import house2 from "../../assets/house2.jpg";
import flooring23 from "../../assets/flooring23.jpg";
import ceiling1 from "../../assets/ceiling1.jpg";

// Correct Header path (your structure shows this is correct)
import Header from "../Header/header";

export default function Modern() {
  const [selectedStyle, setSelectedStyle] = useState("modern");

  return (
    <div className="modern-wrapper">

      {/* FIXED HEADER */}
      <Header setSelectedStyle={setSelectedStyle} />

      {/* HERO BANNER */}
      <section className="hero-banner">
        <h1>Modern Architectural Excellence</h1>
        <p>
          Discover the beauty of minimalism, harmony, and futuristic design concepts.
        </p>
      </section>

      {/* INTRO ABOUT SECTION */}
      <div className="info-section">
        <div className="info-text">
          <h2>Modern House Vision</h2>
          <p>
            Modern architecture blends simplicity, functionality, and aesthetics into one seamless design philosophy. 
            It emphasizes clean lines, open spaces, natural light, and innovative materials that make each home feel 
            spacious, intelligent, and elegant. Whether it’s a smart home layout, eco-friendly structure, or luxury 
            contemporary living, modern architecture brings lifestyle and creativity together.
          </p>
        </div>

        <div className="info-image">
          <img src={house2} alt="Modern House Vision" />
        </div>
      </div>

      {/* DESIGNS TITLE */}
      <h2 className="section-title">Designs</h2>

      {/* ROW 1 — CONTENT LEFT / IMAGE RIGHT */}
      <div className="design-card">
        <div className="design-content">
          <h3>Exterior Concepts</h3>
          <p>
            Sharp edges, flat roofs, and elegant glass structures form the heart of 
            modern exterior design — creating bold, sophisticated homes.
          </p>
        </div>
        <img src={house1} alt="Modern Exterior Design" className="design-photo" />
      </div>

      {/* ROW 2 — CONTENT RIGHT / IMAGE LEFT */}
      <div className="design-card reverse">
        <img src={modernjs1} alt="Modern Interior" className="design-photo" />

        <div className="design-content">
          <h3>Interior Aesthetics</h3>
          <p>
            Interiors emphasize flow, space, and comfort. Neutral colors, soft lighting, 
            and functional elements create a balanced environment.
          </p>
        </div>
      </div>

      {/* ROW 3 — CONTENT LEFT / IMAGE RIGHT */}
      <div className="design-card">
        <div className="design-content">
          <h3>Flooring Patterns</h3>
          <p>
            Modern flooring uses marble textures, elegant tiles, or wood finishes 
            to bring visual depth and style into the home.
          </p>
        </div>
        <img src={flooring23} alt="Modern Flooring" className="design-photo" />
      </div>

      {/* ROW 4 — CONTENT RIGHT / IMAGE LEFT */}
      <div className="design-card reverse">
        <img src={ceiling1} alt="Modern Ceiling Design" className="design-photo" />

        <div className="design-content">
          <h3>Ceiling Designs</h3>
          <p>
            Layered ceilings with recessed lights enhance the ambience and create 
            a luxurious and modern atmosphere.
          </p>
        </div>
      </div>

    </div>
  );
}
