import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const navigate = useNavigate();

  // Auto-hide message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");

    if (!email) return showMessage("Please enter your email.", "error");
    if (!password) return showMessage("Please enter your password.", "error");

    // Get stored users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user
    const foundUser = users.find(
      (user) =>
        user.email === email.toLowerCase().trim() &&
        user.password === password
    );

    if (!foundUser) {
      return showMessage("Invalid email or password.", "error");
    }

    // ✅ Successful login
    showMessage(`Welcome back, ${email}! Redirecting...`, "success");

    setTimeout(() => {
      navigate("/dashboard"); // Change this to your dashboard route
    }, 1000);

    setEmail("");
    setPassword("");
  };

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
  };

  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{ background: "linear-gradient(135deg, #3f6279, #4e7ea8)" }}
    >
      <div className="text-center py-8">
        <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
          BUILD WITH CONFIDENCE <br /> DEPLOY WITH EASE
        </h1>
      </div>

      <main className="flex-grow flex justify-center items-center px-4">
        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-2xl w-full max-w-md relative">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-blue-100">
              Welcome Back
            </h2>
            <h3 className="text-xl font-bold">Login</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-blue-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white/15 text-white placeholder-blue-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/25 transition-all"
                autoComplete="username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 font-semibold text-blue-200"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg bg-white/15 text-white placeholder-blue-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/25 transition-all"
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Log In
            </button>

            <Link
              to="/signup"
              className="block text-center text-sm text-blue-200 hover:text-white hover:underline mt-3"
            >
              Don’t have an account? Sign Up
            </Link>
          </form>

          {/* Toast Message */}
          {message && (
            <div
              className={`absolute top-[-60px] left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-center font-semibold max-w-xs w-full
                ${
                  messageType === "error"
                    ? "bg-red-500/90 text-white border border-red-400"
                    : "bg-green-500/90 text-white border border-green-400"
                }
                animate-fadeInDown
              `}
            >
              {message}
            </div>
          )}
        </div>
      </main>

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translate(-50%, -20px); }
            100% { opacity: 1; transform: translate(-50%, 0); }
          }
          .animate-fadeInDown {
            animation: fadeInDown 0.5s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
