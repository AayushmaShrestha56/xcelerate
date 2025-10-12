import React from "react";
import { motion } from "framer-motion";

const AboutUsMission = () => {
  const icons = [
    { icon: "📊", text: "Performance Analysis" },
    { icon: "➡️", text: "Player Deployment" },
    { icon: "⚙️", text: "Competitive Edge" },
    { icon: "🔥", text: "Enhanced Output" },
  ];

  return (
    <section
      className="boost min-h-screen flex items-center px-6 py-16"
      style={{ background: "#f5f5f5" }}
    >
      <div className="container boost-flex max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="boost-image flex-shrink-0 w-full md:w-1/2 max-w-lg mx-auto">
          <img
            src="aaa.png"
            alt="Enhance Performance"
            className="rounded-lg shadow-lg w-full object-contain"
          />
        </div>

        {/* Right Text + Icons */}
        <div className="boost-text-icons flex flex-col flex-1 text-gray-900">
          <div className="boost-text mb-10">
            <h3 className="text-center text-2xl md:text-3xl font-semibold leading-relaxed">
              Track players using video analytics. Gain a competitive edge with
              deployment insights and in-game statistics.
            </h3>
          </div>

          {/* Animated Icons */}
          <motion.div
            className="boost-icons grid grid-cols-2 gap-8 text-center text-lg font-medium"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {icons.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 transform transition-transform duration-500 hover:scale-110"
                whileHover={{ scale: 1.1, color: "#f97316" }} // orange on hover
              >
                <span className="text-8xl">{item.icon}</span>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMission;
