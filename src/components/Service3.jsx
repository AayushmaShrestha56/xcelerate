import React, { useEffect, useState } from "react";
const successionImg = "https://images.pexels.com/photos/3865899/pexels-photo-3865899.jpeg?auto=compress&cs=tinysrgb&w=800";
const athleteImg = "https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=800";
const motionImg = "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800";

const ServiceCard = ({ image, title }) => (
  <div
    style={{
      background: "linear-gradient(135deg, #ffffff, #f8fafc)",
      borderRadius: "16px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      padding: "25px",
      width: "260px",
      textAlign: "center",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
      cursor: "pointer",
      border: "1px solid rgba(0,0,0,0.05)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-10px)";
      e.currentTarget.style.boxShadow = "0 12px 30px rgba(14, 165, 233, 0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
    }}
  >
    <img
      src={image}
      alt={title}
      style={{
        width: "100%",
        borderRadius: "12px",
        marginBottom: "15px",
        height: "160px",
        objectFit: "cover",
      }}
    />
    <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#0f172a" }}>
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
        background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      {/* Text Section */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto 70px",
          fontWeight: "bold",
          fontSize: "1.3rem",
          lineHeight: "1.9",
          color: "#334155",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
        }}
      >
        SUPPORT YOUR CLUB&apos;S FUTURE WITH TAILORED SUCCESSION PLANNING, DETAILED ATHLETE MONITORING,
        AND PRECISE MOTION TRACKING TECHNOLOGIES 
      </div>

      {/* Cards Section */}
      <div
        style={{
          display: "flex",
          gap: "30px",
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
