import React from "react";

const team2 = () => {
  return (
    <section style={{ backgroundColor: "#f5f5f5", padding: "60px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "auto",
          gap: "40px",
        }}
      >
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
            INTRODUCING Xcelerate Vision
          </h2>
          <p>The world's leading teams, broadcasters, and brands...</p>
        </div>

        <div style={{ flex: 1, minWidth: "300px" }}>
          <div
            style={{
              boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#000",
            }}
          >
            <video controls>
              <source src="public\_Xceleratestats.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default team2;
