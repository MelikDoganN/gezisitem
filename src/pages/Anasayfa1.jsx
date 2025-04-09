import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CostaVictoria from "../components/CostaVictoria"; // ✅ Costa eklendi

export default function Anasayfa1() {
  const konaklamaGorseller = ["konak1", "konak2"];
  const dalisGorseller = ["dalis1", "dalis2"];
  const parasutGorseller = ["parasut1", "parasut2"];
  const tekneGorseller = ["tekne1", "tekne2", "tekne3", "tekne4", "tekne5"];

  const renderBolum = (baslik, aciklama, gorseller, ters = false) => (
    <div
      className="paket-bolum"
      style={{ flexDirection: ters ? "row-reverse" : "row" }}
    >
      <div className="paket-galeri-swiper">
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
              <div
                style={{
                  width: "100%",
                  aspectRatio: "19 / 13",
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={`/img/${img}.jpg`}
                  alt={`${baslik} ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="paket-yazi">
        <h3 className="secondary-headings">{baslik}</h3>
        <p className="lead">{aciklama}</p>
        <a
          href="https://wa.me/905449874563"
          target="_blank"
          rel="noopener noreferrer"
          className="card-button"
        >
          WhatsApp ile Bağlan
        </a>
      </div>
    </div>
  );

  return (
    <section style={{ padding: "6rem 2rem 4rem" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-tag">Yaz Aktivite Tatil Programları</span>
          <h2 className="headings" style={{ textAlign: "center" }}>
            Fethiye Aktivite Tatil Paketi
          </h2>
          <h3
            className="secondary-headings"
            style={{ textAlign: "center", marginTop: "0.5rem" }}
          >
            Tatil Paketi İçeriği
          </h3>
        </div>

        {/* ✅ Paket Afiş Görseli Sağda Yazı */}
        <div
          className="paket-bolum"
          style={{ flexDirection: "row", marginBottom: "4rem" }}
        >
          <div className="paket-galeri-swiper">
            <img
              src="/img/wp-gorsel.jpg"
              alt="Paket Afiş"
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "10px",
                objectFit: "contain",
              }}
            />
          </div>

          <div className="paket-yazi">
            <h3 className="secondary-headings">Fethiye Aktivite Tatil Paketi</h3>
            <p className="lead">
              Fethiye’de doğayla iç içe, heyecan dolu bir tatil sizi bekliyor.
              Rafting, kamp, yamaç paraşütü gibi pek çok aktivitelerle
              unutulmaz anılar biriktirin.
            </p>
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

        {/* ✅ CostaVictoria Alt Kısımda */}
        <div style={{ marginBottom: "5rem" }}>
          <CostaVictoria />
        </div>

        {/* Diğer bölümler */}
        {renderBolum(
          "Konaklama",
          "Tatiliniz boyunca 4 yıldızlı bir otelde konforlu konaklama deneyimi sizi bekliyor.",
          konaklamaGorseller
        )}
        {renderBolum(
          "Dalış",
          "Profesyonel eğitmenler eşliğinde dalış, batık keşfi ve renkli deniz yaşamı sizi bekliyor.",
          dalisGorseller,
          true
        )}
        {renderBolum(
          "Yamaç Paraşütü",
          "Ölüdeniz’in eşsiz manzarasında gökyüzünde süzülmeye hazır mısınız?",
          parasutGorseller
        )}
        {renderBolum(
          "Tekne Turu",
          "Akdeniz’in koylarında yüzme molalarıyla rehber eşliğinde keyifli bir tekne turu deneyimi.",
          tekneGorseller,
          true
        )}
      </div>
    </section>
  );
}
