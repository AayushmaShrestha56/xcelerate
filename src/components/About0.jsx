import React from "react";

const About0 = () => {
  const styles = {
    hero: {
      position: "relative",
      height: "90vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundImage: "url('/about0.jpg')", // 🏟️ Replace with your image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      animation: "fadeInBg 2s ease-out",
    },
    overlay: {
      position: "absolute",
      inset: 0,
      background: "rgba(0, 0, 0, 0.6)", // dark overlay for text visibility
    },
    content: {
      position: "relative",
      zIndex: 1,
      color: "white",
      textAlign: "center",
      textTransform: "uppercase",
      fontSize: "4rem",
      fontWeight: "bold",
      letterSpacing: "2px",
      animation: "fadeInText 2s ease-out",
    },
    // Keyframes for fade-in animation
    "@keyframes fadeInBg": {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    "@keyframes fadeInText": {
      from: { opacity: 0, transform: "translateY(30px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
  };

  return (
    <section style={styles.hero}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>ABOUT</div>
    </section>
  );
};

export default About0;
