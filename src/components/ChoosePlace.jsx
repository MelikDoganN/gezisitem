import React from "react";
import { Link } from "react-router-dom";

export default function ChoosePlace() {
  const kartlar = [
    {
      img: "/img/wp-gorsel.jpg",
      label: "Paket1",
      title: "Fethiye Aktivite Tatil Paketi",
      link: "/anasayfa1",
      buton: "Anasayfa1"
    },
    {
      img: "/img/wp-gorsel.jpg",
      label: "Paket2",
      title: "Marmaris Ekstrem Paketi",
      link: "/anasayfa2",
      buton: "Anasayfa2"
    },
    {
      img: "/img/wp-gorsel.jpg",
      label: "Paket3",
      title: "Yamaç Paraşütü Tatil Paketi",
      link: "/anasayfa3",
      buton: "Anasayfa3"
    },
    {
      img: "/img/wp-gorsel.jpg",
      label: "Paket4",
      title: "Doğa Sporları Kamp Paketi",
      link: "/anasayfa4",
      buton: "Anasayfa4"
    },
    {
      img: "/img/wp-gorsel.jpg",
      label: "Paket5",
      title: "Mersin Aktivite Tatili",
      link: "/anasayfa5",
      buton: "Anasayfa5"
    },
    {
      img: "/img/wp-gorsel.jpg",
      label: "Paket6",
      title: "Ekstrem Yaz Kampı",
      link: "/anasayfa6",
      buton: "Anasayfa6"
    },
  ];

  return (
    <section id="choose-place">
      <div className="container">
        <div className="choose-title">
          <span className="section-tag" style={{ background: "red", color: "white", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>Yaz Aktivite Tatil Programları</span>
          <h2 className="headings">
            Yaz Aktivite Tatil & Eğitim <span>Paketleri</span>
          </h2>
          <p className="lead">
            <strong>Fethiye</strong> ve <strong>Marmaris</strong>’te sosyallik ve eğlence dolu, <strong>aktivite tatil paketleri</strong> ve <strong>doğa sporları eğitim tatili</strong> paketleri seçenekleriyle, <strong>Doğadayız Doğa Sporları</strong> sizleri <strong>ekstrem dolu</strong>, unutulmaz bir yaz tatili yaşamaya davet ediyor!
          </p>
        </div>

        <div className="row-wise-img">
          {kartlar.map((item, i) => (
            <Link to={item.link} className="lg-img" key={i} style={{ textDecoration: "none", color: "inherit" }}>
              <img src={item.img} alt={item.label} />
              <div className="price-label">
                <p>{item.label}</p>
              </div>
              <h4 className="card-title">{item.title}</h4>
              <span className="card-button">{item.buton}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
