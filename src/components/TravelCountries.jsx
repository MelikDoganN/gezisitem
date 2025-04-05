import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function TravelCountries() {
  const kartlar = [
    { img: "/img/Rafting.jpg", label: "Rafting" },
    { img: "/img/doga-turlari.jpg", label: "Doğa Turu" },
    { img: "/img/parasüt.jpg", label: "Paraşüt" },
    { img: "/img/kampcılık.jpg", label: "Kamp" },
  ];

  return (
    <section id="travel-countries">
      <div className="container">
        <div className="slider-header">
          <span
            className="heading-normal-txt"
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "0.2rem 0.6rem",
              borderRadius: "6px",
              display: "inline-block",
              fontWeight: "500"
            }}
          >
            2025 Günübirlik Aktiviteler
          </span>
          <h2 className="headings">
            Mersin <span>Günübirlik Aktiviteler</span>
          </h2>
          <p className="lead">
            Fethiye’nin eşsiz doğasında en sevilen günübirlik aktiviteleri keşfedin. Jeep safari, atv turları, rafting, tüplü dalış ve daha fazlası.
          </p>
        </div>

        <Swiper
          className="swiper3"
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          autoplay={{ delay: 3000 }}
          spaceBetween={24}
          centeredSlides={false}
          slidesPerView={3}
          style={{
            // ✅ Yön tuşlarını ortalamak için
            "--swiper-navigation-top-offset": "50%",
            "--swiper-navigation-size": "32px"
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {kartlar.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="slide-card"
                style={{
                  width: "100%",
                  maxWidth: "360px",
                  background: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                  height: "auto"
                }}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  style={{
                    width: "100%",
                    height: "450px",
                    objectFit: "cover"
                  }}
                />
                <div
                  className="price-label"
                  style={{
                    padding: "0.75rem",
                    fontSize: "1rem",
                    fontWeight: "600",
                    textAlign: "center"
                  }}
                >
                  {item.label}
                </div>
                <div style={{ textAlign: "center", paddingBottom: "1rem" }}>
                  <button
                    style={{
                      padding: "0.5rem 1rem",
                      backgroundColor: "#2095ae",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.9rem"
                    }}
                  >
                    İncele
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
