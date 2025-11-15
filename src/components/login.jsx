import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password)
      return showMessage("Please enter both email and password.", "error");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("userInfo", JSON.stringify(data.user));
      showMessage(`Welcome back, ${data.user.name}!`, "success");

      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (err) {
      showMessage(err.message, "error");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #3f6279, #4e7ea8)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        BUILD WITH CONFIDENCE <br /> DEPLOY WITH EASE
      </h1>

      <div
        style={{
          background: "rgba(255,255,255,0.1)",
          padding: "3em 2.5em 2em",
          borderRadius: "18px",
          boxShadow: "0 8px 20px rgba(42,124,173,0.8)",
          width: "420px",
          textAlign: "center",
        }}
      >
        <h2>Welcome Back</h2>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <Link
            to="/signup"
            style={{
              display: "block",
              margin: "0.5em 0 1em",
              color: "#95caff",
            }}
          >
            Don’t have an account? Sign Up
          </Link>

          <button type="submit" style={buttonStyle}>
            Log In
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
  background: "rgba(255,255,255,0.15)",
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

export default Login;
