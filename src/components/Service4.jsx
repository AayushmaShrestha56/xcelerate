import React, { useEffect, useState } from "react";

const BlueCard = ({ image, title, text }) => (
  <div
    style={{
      background: "white",
      borderRadius: "12px",
      padding: "20px",
      width: "260px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      textAlign: "center",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-8px)";
      e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
    }}
  >
    {image && (
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          borderRadius: "10px",
          marginBottom: "14px",
          height: "150px",
          objectFit: "cover",
        }}
      />
    )}
    <h3
      style={{
        margin: "10px 0 8px",
        fontSize: "1rem",
        fontWeight: "600",
        color: "#2c3e50",
      }}
    >
      {title}
    </h3>
    <p
      style={{
        fontSize: "0.85rem",
        lineHeight: "1.5",
        color: "#555",
      }}
    >
      {text}
    </p>
  </div>
);

const Service4 = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        background: "#2c3e50",
        padding: "80px 20px",
        textAlign: "center",
        color: "white",
        transition: "all 0.6s ease",
      }}
    >
      {/* Title */}
      <h2
        style={{
          marginBottom: "40px",
          fontSize: "1.5rem",
          fontWeight: "700",
          letterSpacing: "0.5px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
        }}
      >
        LOOKING FOR INSPIRATION FOR YOUR NEXT MATCH ACTIVATION IDEA?
      </h2>

      {/* Cards Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(60px)",
          transition: "opacity 1.5s ease, transform 1.5s ease",
        }}
      >
        <BlueCard
          image="/en.png"
          title="Enhance Player and Team Performance"
          text="Provide in-depth analysis and feedback to improve individual and team efficiency during matches and training."
        />
        <BlueCard
          image="/en1.jpeg"
          title="Enable Data-Driven Decision Making"
          text="Support coaches and analysts with real-time statistics and predictive insights to guide tactical and strategic choices."
        />
        <BlueCard
          image="/en3.jpeg"
          title="Personalize Training and Minimize Injuries"
          text="Recommend tailored training routines and monitor physical metrics to reduce injury risk and optimize fitness."
        />
      </div>
    </section>
  );
};

export default Service4;
