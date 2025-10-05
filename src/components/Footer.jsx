import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      {/* Footer Links */}
      <div className="footer-links grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mb-8">
        <div>
          <h4 className="text-lg font-bold text-white mb-3">Learn More</h4>
          <ul className="space-y-2">
            <li>Interactive Product Finder</li>
            <li>Learn About OPTA</li>
            <li>AI in Sport</li>
            <li>News & Resources</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-white mb-3">About Stats Perform</h4>
          <ul className="space-y-2">
            <li>Leadership</li>
            <li>Press Coverage</li>
            <li>Careers</li>
            <li>Partnership Program</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-white">
        © 2025 Stats Perform
      </p>
    </footer>
  );
};

export default Footer;
