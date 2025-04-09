import React from "react";

export default function ChoosePlace() {
  const kartlar = [
    {
      img: "/img/wp-gorsel.jpg",
      label: "Paket1",
      title: "Fethiye Aktivite Tatil Paketi",
      link: "/anasayfa1"
    }
  ];

  return (
    <section id="choose-place">
      <div className="container">
        <div className="choose-title">
          <span className="section-tag">Yaz Aktivite Tatil Programları</span>
          <h2 className="headings">
            Yaz Aktivite Tatil & Eğitim <span>Paketleri</span>
          </h2>
          <p className="lead">
            <strong>Fethiye</strong> ve <strong>Marmaris</strong>’te sosyallik ve eğlence dolu, <strong>aktivite tatil paketleri</strong> ve <strong>doğa sporları eğitim tatili</strong> paketleri seçenekleriyle, <strong>Doğadayız Doğa Sporları</strong> sizleri <strong>ekstrem dolu</strong>, unutulmaz bir yaz tatili yaşamaya davet ediyor!
          </p>
        </div>

        <div className="row-wise-img">
          {kartlar.map((item, i) => (
            <div className="paket-karti" key={i}>
              <div className="paket-img">
                <img src={item.img} alt={item.label} />
              </div>

              <div className="paket-icerik">
                <span className="price-label">{item.label}</span>
                <h3 className="card-title">{item.title}</h3>
                <p>
                  Fethiye’de doğayla iç içe, heyecan dolu bir tatil sizi bekliyor. Rafting, kamp,
                  yamaç paraşütü gibi aktivitelerle unutulmaz anılar biriktirin.
                </p>
                <a href={item.link} className="card-button">Detaylı Bilgi İçin Tıklayınız</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
