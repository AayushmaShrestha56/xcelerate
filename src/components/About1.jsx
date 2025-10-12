import React from "react";

const About1 = () => {
  const sectionStyle = {
    padding: "80px 10%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    gap: "40px",
  };

  const textContainerStyle = {
    flex: "1 1 50%",
    textAlign: "left",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#111",
  };

  const textStyle = {
    fontSize: "1.1rem",
    color: "#333",
    maxWidth: "600px",
    lineHeight: "1.8",
  };

  const imageStyle = {
    flex: "1 1 45%",
    width: "100%",
    maxWidth: "500px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
  };

  return (
    <section style={sectionStyle}>
      {/* Left: Text */}
      <div style={textContainerStyle}>
        <h2 style={titleStyle}>ABOUT XCELERATE</h2>
        <p style={textStyle}>
          At XcelerateStats, we are passionate about transforming the future of
          football through the power of data. Our mission is to bridge the gap
          between professional-level analytics and grassroots football by making
          advanced performance insights accessible, affordable, and easy to use
          for players, coaches, and clubs at every level.
        </p>
      </div>

      {/* Right: Image */}
      <img
        src="/col.png"
        alt="Football Data"
        style={imageStyle}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </section>
  );
};

export default About1;
