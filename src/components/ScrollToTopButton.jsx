import React, { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          padding: "0.8rem 1.2rem",
          fontSize: "1.5rem",
          borderRadius: "50%",
          backgroundColor: "#2095ae",
          color: "#fff",
          border: "none",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          cursor: "pointer",
          zIndex: 9999,
        }}
        aria-label="Yukarı dön"
      >
        ↑
      </button>
    )
  );
}
