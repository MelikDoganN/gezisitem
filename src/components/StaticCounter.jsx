import React from "react";
import arkaPlan from "../assets/arkaplan.jpg"; // Görseli import ediyoruz

export default function StaticCounter() {
  const style = {
    background: `url(${arkaPlan}) no-repeat center center/cover`,
    backgroundAttachment: "fixed",
    padding: "6rem 0",
    position: "relative",
    zIndex: 4,
    color: "white",
    textAlign: "center",
  };

  return (
    <section id="static-counter" style={style}>
      <div className="container">
        <h1 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "0.5rem" }}>
          Mersin Extrem
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Senin Dünyan Senin Turların
        </p>
      </div>
    </section>
  );
}
