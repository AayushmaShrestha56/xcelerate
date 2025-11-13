import React from "react";

const Team2 = () => {
  return (
    <section
      style={{
        backgroundColor: "#f5f5f5",
        padding: "80px 60px",
        fontFamily: "'Poppins', sans-serif", // Modern & readable font
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "auto",
          gap: "60px",
        }}
      >
        {/* Left Text Section */}
        <div style={{ flex: 1, minWidth: "320px" }}>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "800",
              color: "#111",
              marginBottom: "24px",
              lineHeight: "1.2",
              letterSpacing: "-0.5px",
              fontFamily: "'Playfair Display', serif", // Elegant heading font
            }}
          >
            
            <span style={{ color: "#e63946" }}>Introducing Xcelerate Vision</span>
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#333",
              maxWidth: "550px",
            }}
          >
            The world’s leading teams, broadcasters, and brands rely on
            <strong> Xcelerate Vision</strong> for advanced analytics,
            precision-driven insights, and cutting-edge AI-powered performance
            tracking. Elevate your game with technology that turns data into
            dominance.
          </p>
        </div>

        {/* Right Video Section */}
        <div style={{ flex: 1, minWidth: "380px" }}>
          <div
            style={{
              boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
              borderRadius: "16px",
              overflow: "hidden",
              background: "#000",
            }}
          >
            <video
              controls
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            >
              <source src="/_Xceleratestats.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team2;
