import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CostaVictoria from "../components/CostaVictoria";

export default function Anasayfa1() {
  const konaklamaGorseller = ["konak1", "konak2"];
  const dalisGorseller = ["dalis1", "dalis2"];
  const parasutGorseller = ["parasut1", "parasut2"];
  const tekneGorseller = ["tekne1", "tekne2", "tekne3", "tekne4", "tekne5"];

  const afisListesi = ["Yemekler", "Aktiviteler", "Konaklama", "Transfer", "Fotoğraf Çekimi"];
  const konaklamaListesi = [
    "Deniz manzaralı otel odaları",
    "Açık büfe sabah–akşam yemekleri",
    "Spa, havuz ve oda servisi"
  ];
  const dalisListesi = [
    "Profesyonel eğitmenler",
    "Batık keşfi ve resifler",
    "Güvenli ekipman ve rehberlik"
  ];
  const parasutListesi = [
    "Pilot eşliğinde yamaç paraşütü",
    "Fotoğraf/video çekimi dahil",
    "Unutulmaz Ölüdeniz manzarası"
  ];
  const tekneListesi = [
    "Koy koy gezi ve yüzme molaları",
    "Müzik & eğlence",
    "Yemek & içecek servisi"
  ];

  const renderBolum = (baslik, icerikListesi, gorseller, isStaticImage = false) => (
    <div className="paket-karti">
      <div className="paket-img">
        {isStaticImage ? (
          <img
            src={`/img/${gorseller[0]}.jpg`}
            alt={baslik}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px"
            }}
          />
        ) : (
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={20}
            slidesPerView={1}
          >
            {gorseller.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={`/img/${img}.jpg`}
                  alt={`${baslik} ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px"
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className="paket-icerik">
        <h3 className="secondary-headings">{baslik}</h3>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
          {icerikListesi.map((item, i) => (
            <li key={i}>
              <span style={{ color: "#25D366", marginRight: "0.5rem" }}>✔</span>
              {item}
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/905449874563"
          target="_blank"
          rel="noopener noreferrer"
          className="card-button"
        >
          Detaylı Bilgi İçin Tıklayınız
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* 🔴 Kırmızı Başlık Alanı */}
      <div
        style={{
          background: "linear-gradient(to right, #ec1c24, #ea1c24)",
          padding: "2rem 1rem",
          color: "#fff",
          textAlign: "center",
          marginTop: "80px"
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>
          Fethiye Ekstrem Aktivite Tatil Paketi
        </h1>
        <p style={{ marginTop: "0.5rem", fontSize: "0.95rem", color: "#f8d7da" }}>
          <span style={{ color: "#fff" }}>Anasayfa</span> &gt;{" "}
          <span style={{ color: "#fff" }}>Fethiye Aktivite Tatilleri</span> &gt;{" "}
          <span style={{ color: "#fff", fontWeight: 500 }}>
            Fethiye Ekstrem Aktivite Tatil Paketi
          </span>
        </p>
      </div>

      {/* Ana İçerik */}
      <section style={{ padding: "4rem 2rem" }}>
        <div className="container">
          {renderBolum("Fethiye Aktivite Tatil Paketi", afisListesi, ["wp-gorsel"], true)}
          {renderBolum("Konaklama", konaklamaListesi, konaklamaGorseller)}
          {renderBolum("Dalış", dalisListesi, dalisGorseller)}
          {renderBolum("Yamaç Paraşütü", parasutListesi, parasutGorseller)}
          {renderBolum("Tekne Turu", tekneListesi, tekneGorseller)}

          
        </div>
      </section>
    </>
  );
}
