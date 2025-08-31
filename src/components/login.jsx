import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalMessageType, setModalMessageType] = useState("");   

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setMessageType("");

    if (!username.trim()) {
      setMessage("Please enter your username or email.");
      setMessageType("error");
      return;
    }
    if (!password) {
      setMessage("Please enter your password.");
      setMessageType("error");
      return;
    }

    setMessage("Logging in...");
    setMessageType("");
    
    setTimeout(() => {
      setMessage(`Welcome, ${username}! You have successfully logged in.`);
      setMessageType("success");
      setUsername("");
      setPassword("");
    }, 1200);
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    setModalMessage("");
    setModalMessageType("");

    const email = resetEmail.trim().toLowerCase();

    if (!email) {
      setModalMessage("Please enter your email address.");
      setModalMessageType("error");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setModalMessage("Please enter a valid email address.");
      setModalMessageType("error");
      return;
    }

    setModalMessage("Sending reset link...");
    setModalMessageType("");
    
    setTimeout(() => {
      setModalMessage("Reset link sent! Please check your email.");
      setModalMessageType("success");
      setResetEmail("");
    }, 1400);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage("");
    setModalMessageType("");
    setResetEmail("");
  };

  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{ background: "linear-gradient(135deg, #3f6279, #4e7ea8)" }}
    >
      {/* Title */}
      <div className="text-center py-8">
        <h1 className="text-3xl md:text-4xl font-bold drop-shadow-lg">
          BUILD WITH CONFIDENCE <br /> DEPLOY WITH EASE
        </h1>
      </div>

      {/* Main login container */}
      <main className="flex-grow flex justify-center items-center px-4">
        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-2xl w-full max-w-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-blue-100">Welcome Back</h2>
            <h3 className="text-xl font-bold">Login</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-2 font-semibold text-blue-200">
                Username or Email
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username or email"
                className="w-full px-4 py-3 rounded-lg bg-white/15 text-white placeholder-blue-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/25 transition-all"
                autoComplete="username"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block mb-2 font-semibold text-blue-200">
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
            
            <div className="text-right">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-sm text-blue-200 hover:text-white hover:underline transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Log In
            </button>
          </form>

          {message && (
            <div className={`mt-4 p-3 rounded-lg text-center ${
              messageType === "error" 
                ? "bg-red-500/20 text-red-200 border border-red-400/30" 
                : messageType === "success"
                ? "bg-green-500/20 text-green-200 border border-green-400/30"
                : "bg-blue-500/20 text-blue-200 border border-blue-400/30"
            }`}>
              {message}
            </div>
          )}
        </div>
      </main>

      {/* Forgot password modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl w-full max-w-sm relative shadow-2xl">
            <button
              type="button"
              className="absolute top-3 right-4 text-2xl font-bold text-blue-200 hover:text-white transition-colors"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            
            <h2 className="text-2xl font-semibold mb-6 text-center">Reset Password</h2>
            
            <form onSubmit={handleResetSubmit} className="space-y-4">
              <div>
                <label htmlFor="resetEmail" className="block mb-2 font-semibold text-blue-200">
                  Enter your email address
                </label>
                <input
                  type="email"
                  id="resetEmail"
                  placeholder="your.email@example.com"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white/15 text-white placeholder-blue-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/25 transition-all"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Send Reset Link
              </button>
            </form>
            
            {modalMessage && (
              <div className={`mt-4 p-3 rounded-lg text-center text-sm ${
                modalMessageType === "error" 
                  ? "bg-red-500/20 text-red-200 border border-red-400/30" 
                  : modalMessageType === "success"
                  ? "bg-green-500/20 text-green-200 border border-green-400/30"
                  : "bg-blue-500/20 text-blue-200 border border-blue-400/30"
              }`}>
                {modalMessage}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
