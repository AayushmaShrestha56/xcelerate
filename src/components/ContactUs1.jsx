import React from "react";

const ContactUs1= () => {
  return (
    <div
      className="hero"
      style={{
        position: "relative",
        height: "300px",
        background: "linear-gradient(135deg, #3f6279, #4e7ea8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#e6f2f1",
      }}
    >
      <div className="overlay1" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem" }}>
          CONTACT <span style={{ color: "#FFD700" }}>US</span>
        </h1>
        <h2
          style={{ fontSize: "1.2rem", fontWeight: "400", marginTop: "0.5rem" }}
        >
          Start the conversation to establish good relation and Business
        </h2>
      </div>
    </div>
  );
};

export default ContactUs1;
