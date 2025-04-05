import React from "react";
import "../styles/style.css";
import "../styles/responsive.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";

import CostaVictoria from "../components/CostaVictoria";
import ChoosePlace from "../components/ChoosePlace";
import About from "../components/About";
import StaticCounter from "../components/StaticCounter";
import TravelCountries from "../components/TravelCountries";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      style={{ marginTop: "0px" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Slider */}
      <Swiper
        modules={[EffectCreative, Autoplay]}
        effect={"creative"}
        autoplay={{ delay: 5000 }}
        speed={400}
        spaceBetween={100}
        loop={true}
        creativeEffect={{
          prev: {
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        className="slide-container"
      >
        <SwiperSlide className="overlay">
          <img src="/img/giris-ekrani.png" alt="slide1" />
          <div className="img-overlay">
            <p>Hadi Birlikte Dünyayı Gezelim</p>
            <h2>
              <span>Keşfet</span> Dünyayı
            </h2>
            <h2>Benimle</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="overlay">
          <img src="/img/giris-ekrani2.png" alt="slide2" />
          <div className="img-overlay">
            <p>Doğayla İç İçe Bir Tatil</p>
            <h2>
              <span>Haydi</span> Başlayalım
            </h2>
            <h2>Şimdi</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="overlay">
          <img src="/img/giris-ekrani3.png" alt="slide3" />
          <div className="img-overlay">
            <p>Macera Başlıyor</p>
            <h2>
              <span>Yeni</span> Rotalar
            </h2>
            <h2>Seni Bekliyor</h2>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Diğer bölümler */}
      <ChoosePlace />
      
      
      <StaticCounter />
      
      {/*<CostaVictoria />*/}
      <TravelCountries />
      <About />
    </motion.main>
  );
}
