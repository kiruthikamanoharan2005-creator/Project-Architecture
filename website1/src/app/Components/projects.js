import React from "react";
import "./projects.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";

export default function Projects() {
  // SAMPLE PROJECT DATA
  const projectImages = [
    {
      id: 1,
      src: "https://i.pinimg.com/236x/fa/31/28/fa3128e578e96f6011e46e20665d420b.jpg",
    },
    {
      id: 2,
      src: "https://thearchitectsdiary.com/wp-content/uploads/2025/02/south-indian-house-design-1.jpg",
    },
    {
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfMJfpx_1ZeKyXbOjg-KfboqB6s05IiS_tzA&s",
    },
    {
      id: 4,
      src: "https://ahouseinthehills.com/wp-content/uploads/2023/08/word-image-89878-5.png",
    },
    {
      id: 5,
      src: "https://assets-news.housing.com/news/wp-content/uploads/2022/02/07210007/south-indian-house-design-2.jpg",
    },
  ];

  return (
    <>
      <Header />

      {/* MAIN PROJECT SECTION */}
      <section className="gallery-section redesigned-gallery">
        <h2>Project Showcase</h2>

        <div className="gallery-grid">
          {projectImages.map((img) => (
            <div key={img.id} className="gallery-card">
              <img src={img.src} alt={img.title} />

              <div className="gallery-info">
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
