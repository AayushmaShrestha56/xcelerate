import React from "react";

const ContactFormSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  const inputStyle = {
    flex: 1,
    padding: "0.7em 1em",
    borderRadius: "10px",
    border: "1px solid #ccc",
  };

  return (
    <section
      className="contact-form"
      style={{
        background: "#f5f5f5",
        padding: "3rem 1rem",
        marginTop: "20px",
        borderRadius: "15px",
        width: "90%",
        maxWidth: "800px",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        height: "600px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h3 style={{ textAlign: "center" }}>SEND US A MESSAGE</h3>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          How can we help you transform your business into something extraordinary?
        </p>

        <div className="form-row" style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <input type="text" placeholder="First Name" style={inputStyle} required />
          <input type="text" placeholder="Last Name" style={inputStyle} required />
        </div>

        <div className="form-row" style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <input type="email" placeholder="Business Email" style={inputStyle} required />
          <input type="tel" placeholder="Phone Number" style={inputStyle} required />
        </div>

        <div className="form-row" style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <input type="text" placeholder="Company" style={inputStyle} required />
          <input type="text" placeholder="Industry" style={inputStyle} required />
        </div>

        <textarea
          placeholder="Message"
          style={{
            width: "100%",
            padding: "1rem",
            borderRadius: "10px",
            border: "1px solid #ccc",
            marginBottom: "1rem",
            resize: "vertical",
          }}
          required
        ></textarea>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "1rem",
            background: "#3f6279",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#4e7ea8")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#3f6279")}
        >
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
};

export default ContactFormSection;
