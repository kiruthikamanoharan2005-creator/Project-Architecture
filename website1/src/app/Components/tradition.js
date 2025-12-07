import React, { useState } from "react";
import "./tradition.css";

import tExterior from "../../assets/indian-exterior1.jpg";
import tLiving from "../../assets/t-living.jpg";
import tKitchen from "../../assets/t-kitchen.png";
import tBedroom from "../../assets/t-bedroom2.jpg";
import tBackyard from "../../assets/t-backyard.jpg";

import Header from "../Header/header";

export default function TraditionalHousePage() {
  const [selectedStyle, setSelectedStyle] = useState("traditional");

  const sections = [
    {
      title: "Exterior",
      img: tExterior,
      bg: "#fff7ec",
      content:
        "The traditional house exterior features natural materials, wooden beams, stone pathways, and a warm, inviting atmosphere.",
      points: [
        "Front porch with wooden pillars",
        "Sloped tiled roof",
        "Carved wooden windows",
        "Stone walkway and garden area",
      ],
    },
    {
      title: "Living Room",
      img: tLiving,
      bg: "#f0f7ff",
      content:
        "A cozy, warm interior with wooden floors, earth-toned furniture, and handcrafted decorations.",
      points: [
        "Traditional sofas and wooden center table",
        "Handwoven rugs",
        "Clay or brass décor pieces",
        "Large windows for natural light",
      ],
    },
    {
      title: "Kitchen",
      img: tKitchen,
      bg: "#fff0f5",
      content: "A mix of modern functionality with a traditional aesthetic.",
      points: [
        "Wooden cabinets and open shelves",
        "Clay pots and copper utensils",
        "Stone or brick stove area",
      ],
    },
    {
      title: "Bedroom",
      img: tBedroom,
      bg: "#f2fff2",
      content: "A peaceful sleeping space with handcrafted furniture.",
      points: [
        "Wooden bedframe with carved detailing",
        "Soft warm lighting",
        "Handmade quilts and curtains",
        "Decorative wooden wardrobe",
      ],
    },
    {
      title: "Backyard",
      img: tBackyard,
      bg: "#f3f0ff",
      content: "Designed for relaxation with natural elements.",
      points: [
        "Small garden with flowers and herbs",
        "Wooden bench or swing",
        "Stone flooring and water pots",
      ],
    },
  ];

  return (
    <div className="page-container">

      {/* FIXED HEADER */}
      <Header setSelectedStyle={setSelectedStyle} />

      {/* PAGE TITLE */}
      <div className="top-title">
        <h1>Traditional House</h1>
        <p>A complete walkthrough of exterior, interior, and living spaces.</p>
      </div>

      {/* FULL-WIDTH SECTIONS */}
      {sections.map((sec, index) => (
        <section
          key={index}
          className={`full-section ${index % 2 === 0 ? "normal" : "reverse"}`}
          style={{ backgroundColor: sec.bg }}
        >
          <img src={sec.img} alt={sec.title} />

          <div className="content">
            <h2>{sec.title}</h2>
            <p>{sec.content}</p>

            <ul>
              {sec.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}
