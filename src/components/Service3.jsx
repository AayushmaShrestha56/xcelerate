import React, { useEffect, useState } from "react";
import successionImg from "/public/s1.jpeg";
import athleteImg from "/public/a1.jpeg";
import motionImg from "/public/mo.jpeg";

const ServiceCard = ({ image, title }) => (
  <div
    style={{
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      padding: "20px",
      width: "260px",
      textAlign: "center",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-8px)";
      e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    }}
  >
    <img
      src={image}
      alt={title}
      style={{
        width: "100%",
        borderRadius: "10px",
        marginBottom: "12px",
        height: "160px",
        objectFit: "cover",
      }}
    />
    <h3 style={{ fontSize: "1.05rem", fontWeight: "600", color: "#2c3e50" }}>
      {title}
    </h3>
  </div>
);

const ServiceSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      {/* Text Section (formerly Service2) */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto 60px",
          fontWeight: "bold",
          fontSize: "1.25rem",
          lineHeight: "1.8",
          color: "#2c3e50",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
        }}
      >
        SUPPORT YOUR CLUB'S FUTURE WITH TAILORED SUCCESSION PLANNING, DETAILED ATHLETE MONITORING,
        AND PRECISE MOTION TRACKING TECHNOLOGIES — EMPOWERING INFORMED DECISIONS FROM ACADEMY TO
        FIRST TEAM. OUR ANALYTICS SOLUTIONS HELP YOU UNDERSTAND PLAYER DEVELOPMENT, OPTIMIZE
        PERFORMANCE, AND BUILD A STRONG FOUNDATION FOR LONG-TERM SUCCESS IN EVERY COMPETITION.
      </div>

      {/* Cards Section (formerly Service3) */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <ServiceCard image={successionImg} title="Succession Planning" />
        <ServiceCard image={athleteImg} title="Athlete Monitoring" />
        <ServiceCard image={motionImg} title="Motion Tracking" />
      </div>
    </section>
  );
};

export default ServiceSection;
