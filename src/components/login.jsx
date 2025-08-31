import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setMessage("Please enter your username or email.");
      return;
    }
    if (!password) {
      setMessage("Please enter your password.");
      return;
    }
    setMessage("Logging in...");
    setTimeout(() => {
      setMessage(`Welcome, ${username}! You have successfully logged in.`);
      setUsername("");
      setPassword("");
    }, 1200);
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    if (!resetEmail) {
      setModalMessage("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(resetEmail.toLowerCase())) {
      setModalMessage("Please enter a valid email address.");
      return;
    }
    setModalMessage("Sending reset link...");
    setTimeout(() => {
      setModalMessage("Reset link sent! Please check your email.");
      setResetEmail("");
    }, 1400);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-teal-700 to-blue-500 text-white">
      {/* Navbar */}
      <header className="bg-white bg-opacity-60 border-b border-black sticky top-0 z-50">
        <div className="flex justify-between items-center w-11/12 max-w-6xl mx-auto py-4">
          <div className="flex items-center gap-2">
            <img src="loho.jpg" alt="Logo" className="w-10 h-10" />
            <span className="font-bold text-black text-lg">XCELERATE STATS</span>
          </div>
          <nav className="flex gap-6">
            <a href="home.html" className="text-black hover:text-crimson">HOME</a>
            <a href="#" className="text-black hover:text-crimson">FAN ENGAGEMENT</a>
            <a href="#" className="text-black hover:text-crimson">SERVICE</a>
            <a href="performance.html" className="text-black hover:text-crimson">TEAM PERFORMANCE</a>
          </nav>
        </div>
        <div className="flex justify-end gap-4 w-full px-12 py-2 text-sm">
          <a href="#" className="text-black hover:text-white">About</a>
          <a href="contactuspage.html" className="text-black hover:text-white">Contact</a>
          <a href="login.html" className="text-black hover:text-white">Log In</a>
        </div>
      </header>

      {/* Title */}
      <h1 className="text-center mt-12 text-3xl font-bold drop-shadow-lg">
        BUILD WITH CONFIDENCE <br /> DEPLOY WITH EASE
      </h1>

      {/* Main login container */}
      <main className="flex-grow flex justify-center items-center px-4 mt-6">
        <div className="bg-white/10 p-10 rounded-2xl shadow-xl w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-2">Welcome Back</h2>
          <h1 className="text-3xl font-bold mb-6">Login</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="text-left">
              <label htmlFor="username" className="mb-1 block font-semibold text-sky-200">Username or Email</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username or email"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div className="text-left">
              <label htmlFor="password" className="mb-1 block font-semibold text-sky-200">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <span
              className="text-sm text-sky-300 hover:underline cursor-pointer self-end"
              onClick={() => setShowModal(true)}
            >
              Forgot Password?
            </span>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-teal-500 text-white py-2 rounded-full font-semibold transition-all"
            >
              Log In
            </button>
          </form>

          {message && (
            <div className="mt-4 p-2 rounded-lg bg-white/20 text-center">
              {message}
            </div>
          )}
        </div>
      </main>

      {/* Forgot password modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="bg-white/10 p-8 rounded-2xl w-80 relative text-center">
            <button
              className="absolute top-2 right-4 text-2xl font-bold text-sky-200 hover:text-white"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
            <form onSubmit={handleResetSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="your.email@example.com"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-teal-500 py-2 rounded-full text-white font-semibold"
              >
                Send Reset Link
              </button>
            </form>
            {modalMessage && (
              <div className="mt-3 p-2 rounded-lg bg-white/20">{modalMessage}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
