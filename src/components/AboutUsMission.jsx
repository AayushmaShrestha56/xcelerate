
import React from "react";

const AboutUsMission = () => {
  return (
    <section
      className="boost min-h-screen flex items-center px-6 py-16"
      style={{
        background: "#7b7979ff", // teal gradient background
      }}
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
        <div className="boost-text-icons flex flex-col flex-1 text-white">
          <div className="boost-text mb-10">
            <h3 className="text-center text-2xl md:text-3xl font-semibold leading-relaxed">
              Track players using video analytics. Gain a competitive edge with
              deployment insights and in-game statistics.
            </h3>
          </div>

          <div className="boost-icons grid grid-cols-2 gap-8 text-center text-lg font-medium">
            <div className="flex flex-col items-center gap-2">
              <span className="text-8xl">📊</span>
              <p>Performance Analysis</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-8xl">➡️</span>
              <p>Player Deployment</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-8xl">⚙️</span>
              <p>Competitive Edge</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-8xl">🔥</span>
              <p>Enhanced Output</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMission;
