import React from "react";

const CTA = () => {
  return (
    <section
      style={{
        background: "linear-gradient(90deg, #ff416c, #ff4b2b)",
        color: "#fff",
        padding: "3rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
        height: "500px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h3>“Let’s talk about how we can help you reach your goals on and off the field.”</h3>
        <p>
          “See how our flexible software, built with Opta Vision, can give your club the tools
          to improve how each department works.”
        </p>
        <button
          style={{
            background: "black",
            color: "white",
            border: "none",
            padding: "0.75rem 1.5rem",
            marginTop: "1rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          SPEAK WITH US
        </button>
      </div>
      <img src="ii.jpg" alt="Football" style={{ maxWidth: "400px", borderRadius: "8px" }} />
    </section>
  );
};

export default CTA;
