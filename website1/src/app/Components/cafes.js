import React, { useState } from "react";
import "./cafes.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import cplan1 from "../../assets/c-plan1.jpg";
import cplan2 from "../../assets/c-plan2.jpg";
import cplan3 from "../../assets/c-plan3.jpg";

export default function Cafe() {
  const [selectedImage, setSelectedImage] = useState(null);

  const designs = [
    {
      title: "Cozy Cafe Plan",
      desc: "Warm lighting and wooden interiors for a relaxing feel.",
      img: "https://storage.planner5d.com/s/28197a9a19eee3dd842a25ecfa4fb625_1.webp?v=1685962112",
    },
    {
      title: "Modern Cafe Plan",
      desc: "A sleek modern layout for premium urban customers.",
      img: cplan2,
    },
    {
      title: "Luxury Cafe Plan",
      desc: "Luxury seating, wide spacing, and elegant décor.",
      img: cplan3,
    },
  ];

  return (
    <>
      <div className="cafe-wrapper">
        <Header />
        <h1 className="cafe-heading">Cafe Designs</h1>

        <div className="cafe-cards">
          {designs.map((item, index) => (
            <div key={index} className="cafe-card">
              <img src={item.img} alt={item.title} className="cafe-img" />

              <h2>{item.title}</h2>
              <p>{item.desc}</p>

              <button
                className="view-btn"
                onClick={() => setSelectedImage(item.img)}
              >
                View Plan
              </button>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedImage && (
          <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Plan" className="modal-img" />
              <button className="close-btn" onClick={() => setSelectedImage(null)}>
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />

    </>
  );
}
