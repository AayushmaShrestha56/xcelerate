import React, { useEffect, useState, useRef } from "react";

const statsData = [
  { label: "Matches Covered Annually", target: 1000 },
  { label: "Unique Event Data Points", target: 5000000000 },
  { label: "Global Competitions Covered", target: 1278 },
  { label: "Global Partnerships", target: 33 },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 } // triggers when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
    let animationFrame;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = time - startTime;
      if (elapsed < duration) {
        const newCounts = statsData.map(({ target }) =>
          Math.min(Math.floor((elapsed / duration) * target), target)
        );
        setCounts(newCounts);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCounts(statsData.map((stat) => stat.target));
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  };

  return (
    <section
      ref={sectionRef}
      className="relative text-white py-20 px-6"
      style={{
        backgroundImage: "url('/home3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-grey bg-opacity-70 p-16 max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left Text Content */}
        <div className="flex-1 min-w-[280px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Opta. More Than a Fast Score
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            Opta is Stats Perform’s sports data and it's more than a fast score,
            fixture or a game result. Our deep and broad sports data sets are
            collected with incredible accuracy in real-time; providing
            consistent, structured and detailed data that powers our proprietary
            AI models.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            It’s that level of depth and sophistication which allows our clients
            to go deeper, cover more sports, tell better stories more often, and
            do all of that when it matters most.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            Opta represents the universal language of sport. A massive engine of
            real-time sports data which feeds the global sports platforms which
            sports fans go to and trust.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full font-bold text-white hover:opacity-90 transition-opacity">
            See How Opta Data Powers Sport
          </button>
        </div>

        {/* Right Stats Cards */}
        <div className="flex-1 min-w-[280px] bg-white rounded-xl p-10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-black">
          {statsData.map(({ label }, idx) => (
            <div key={label} className="text-center">
              <div className="text-4xl font-extrabold">
                {counts[idx].toLocaleString()}
              </div>
              <div className="uppercase mt-2 text-sm text-gray-600">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
