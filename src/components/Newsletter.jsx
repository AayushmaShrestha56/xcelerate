
import React from "react";

const Newsletter = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      {/* Newsletter Section */}
      <div className="bg-[#111] text-white text-center py-10 px-4 rounded-md mb-10">
        <h3 className="text-2xl font-semibold mb-4">Sign up to The Scoreboard</h3>
        <p className="max-w-xl mx-auto mb-6">
          Get a quarterly selection of ideas, tips and tricks to attract, entertain
          and connect with millions of sports fans.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 w-64 rounded-md text-black"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md">
            Sign Me Up!
          </button>
        </div>
        <div className="mt-4">
          <label className="text-sm">
            <input type="checkbox" className="mr-2" />
            I agree to receive marketing emails
          </label>
        </div>
      </div>

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
      <p className="text-center text-sm text-gray-500">
        © 2025 Stats Perform
      </p>
    </footer>
  );
};

export default Newsletter;
