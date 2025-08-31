
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const contactUs = () => {
    alert("Contact us function triggered!"); // Replace with your logic
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/aa.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "white",
      }}
    >
      {/* Overlay */}
      <div
        aria-hidden="true"
      />

      <div className="relative max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 px-6">
        {/* Left Section */}
        <div className="max-w-xl text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
            THERE&apos;S MAGIC IN
            <br />
            THE DETAIL{" "}
            <span className="text-red-500 font-black">AI</span> OF
            <br />
            SPORT
          </h1>
          <p className="mt-6 text-lg max-w-md">
            Stats Perform is the world leader in sports AI. With 7.2 Petabytes
            of proprietary sports data and 8 foundation sports AI models used
            in 200+ software modules, we empower the world’s top sports
            broadcasters, media, apps, leagues, federations, bookmakers and
            teams to win audiences, customers and trophies.
          </p>
          <button
            onClick={contactUs}
            className="mt-10 px-8 py-3 rounded-full bg-pink-500 hover:bg-pink-600 font-bold shadow-lg transition-colors duration-300"
          >
            CONTACT US
          </button>
        </div>

        {/* Right Section - Illustration or Image */}
        <motion.div
          className="z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;