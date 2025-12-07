import React, { useState } from "react";
import "./explore.css";
import Header from "../Header/header";

const imageSources = {
  modern: [
    "https://images.unsplash.com/photo-1745761320791-5ae142edee8c",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    "https://images.unsplash.com/photo-1643297551340-19d8ad4f20ad",
    "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5",
    "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1",
    "https://s3-blog.homelane.com/design-ideas/wp-content/uploads/2025/11/04022619/contemporary-simple-house-design-elegant-wooden-concrete-detailing.png",
    "https://pinoyhousedesigns.com/wp-content/uploads/2020/11/IM-02-23.jpg",
    "https://imagecdn.99acres.com//microsite/wp-content/blogs.dir/6161/files/2024/08/architectural-styles_modern-minimalism-pic-1_pinterest_Youtube.jpg",
    "https://i.ytimg.com/vi/IiZkWRmGlFs/maxresdefault.jpg",
    "https://i.pinimg.com/736x/a9/0e/8c/a90e8c3bc16de9da2545094ad6ff9b08.jpg"
  ],

  traditional: [
    "https://st.hzcdn.com/simgs/5971ecdd0b4f3bda_14-4834/_.jpg",
    "https://www.homepictures.in/wp-content/uploads/2021/04/2156-Sq-Ft-4BHK-Traditional-Style-Two-Storey-House-and-Free-Plan-2.jpg",
    "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.monnaie.in/wp-content/uploads/2018/01/kerala-traditional-home-design.jpg",
    "https://cdn.shopify.com/s/files/1/0518/2557/4043/files/ongriddesign_vernecular_kerala_design_2_480x480.jpg?v=1727431191",
    "https://assets-news.housing.com/news/wp-content/uploads/2021/11/17123335/Kerala-house-design-Different-types-of-traditional-houses-in-Kerala-Entrance.jpg",
    "https://thearchitectsdiary.com/wp-content/uploads/2024/11/kerala-traditional-house-6.jpg",
    "https://api.makemyhouse.com/public/Media/rimage/500/completed-project/1720689538_347.jpg?watermark=false",
    "https://api.makemyhouse.com/public/Media/rimage/500/completed-project/1718348441_187.jpg?watermark=false",
    "https://assets-news.housing.com/news/wp-content/uploads/2021/11/25212250/Traditional-houses-in-Kerala-modern.jpg",
    "https://st.hzcdn.com/simgs/5971ecdd0b4f3bda_14-4834/_.jpg"
  ],

  terrace: [
    "https://thearchitectsdiary.com/wp-content/uploads/2021/09/AG7_5301-2-1024x696.jpg",
    "https://st.hzcdn.com/simgs/2af17de90915b056_14-7946/_.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2025/6/523089560/AW/SQ/ON/93952476/residential-terrace-garden-designing-service-500x500.jpg0",
    "https://i.pinimg.com/236x/3f/d4/37/3fd437d9e22a265fdf3e1ba808bf6f13.jpgc",
    "https://apicms.thestar.com.my/uploads/images/2024/09/03/2893944.webp",
    "https://www.wedezinestudio.com/blogs/wp-content/uploads/2025/06/terrace-interior-design222-scaled.webp",
    "https://materialdepot-images-hbh2cjbvbtfmanhx.z02.azurefd.net/application_image/modern-rooftop-terrace-with-geometric-tiles-and-pergola-8192949399.png?width=600",
    "https://i.pinimg.com/564x/cc/40/99/cc40990742ee3fa49a167bf396586fe5.jpg",
    "https://www.conarch.co/wp-content/uploads/2017/05/IMG_2147-e1494520812177.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJHG9qBjkwbJazy_VWSzJ-C3iumNhStiV_XFQtwyENbpjYIQjKAeZ1piqo1mkgwgX2cY&usqp=CAUc"
  ],

  interior: [
    "https://st.hzcdn.com/simgs/69d1da940b4f3bed_14-6004/_.jpg",
    "https://www.arkitecturestudio.com/public/uploads/pro_images/mysuru-architect-337.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc1r-SK0YXKXaNQWYeE6RK7n2RcsNNvz1RPtBeH5o3wjPQYbIwYwQ5WMMj8JxO3fqyTJM&usqp=CAU",
    "https://aamazehomes.com/images/int/48.jpg",
    "https://www.makemyhouse.com/assets/sub-pages/img/vastu-interior/003.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyK3Qq0XvR-eZqsPHCSMvg-VGmdXPQwiOyw&s",
    "https://www.caldwellcline.com/wp-content/uploads/2020/09/017-1080x675.jpg",
    "https://ik.imagekit.io/saubldfer/hamstech-blog/wp-content/uploads/2021/09/Top-Interior-Design-Trends-to-Design-Your-Dream-Home.jpg",
    "https://sharkeycustomhomes.com/sites/default/files/oxford-parade-of-homes--_DSC03979_80_81_0.jpg",
    "https://images.unsplash.com/photo-1616627562862-0a4ddc881c34"
  ],

  exterior: [
    "https://i.pinimg.com/736x/14/df/b9/14dfb9ac887f1e75de28ce49cb4ffdf3.jpg",
    "https://i.pinimg.com/736x/08/30/fc/0830fc851335782f706cdefd0c28ac00.jpg",
    "https://i.ytimg.com/vi/cki9Cq9sDTs/maxresdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmdFLIGGD_YahBVUZPxpQ3X9DQKobLes94PczINjcBZxW8-ggsVfB_8W6jHq4a37n9d64&usqp=CAU",
    "https://claritechinfo.in/wp-content/uploads/2025/09/4-Bhk-Kerala-House-Design-4.webp",
    "https://i.pinimg.com/564x/44/91/14/449114197776bf7527c81d51e06a0c89.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZLyLUaZD0p6XEg7X-DZYDA60ETLXQUy9Bw&s",
    "https://thearchitectsdiary.com/wp-content/uploads/2024/11/kerala-traditional-house-2-1.jpg",
    "https://api.makemyhouse.com/public/Media/rimage/500/completed-project/1719577297_465.jpg?watermark=false",
    "https://i.pinimg.com/736x/a9/0e/8c/a90e8c3bc16de9da2545094ad6ff9b08.jpg"
  ],

  door: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmReu4L-0sTIFufzCmvevLGmmxjuNOvcXL_3GWc4YdOYVVLLWD9hLyaqSTFi766y5rY4M&usqp=CAU",
    "https://in.zohocommercecdn.com/product-images/ae7623d4-a146-4f84-aa4f-3af0d7e9e013.jpg/1654361000001355031/600x600?storefront_domain=www.bharatdoornirman.com",
    "https://i.pinimg.com/236x/52/c5/e6/52c5e6daf244ee30a98489f541363a90.jpg",
    "https://img.staticmb.com/mbcontent/images/crop/uploads/2025/8/modern_wwoden_door_design_600_900.jpg.webp",
    "https://cms.interiorcompany.com/wp-content/uploads/2024/07/single-main-door-with-sleek-metallic-strips.webp",
    "https://image.made-in-china.com/365f3j00YlSqUANIEpok/Wholesale-Price-Modern-Main-Entrance-Single-Design-Exterior-Front-Entry-Flush-Wooden-Plywood-Door.webp",
    "https://alcoi.in/wp-content/uploads/2025/03/2.-Modern-Aluminium-Door-Design-.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0IsO-5rKGeVwg6U3H4Xi3i_D3B0YlN1aRJKfcCethT0LPTutpIgSAKfmxZJRDEintW0c&usqp=CAU",
    "https://thearchitectsdiary.com/wp-content/uploads/2025/04/door-design-2.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5MMiZ-u4d7Dbx52UhRiRvZgZ_cbtxJ6Wig9Ldm4uxyG6X3VgO2L9RQxniRzcfZklGlq0&usqp=CAU"
  ],

  roof: [
    "https://assets-news.housing.com/news/wp-content/uploads/2022/09/12000436/roof-designs-7.png",
    "https://i.pinimg.com/564x/af/b1/7d/afb17d68ff79e24b2f6e3ac45fda078a.jpg",
    "https://i.pinimg.com/736x/8b/06/dc/8b06dc710caa522c6feb2830fb578c56.jpg",
    "https://i.pinimg.com/736x/4b/73/30/4b733084b4702d5b03943c767086c51f.jpgf",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfRrgoZ4q0rqzBPXDoqh1OE8mLBvkZtgpkH5iAhz0cH1mTxVIGeNxq8Eg_JXr4vkxQShVivH8evrxmbGkY8JNVRjTcHFNJ4O6jQPoJZg3Oz8abHvb5qhdwG_qrf8vTLoWEFrqtKPsUT7py/s1600/40-lakh-house-exterior-elevation.jpg",
    "https://cpimg.tistatic.com/05692293/b/4/House-Roof-Sheet.jpg",
    "https://images.jdmagicbox.com/quickquotes/images_main/school-roofing-sheet-weather-resistant-2101552058-juzrhxgt.jpg",
    "https://orientalpeb.wordpress.com/wp-content/uploads/2020/10/metal-roofing-sheets.jpg",
    "https://www.westernstatesmetalroofing.com/hs-fs/hubfs/Laurens-Messy-Folder/close-up-detail-new-modern-house-top-with-shingled-green-roof.jpg?width=4500&name=close-up-detail-new-modern-house-top-with-shingled-green-roof.jpg",
    "https://www.ruukki.com/images/default-source/b2c-images/roofs/roofing-sheet-main.tmb-479v.jpg?sfvrsn=d30deb84_454"
  ]
};

