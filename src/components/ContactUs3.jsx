import React from "react";

const ContactInfoFooter = () => {
  return (
    <>
      {/* CONTACT INFO */}
      <section
        className="contact-info"
        style={{
          textAlign: "center",
          marginTop: "3rem",
          padding: "2rem 1rem",
        }}
      >
        <h2>CONTACT US</h2>
        <p>Feel free to use the form or drop us an email. Old fashioned phone calls work too</p>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
          <li>📞 3579834759739</li>
          <li>✉️ xceleratestats@gmail.com</li>
          <li>📍 Dhobidhara, Kathmandu</li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#2c3e50",
          color: "#fff",
          padding: "2rem 1rem",
          marginTop: "3rem",
        }}
      >
        <div
          className="newsletter"
          style={{ maxWidth: "600px", margin: "0 auto 2rem", textAlign: "center" }}
        >
          <h3>Sign up to The Scoreboard</h3>
          <p>
            Get a quarterly selection of ideas, tips and tricks to attract,
            entertain and connect with millions of sports fans.
          </p>
          <input
            type="email"
            placeholder="Email Address"
            style={{ padding: "0.5rem", borderRadius: "5px", width: "60%", margin: "0.5rem 0" }}
          />
          <div>
            <label>
              <input type="checkbox" /> I agree to receive marketing emails
            </label>
          </div>
          <button
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              background: "#3f6279",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Sign Me Up!
          </button>
        </div>

        <div className="footer-links" style={{ display: "flex", justifyContent: "center", gap: "4rem" }}>
          <div>
            <h4>Learn More</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>Interactive Product Finder</li>
              <li>Learn About OPTA</li>
              <li>AI in Sport</li>
              <li>News & Resources</li>
            </ul>
          </div>
          <div>
            <h4>About Stats Perform</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>Leadership</li>
              <li>Press Coverage</li>
              <li>Careers</li>
              <li>Partnership Program</li>
            </ul>
          </div>
        </div>
        <p style={{ textAlign: "center", marginTop: "2rem" }}>© 2025 Stats Perform</p>
      </footer>
    </>
  );
};

export default ContactInfoFooter;
