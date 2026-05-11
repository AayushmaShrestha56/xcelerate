import React from "react";

const Team4 = () => {
  return (
    <section
      style={{
        background: "linear-gradient(90deg, #f57b98ff, #f9765eff)",
        color: "#fff",
        padding: "3rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
        height: "400px",
      }}
    >
      <div
        style={{
          flex: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          “Let’s talk about how we can help you reach your goals on and off the field.”
        </h3>
        <p style={{ maxWidth: "600px", marginBottom: "1.5rem" }}>
          “See how our flexible software, built with Opta Vision, can give your club the tools
          to improve how each department works.”
        </p>
        <button
          onClick={() => (window.location.href = '/contactus')}

          style={{
            background: "black",
            color: "white",
            border: "none",
            padding: "0.75rem 1.5rem",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          SPEAK WITH US
        </button>
      </div>

      <img
        src="ii.jpg"
        alt="Football"
        style={{
          maxWidth: "250px",
          borderRadius: "10px",
          margin: "0 auto",
          display: "block",
        }}
      />
    </section>
  );
};

export default Team4;
