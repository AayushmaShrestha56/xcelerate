import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
      {/* Trapezoid-Shaped Video */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="w-[100%] md:w-[90%] h-[90vh] object-cover shadow-[0_0_80px_rgba(255,0,100,0.2)]"
          style={{
            clipPath:
              "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)", // Right trapezoid shape
            borderRadius: "20px",
          }}
        >
          <source src="/1008.mp4" type="video/mp4" />
        </motion.video>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-[20px] pointer-events-none"></div>

      {/* Floating glow */}
      <motion.div
        className="absolute w-[28rem] h-[28rem] bg-pink-500/25 rounded-full blur-3xl mix-blend-screen"
        animate={{
          x: [0, 70, -70, 0],
          y: [0, -40, 50, 0],
          opacity: [0.5, 0.8, 0.6, 0.7],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Text content */}
      <div className="relative z-10 text-center text-white max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-2xl">
          THERE&apos;S MAGIC IN <br />
          THE DETAIL <span className="text-red-500 font-black">AI</span> OF SPORT
        </h1>

        <motion.button
          onClick={() => (window.location.href = "/contactus")}
          className="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-pink-600 hover:to-red-500 font-bold shadow-lg transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
        >
          CONTACT US
        </motion.button>
      </div>
    </div>
  );
};

export default HeroSection;
