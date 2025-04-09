import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (isHome) {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 20);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsSticky(true);
    }
  }, [isHome]);

  return (
    <header className={isSticky ? "sticky" : ""}>
      <div className="container">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src="/img/logo.png" alt="logo" />
            </Link>
          </div>

          <ul className={menuOpen ? "display" : ""}>
            <div className="btn">
              <i className="fas fa-times close-btn" onClick={() => setMenuOpen(false)}></i>
            </div>
            <li><Link to="/anasayfa1" onClick={() => setMenuOpen(false)}>Aktiviteler</Link></li>

            <li><Link to="/hakkimizda" onClick={() => setMenuOpen(false)}>Hakkımızda</Link></li>
            <li><Link to="/iletisim" onClick={() => setMenuOpen(false)}>İletişim</Link></li>
          </ul>

          <div className="btn">
            <i className="fas fa-bars menu-btn" onClick={() => setMenuOpen(true)}></i>
          </div>
        </nav>
      </div>
    </header>
  );
}
