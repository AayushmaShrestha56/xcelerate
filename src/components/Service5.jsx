import React, { useEffect, useState } from "react";
const footballField = "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=800";

const Section5 = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "160px 20px", // extra tall section
        flexWrap: "wrap",
        gap: "100px", // more space between text & image
        background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)",
        transition: "all 0.5s ease",
      }}
    >
      {/* Text Section */}
      <div
        style={{
          maxWidth: "520px", // slightly wider
          fontSize: "1.7rem", // bigger font
          fontWeight: "bold",
          lineHeight: "2.1",
          color: "#2c3e50",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(60px)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
        }}
      >
        LET’S TALK ABOUT HELPING YOU ACHIEVE YOUR ON-FIELD & OFF-FIELD OBJECTIVES
        <br />
        <button
          style={{
            marginTop: "35px",
            padding: "18px 40px", // larger button
            background: "#2c3e50",
            color: "white",
            border: "none",
            borderRadius: "35px",
            cursor: "pointer",
            fontSize: "1.15rem",
            fontWeight: "600",
            letterSpacing: "0.5px",
            transition: "all 0.4s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#1a252f";
            e.currentTarget.style.boxShadow = "0 0 15px rgba(44, 62, 80, 0.6)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#2c3e50";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          SPEAK WITH US
        </button>
      </div>

      {/* Image Section */}
      <img
        src={footballField}
        alt="Football Strategy"
        style={{
          maxWidth: "600px", // made image bigger
          width: "100%", // responsive
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)", // stronger shadow
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(70px)",
          transition: "opacity 1.4s ease, transform 1.4s ease",
        }}
      />
    </section>
  );
};

export default Section5;
