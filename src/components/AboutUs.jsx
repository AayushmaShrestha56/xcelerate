
import React from "react";

const AboutUs = () => {
  return (
    <section
      className="image-section py-16 px-6"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px",
        color: "#000",
      }}
    >
      <div className="image-content max-w-7xl mx-auto flex flex-wrap items-center gap-10">
        <div className="image-block flex-shrink-0 w-full md:w-auto max-w-md mx-auto md:mx-0">
          <img
            src="image1.png"
            alt="Football Action"
            className="rounded-xl shadow-lg w-full"
          />
        </div>
        <div className="text-block flex-1 min-w-[300px]">
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
    </section>
  );
};

export default AboutUs;
