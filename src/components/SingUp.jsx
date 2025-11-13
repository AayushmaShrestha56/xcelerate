import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  // --- Password Validation ---
  const validatePasswordStrength = (pass) => {
    const hasUpper = /[A-Z]/.test(pass);
    const hasLower = /[a-z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
    const isLong = pass.length >= 8;

    if (!pass) return setPasswordStrength("");
    if (isLong && hasUpper && hasLower && hasNumber && hasSymbol)
      setPasswordStrength("Strong password 💪");
    else if (isLong && (hasUpper || hasNumber || hasSymbol))
      setPasswordStrength("Moderate password ⚠️ (Add more variety)");
    else setPasswordStrength("Weak password ❌ (Use capital, number, and symbol)");
  };

  // --- Signup Handler ---
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");

    if (!email || !password || !confirmPassword)
      return showMessage("Please fill all fields.", "error");

    if (!validateEmail(email))
      return showMessage("Please enter a valid email address.", "error");

    if (password !== confirmPassword)
      return showMessage("Passwords do not match.", "error");

    const strongEnough =
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password) &&
      password.length >= 8;

    if (!strongEnough)
      return showMessage(
        "Password too weak. Use 8+ characters with capital letters, numbers, and symbols.",
        "error"
      );

    // --- Store user in localStorage ---
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(
      (user) => user.email === email.toLowerCase()
    );

    if (existingUser) return showMessage("Email already registered.", "error");

    users.push({ email: email.toLowerCase(), password });
    localStorage.setItem("users", JSON.stringify(users));

    showMessage("Signup successful! You can now log in.", "success");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPasswordStrength("");
  };

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

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
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        BUILD WITH CONFIDENCE <br />
        DEPLOY WITH EASE
      </h1>

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
            onChange={(e) => {
              setPassword(e.target.value);
              validatePasswordStrength(e.target.value);
            }}
            style={inputStyle}
            required
          />

          {passwordStrength && (
            <div
              style={{
                marginBottom: "1em",
                color:
                  passwordStrength.includes("Strong")
                    ? "#a8e0ff"
                    : passwordStrength.includes("Moderate")
                    ? "#ffe680"
                    : "#ff8f8f",
                fontSize: "0.9rem",
                textAlign: "left",
              }}
            >
              {passwordStrength}
            </div>
          )}

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
            style={{
              display: "block",
              margin: "0.5em 0 1em",
              color: "#95caff",
            }}
          >
            Already have an account? Log In
          </a>

          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
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

const buttonStyle = {
  width: "100%",
  background: "linear-gradient(90deg, #2563eb, #0891b2)",
  border: "none",
  padding: "0.9em",
  borderRadius: "10px",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

export default SignUp;
