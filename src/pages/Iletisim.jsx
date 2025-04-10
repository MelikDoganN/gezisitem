import React from "react";

export default function Iletisim() {
  return (
    <div style={{ paddingTop: "80px" }}> {/* Navbar yüksekliğini telafi eder */}
      {/* 🟡 Başlık ve Breadcrumb Alanı */}
      <div
        style={{
          background: "#f5c518",
          padding: "2rem 1rem",
          color: "#fff",
          textAlign: "center",
          width: "100vw",
          margin: "0",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "700" }}>İletişim</h2>
        <p style={{ fontSize: "1rem", color: "#fff", marginTop: "0.5rem" }}>
          Anasayfa &gt; <span style={{ color: "#fff" }}>İletişim</span>
        </p>
      </div>

      {/* 📞 İletişim Bilgileri */}
      <div style={{ padding: "6rem 1rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: "bold" }}>Mersinextrem Aktivite Tatili</h2>
        <p style={{ fontSize: "1.1rem", color: "#666", marginBottom: "2rem" }}>
          “Türkiye’nin En Sosyal Aktivite Tatil Organizasyonu”
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Mail */}
          <div>
            <span style={{ fontSize: "2rem", color: "#28a745" }}>✉️</span>
            <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
              mersinextrem@gmail.com
            </p>
          </div>

          {/* Tel 1 */}
          <div>
            <span style={{ fontSize: "2rem", color: "#28a745" }}>📞</span>
            <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
              +90 544 336 85 99
            </p>
          </div>

          {/* Tel 2 */}
          <div>
            <span style={{ fontSize: "2rem", color: "#28a745" }}>📞</span>
            <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
              0 850 346 85 99
            </p>
          </div>
        </div>

        {/* Sosyal Medya */}
        <div style={{ fontSize: "1.5rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
          <i className="fab fa-facebook" />
          <i className="fab fa-instagram" />
          <i className="fab fa-twitter" />
          <i className="fab fa-youtube" />
          <i className="fab fa-pinterest" />
          <i className="fab fa-linkedin" />
        </div>
      </div>
    </div>
  );
}
