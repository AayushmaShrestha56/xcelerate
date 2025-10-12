import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // uses lucide-react icons

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
    <footer className="bg-gray-900 text-white py-10 relative">
      {/* Footer Links */}
      <div className="footer-links grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mb-8">
        <div>
          <h4 className="text-lg font-bold mb-3">Learn More</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Interactive Product Finder</li>
            <li className="hover:text-white cursor-pointer">Learn About OPTA</li>
            <li className="hover:text-white cursor-pointer">AI in Sport</li>
            <li className="hover:text-white cursor-pointer">News & Resources</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-3">About Stats Perform</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Leadership</li>
            <li className="hover:text-white cursor-pointer">Press Coverage</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Partnership Program</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-400">
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
