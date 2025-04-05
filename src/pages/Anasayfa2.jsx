import React from "react";

export default function Anasayfa2() {
  return (
    <>
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
              alt="Anasayfa2"
              style={{ width: "100%", borderRadius: "12px" }}
            />
          </div>

          {/* Sağ - İçerik */}
          <div>
            <h2 className="headings" style={{ marginBottom: "1rem" }}>
              Anasayfa2
            </h2>

            <p className="lead" style={{ marginBottom: "2rem" }}>
              Anasayfa2 için içerik buraya eklenecek.
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