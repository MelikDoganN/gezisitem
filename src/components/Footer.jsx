import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-wraper">
          {/* Sol - Logo ve açıklama */}
          <div className="footer-col">
            <img src="/img/logo.png" alt="logo" className="footer-logo" />
            <p>
              Gezisitem, doğa ve keşif tutkunlarına özel deneyimlerle
              zenginleşmiş bir turizm platformudur.
            </p>
          </div>

          {/* Orta - Menü */}
          <div className="footer-col">
            <h3>Hızlı Erişim</h3>
            <a href="#">Aktiviteler</a>
            <a href="#">Turlar</a>
            <a href="#">Kampanyalar</a>
            <a href="#">İletişim</a>
          </div>

          {/* Sağ - İletişim */}
          <div className="footer-col">
            <h3>İletişim</h3>
            <p>📞 +90 544 987 45 63</p>
            <p>📧 info@gezisitem.com</p>
            <p>📍 Mersin, Türkiye</p>
          </div>
        </div>

        {/* Sosyal Medya */}
        <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>

        {/* Alt Kısım */}
        <div className="footer-bottom">
          © 2025 Gezisitem. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
