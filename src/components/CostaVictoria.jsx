import React from "react";

export default function CostaVictoria() {
  return (
    <section id="costa-victoria" style={{ padding: 0, margin: 0 }}>
      <div className="video-bg" style={{ position: "relative" }}>
        <video
          autoPlay
          muted
          loop
          preload="auto"
          style={{
            width: "100vw",       // ✅ tam ekran genişlik
            height: "400px",      // ✅ istediğin yüksekliği burada kontrol edebilirsin
            objectFit: "cover",   // ✅ görseli kesmeden yerleştir
            display: "block"
          }}
        >
          <source
            src="/img/mixkit-sunny-beach-in-a-dynamic-shot-from-a-drone-44383-full-hd.mp4"
            type="video/mp4"
          />
          Tarayıcınız video öğesini desteklemiyor.
        </video>

        <div
          className="video-content"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            width: "100%",
          }}
        >
          <h2 style={{ fontSize: "2.5rem", letterSpacing: "2px" }}>
            MERSİN EXTREM
          </h2>
        </div>
      </div>
    </section>
  );
}
