import React from "react";
import StaticCounter from "../components/StaticCounter";

export default function Anasayfa1() {
  return (
    <>
      {/* Sayaç Navbar altında */}
      <div style={{ background: "#f8f8f8", padding: "3rem 0" }}>
        {/*<StaticCounter />*/}
      </div>

      <section className="container" style={{ padding: "5rem 0 3rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {/* Sol - Görsel */}
          <div style={{ maxWidth: "500px", justifySelf: "center", alignSelf: "center" }}>
            <img
              src="/img/Whatsapp Görsel 2025-04-03 saat 14.38.56_4d032fd9.jpg"
              alt="Anasayfa1"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </div>

          {/* Sağ - İçerik */}
          <div>
            <h2 className="headings" style={{ marginBottom: "1rem" }}>
              Fethiye Aktivite Tatil Paketi
            </h2>

            <p className="lead" style={{ marginBottom: "2rem" }}>
              Fethiye'de doğayla iç içe, heyecan dolu bir tatil sizi bekliyor. Rafting, kamp, yamaç paraşütü gibi pek çok aktiviteyle dolu unutulmaz bir deneyim için hazır olun!
            </p>

            <h4 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
              Detaylı Bilgi İçin İletişim:
            </h4>

            <a
              href="https://wa.me/905449874563"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#25D366",
                color: "white",
                padding: "0.6rem 1.2rem",
                borderRadius: "6px",
                fontWeight: "500",
                textDecoration: "none",
                marginTop: "0.5rem",
              }}
            >
              WhatsApp ile Bağlan
            </a>
          </div>
        </div>
      </section>
    </>
  );
}