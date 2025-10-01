import React from "react";

const Team3 = () => {
  return (
    <section style={{ padding: "4rem 2rem" }}>
      <h2 style={{ textAlign: "center", color: "#000" }}>Main Features</h2>
      <p style={{ textAlign: "center", color: "#000", marginBottom: "2rem" }}>
        Stats Perform are a critical vector for audience growth, revenue growth, and on-field success
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "#fff",
            color: "#000",
            borderRadius: "12px",
            padding: "20px",
            textAlign: "center",
            width: "280px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <img src="PER.jpeg" alt="Performance" style={{ height: "180px", objectFit: "contain", marginBottom: "15px" }} />
          <h4>Performance Analysis</h4>
          <p>Real-time data insights to track and enhance player output.</p>
        </div>

        <div
          style={{
            background: "#fff",
            color: "#000",
            borderRadius: "12px",
            padding: "20px",
            textAlign: "center",
            width: "280px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <img src="per2.jpeg" alt="Prediction" style={{ height: "180px", objectFit: "contain", marginBottom: "15px" }} />
          <h4>Win-Loss Prediction</h4>
          <p>Predict outcomes using AI and machine learning models.</p>
        </div>

        <div
          style={{
            background: "#fff",
            color: "#000",
            borderRadius: "12px",
            padding: "20px",
            textAlign: "center",
            width: "280px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <img src="per3.jpg" alt="Training" style={{ height: "180px", objectFit: "contain", marginBottom: "15px" }} />
          <h4>Training Recommendations</h4>
          <p>Customized drills and suggestions based on match data.</p>
        </div>
      </div>
    </section>
  );
};

export default Team3;
