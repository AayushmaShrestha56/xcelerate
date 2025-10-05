import React, { useEffect, useState } from "react";

const Service1 = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in after mount
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <section
      style={{
        background: `url(succ.jpeg) center/cover no-repeat`,
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 1.2s ease, transform 1s ease",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", maxWidth: "600px" }}>
        FOOTBALL PERFORMANCE ANALYSIS SERVICES
      </h1>
    </section>
  );
};

export default Service1;
