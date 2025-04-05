import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#f8f8f8",
        padding: "4rem 1rem 2rem",
        borderTop: "1px solid #eee",
        marginTop: "4rem",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
        }}
      >
        <div>
          <img src="/img/logo.png" alt="logo" style={{ width: "120px" }} />
          <p style={{ marginTop: "1rem", color: "#555", fontSize: "0.95rem" }}>
            Gezisitem, doğa ve keşif tutkunlarına özel deneyimler sunan bir turizm platformudur.
          </p>
        </div>

        <div>
          <h3 style={{ marginBottom: "1rem" }}>Hızlı Erişim</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/aktiviteler">Aktiviteler</Link></li>
            <li><Link to="/turlar">Turlar</Link></li>
            <li><Link to="/kampanyalar">Kampanyalar</Link></li>
            <li><Link to="/iletisim">İletişim</Link></li>
          </ul>
        </div>

        <div>
          <h3 style={{ marginBottom: "1rem" }}>İletişim</h3>
          <p>📞 +90 544 987 45 63</p>
          <p>📧 info@gezisitem.com</p>
          <p>📍 Mersin, Türkiye</p>
        </div>

        <div>
          <h3 style={{ marginBottom: "1rem" }}>Bizi Takip Edin</h3>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "2rem",
          textAlign: "center",
          fontSize: "0.85rem",
          color: "#888",
        }}
      >
        © {new Date().getFullYear()} Gezisitem. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
