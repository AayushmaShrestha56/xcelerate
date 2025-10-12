import React from "react";

const About3 = () => {
  const members = [
    { name: "UI/UX DESIGNER", img: "/ravi.jpg" },
    { name: "FRONTEND DEVELOPER", img: "/aayushma.jpg" },
    { name: "BACKEND DEVELOPER", img: "/yam.jpg" },
    { name: "AI/ML", img: "/dawa.jpg" },
    { name: "QA TESTER", img: "/sankalpa.png" },
  ];

  const section = {
    padding: "80px 10%",
    textAlign: "center",
    background: "#f5f5f5",
  };

  const title = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "40px",
  };

  const grid = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "40px",
  };

  const card = {
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    padding: "20px",
    width: "180px",
    transition: "transform 0.3s",
  };

  return (
    <section style={section}>
      <h2 style={title}>OUR TEAM</h2>
      <div style={grid}>
        {members.map((member, idx) => (
          <div
            key={idx}
            style={card}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <img
              src={member.img}
              alt={member.name}
              style={{
                width: "100%",
                borderRadius: "50%",
                marginBottom: "15px",
              }}
            />
            <p style={{ fontWeight: "bold" }}>{member.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About3;
