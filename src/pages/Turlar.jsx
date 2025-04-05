import React from "react";

export default function Turlar() {
  const turlar = [
    {
      title: "Günübirlik Turlar",
      description:
        "Şehirden kaçmak isteyenler için günübirlik doğa, kültür ve macera turları.",
      image: "/img/gunubirlik.jpg",
    },
    {
      title: "2-4 Günlük Turlar",
      description:
        "Hafta sonu kaçamağı yapmak isteyenlere özel kısa tatil paketleri.",
      image: "/img/kisakacamak.jpg",
    },
    {
      title: "5-7 Günlük Turlar",
      description:
        "Türkiye'nin ve dünyanın en popüler rotalarını keşfetmek için ideal.",
      image: "/img/haftalik.jpg",
    },
    {
      title: "7+ Günlük Uzun Turlar",
      description:
        "Uzun tatiller, kültür turları ve keşif yolculukları için ideal fırsatlar.",
      image: "/img/uzuntatil.jpg",
    },
  ];

  return (
    <section className="container" style={{ marginTop: "120px" }}>
      <h1 className="headings">Turlar</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {turlar.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3>{item.title}</h3>
              <p className="lead" style={{ fontSize: "1rem" }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
