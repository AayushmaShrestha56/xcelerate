import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "error" or "success"

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");

    if (!email) {
      showMessage("Please enter your email.", "error");
      return;
    }
    if (!validateEmail(email)) {
      showMessage("Please enter a valid email address.", "error");
      return;
    }
    if (!password || !confirmPassword) {
      showMessage("Please enter and confirm your password.", "error");
      return;
    }
    if (password !== confirmPassword) {
      showMessage("Passwords do not match.", "error");
      return;
    }

    // Simulate async signup
    showMessage("Signing up...", "");
    setTimeout(() => {
      showMessage(`Account created for ${email}!`, "success");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }, 1200);
  };

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #3f6279, #4e7ea8)",
        fontFamily: "'Poppins', sans-serif",
        color: "#e6f2f1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Title */}
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        BUILD WITH CONFIDENCE <br />
        DEPLOY WITH EASE
      </h1>

      {/* SignUp Form */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          padding: "3em 2.5em 2em",
          borderRadius: "18px",
          boxShadow: "0 8px 20px rgba(42, 124, 173, 0.8)",
          width: "420px",
          textAlign: "center",
        }}
      >
        <h2>Welcome to XcelerateStats</h2>
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={inputStyle}
            required
          />

          <a
            href="/login"
            style={{ display: "block", margin: "0.5em 0 1em", color: "#95caff" }}
          >
            Already have an account? Log In
          </a>

          <button type="submit">Sign Up</button>
        </form>

        {message && (
          <div
            style={{
              marginTop: "1.5em",
              fontSize: "1rem",
              padding: "0.8em 1em",
              borderRadius: "10px",
              background:
                messageType === "error"
                  ? "rgba(255, 143, 143, 0.25)"
                  : "rgba(168, 224, 255, 0.3)",
              color: messageType === "error" ? "#ff8f8f" : "#a8e0ff",
            }}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

// Shared input styles
const inputStyle = {
  width: "100%",
  padding: "0.7em 1em",
  marginBottom: "1.1em",
  borderRadius: "10px",
  border: "none",
  fontSize: "1rem",
  outline: "none",
  background: "rgba(255, 255, 255, 0.15)",
  color: "#034569",
};

export default SignUp;
