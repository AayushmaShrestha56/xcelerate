import React, { useEffect, useState } from "react";
import footballField from "/public/f1.jpeg";

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
        padding: "80px 20px",
        flexWrap: "wrap",
        gap: "50px",
        background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)",
        transition: "all 0.5s ease",
      }}
    >
      {/* Text Section */}
      <div
        style={{
          maxWidth: "420px",
          fontSize: "1.3rem",
          fontWeight: "bold",
          lineHeight: "1.8",
          color: "#2c3e50",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 1.2s ease, transform 1.2s ease",
        }}
      >
        LET’S TALK ABOUT HELPING YOU ACHIEVE YOUR ON-FIELD & OFF-FIELD OBJECTIVES
        <br />
        <button
          style={{
            marginTop: "25px",
            padding: "12px 30px",
            background: "#2c3e50",
            color: "white",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "1rem",
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
          maxWidth: "420px",
          borderRadius: "15px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(60px)",
          transition: "opacity 1.4s ease, transform 1.4s ease",
        }}
      />
    </section>
  );
};

export default Section5;