const makeCategoryItems = (categoryKey, categoryLabel) =>
  imageSources[categoryKey].map((img, i) => {
    const sqft = 800 + i * 70;
    const priceLakhs = Math.round((12 + i * 2.5) * 10) / 10;

    return {
      id: `${categoryKey}-${i + 1}`,
      title: `${categoryLabel} ${i + 1}`,
      sqft: `${sqft} sq.ft`,
      price: `₹${priceLakhs} Lakhs`,
      img: `${img}?auto=format&fit=crop&w=900&q=70`
    };
  });

const data = {
  modern: makeCategoryItems("modern", "Modern House"),
  traditional: makeCategoryItems("traditional", "Traditional House"),
  interior: makeCategoryItems("interior", "Interior Design"),
  exterior: makeCategoryItems("exterior", "Exterior Design"),
  door: makeCategoryItems("door", "Door Model"),
  roof: makeCategoryItems("roof", "Roof Model"),
  terrace: makeCategoryItems("terrace", "Terrace Design")
};

export default function HouseFilterPage() {
  const categories = [
    { key: "modern", label: "Modern Houses" },
    { key: "traditional", label: "Traditional Houses" },
    { key: "interior", label: "Interior Designs" },
    { key: "exterior", label: "Exterior Designs" },
    { key: "door", label: "Door Models" },
    { key: "roof", label: "Roof Models" },
    { key: "terrace", label: "Terrace Designs" }
  ];

  const [selectedCategories, setSelectedCategories] = useState(["modern"]); // default modern

  const handleCheckbox = (key) => {
    setSelectedCategories([key]); // only one category at a time (mobile-friendly)
  };

  const filteredImages = selectedCategories.flatMap((cat) => data[cat]);

  return (
    <div className="page-wrapper">
      <Header />

      {/* ------- MOBILE CATEGORY BUTTONS ------- */}
      <div className="mobile-scroll-menu">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`scroll-btn ${
              selectedCategories.includes(cat.key) ? "active" : ""
            }`}
            onClick={() => handleCheckbox(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ------- LEFT SIDEBAR (DESKTOP) ------- */}
      <aside className="sidebar-column">
        <div className="sidebar-card">
          <h2>Filters</h2>

          <div className="checkbox-list">
            {categories.map((category) => (
              <label key={category.key} className="checkbox-row">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.key)}
                  onChange={() => handleCheckbox(category.key)}
                />
                <span>{category.label}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* ------- GALLERY ------- */}
      <main className="gallery-column">
        <header className="gallery-header">
          <h1>Design Gallery</h1>
        </header>

        <section className="grid">
          {filteredImages.map((item) => (
            <article key={item.id} className="card">
              <div className="image-wrap">
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
              <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.sqft}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
