import React from "react";

const About2 = () => {
  const sectionStyle = {
    backgroundColor: "#cce5f6",
    padding: "80px 10%",
  };

  const contentStyle = {
    display: "flex",
    gap: "50px",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const imgStyle = {
    width: "350px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  };

  const textBlock = {
    flex: 1,
    minWidth: "300px",
  };

  const heading = {
    fontSize: "1.8rem",
    color: "#1b1b1b",
    marginTop: "15px",
    fontWeight: "bold",
  };

  const paragraph = {
    color: "#333",
    fontSize: "1.1rem",
    lineHeight: "1.6",
  };

  const listStyle = {
    listStyle: "disc",
    marginLeft: "20px",
    color: "#333",
    lineHeight: "1.8",
  };

  return (
    <section style={sectionStyle}>
      <div style={contentStyle}>
        <img
          src="/about1.jpg"
          alt="Football Vision"
          style={imgStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <div style={textBlock}>
          <h3 style={heading}>OUR VISION</h3>
          <p style={paragraph}>
            To empower every player and coach with the tools they need to unlock
            potential, improve performance, and make smarter decisions — on and
            off the field.
          </p>

          <h3 style={heading}>WHY CHOOSE US?</h3>
          <ul style={listStyle}>
            <li>AI-Powered, Real-Time Performance Analysis</li>
            <li>Easy Data Entry via GPS, CSV, or Manual Input</li>
            <li>Scalable and Secure Platform</li>
            <li>Engaging, Visual, and Personalized Experience</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About2;
