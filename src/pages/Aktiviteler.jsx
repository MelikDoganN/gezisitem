import React from "react";

export default function Aktiviteler() {
  const aktiviteler = [
    {
      title: "Rafting Turları",
      description:
        "Adrenalin dolu rafting turları ile Türkiye'nin en hızlı nehirlerinde heyecanı yaşayın.",
      image: "/img/Rafting.jpg",
    },
    {
      title: "Doğa Yürüyüşleri",
      description:
        "Doğayla iç içe, huzur dolu yürüyüş parkurlarında kendinizi keşfedin.",
      image: "/img/doga-turlari.jpg",
    },
    {
      title: "Paraşütle Atlama",
      description:
        "Gökyüzünden yeryüzüne eşsiz bir bakış! Profesyonel paraşüt deneyimi.",
      image: "/img/parasüt.jpg",
    },
    {
      title: "Kampçılık",
      description:
        "Yıldızların altında huzurlu bir gece geçirin. Kamp deneyimi sizi bekliyor.",
      image: "/img/kampcılık.jpg",
    },
  ];

  return (
    <section className="container" style={{ marginTop: "120px" }}>
      <h1 className="headings">Aktiviteler</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {aktiviteler.map((item, index) => (
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
            <img src={item.image} alt={item.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "1rem" }}>
              <h3>{item.title}</h3>
              <p className="lead" style={{ fontSize: "1rem" }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
