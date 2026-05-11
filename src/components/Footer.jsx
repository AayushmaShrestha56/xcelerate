import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { NavLink } from "react-router-dom"; // Needed for the added links

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-10 text-center relative">

      

      {/* Main Menu */}
      <nav className="space-x-6 text-lg mb-5">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/service">SERVICE</NavLink>
        <NavLink to="/teamper">TEAM PERFORMANCE</NavLink>
      </nav>

      {/* Extra Links */}
      <div className="space-x-6 text-lg mb-5">
        <NavLink to="/SignUp">SignUp</NavLink>
        <NavLink to="/contactus">Contact</NavLink>
        <NavLink to="/login">Log In</NavLink>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-400 mt-3">
        © 2025 Stats Perform
      </p>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
