import React from "react";

const Team1 = () => {
  return (
    <section
      style={{
        backgroundImage: "url('umm.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
        padding: "12rem 2rem", // bigger padding for length
        color: "white",
      }}
    >
      {/* Main Heading */}
      <h1
        style={{
          fontSize: "4rem", // bigger font
          marginBottom: "2rem",
          fontWeight: "800",
          lineHeight: "1.2",
        }}
      >
        ENHANCING <span style={{ color: "orange" }}>ANALYSIS</span> IN FOOTBALL
        <br /> THROUGH PREDICTIVE INSIGHTS
      </h1>

      {/* Paragraph */}
      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 4rem",
          fontSize: "1.6rem", // bigger paragraph
          lineHeight: "2",
        }}
      >
        XCELERATESTATS IS DRIVING FOOTBALL’S DATA REVOLUTION — TRANSFORMING HOW
        COACHES, ANALYSTS, AND PLAYERS UNDERSTAND AND EXPERIENCE THE GAME.
      </p>
    </section>
  );
};

export default Team1;
