import React from "react";

const AboutUs = () => {
  return (
    <section
      className="relative py-16 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px",
        position: "relative",
        animation: "bgZoom 30s ease-in-out infinite alternate",
      }}
    >
      {/* Animated gradient overlay with fade in/out */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(-45deg, #f5e6ca, #f3d3bd, #e6e1ff, #d9f4ff)",
          backgroundSize: "400% 400%",
          animation:
            "gradientMove 12s ease infinite, fadeInOut 10s ease-in-out infinite",
          opacity: 0.6,
          mixBlendMode: "overlay",
          zIndex: 1,
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-wrap items-center gap-10">
        <div className="flex-shrink-0 w-full md:w-auto max-w-md mx-auto md:mx-0">
          <img
            src="image1.png"
            alt="Football Action"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        <div className="flex-1 min-w-[300px] text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            The Best Build Magic
            <br />
            With Stats Perform
          </h2>
          <p className="mb-4 text-base md:text-lg leading-relaxed max-w-prose">
            The world's leading teams, broadcasters, media, apps, bookmakers and
            brands come to us to transform sporting magic into sports content,
            analysis and insight which powers audience growth, increased revenues
            and on-field success.
          </p>
          <p className="text-base md:text-lg leading-relaxed max-w-prose">
            Enrich your sports analysis and power captivating experiences that
            bring fans closer to sport with our globally-predictions.
          </p>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes bgZoom {
          from { background-size: 100%; }
          to { background-size: 110%; }
        }

        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
