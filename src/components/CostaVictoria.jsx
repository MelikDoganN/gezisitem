import React from "react";

export default function CostaVictoria() {
  return (
    <section id="costa-victoria">
      <div className="video-bg">
        <video autoPlay muted loop preload="auto">
          <source src="/img/mixkit-sunny-beach-in-a-dynamic-shot-from-a-drone-44383-full-hd.mp4" type="video/mp4" />
          Tarayıcınız video öğesini desteklemiyor.
        </video>
      </div>

      <div className="container">
        <div className="video-content">
          <h2>Costa Victorial Cochin</h2>
          <span>
            <i className="fa fa-clock"></i> 10 Days{" "}
          </span>
          <span>
            <i className="fa fa-user"></i> 12+{" "}
          </span>
          <span>
            <i className="fa fa-location-dot"></i> Canada
          </span>
        </div>
      </div>
    </section>
  );
}
