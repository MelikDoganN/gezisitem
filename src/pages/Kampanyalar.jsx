import React from "react";

export default function Kampanyalar() {
  const kampanyalar = [
    {
      title: "Yaz Sezonu İndirimi",
      description:
        "Yaz boyunca seçili turlarda %25 indirim fırsatını kaçırmayın!",
      image: "/img/yazindirim.jpg",
    },
    {
      title: "Erken Rezervasyon",
      description:
        "Erken plan yapanlara özel ekstra indirimli fiyatlar sizi bekliyor.",
      image: "/img/erkenrez.jpg",
    },
    {
      title: "Arkadaşını Getir, Kazan",
      description:
        "Arkadaşını getir, her ikiniz de turlarda %10 ekstra indirim kazanın!",
      image: "/img/arkadasgetir.jpg",
    },
    {
      title: "Öğrenciye Özel Fiyatlar",
      description:
        "Öğrenciler için doğa ve keşif turlarında avantajlı fiyatlar!",
      image: "/img/ogrenci.jpg",
    },
  ];

  return (
    <section className="container" style={{ marginTop: "120px" }}>
      <h1 className="headings">Kampanyalar</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {kampanyalar.map((item, index) => (
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
