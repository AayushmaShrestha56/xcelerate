// import React from "react";

// export default function ReminderAnalyze() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen text-[#111827] px-4 text-center bg-gradient-to-b from-[#CCFBF1] via-[#E5FDF8] to-white bg-[length:100%_400px] bg-no-repeat">
//       <h1 className="text-2xl md:text-4xl font-bold mb-4 mt-[-50px]">
//         Ready to separate real reviews from fake ones?
//       </h1>
//       <p className="text-md md:text-lg mb-8 max-w-xl text-gray-600">
//         Try our review analyzer now and get instant insights about any product
//         review.
//       </p>
//       <button className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:brightness-110 transition duration-300">
//         Start Analyzing
//       </button>
//     </div>
//   );
// }
import React from "react";

const features = [
  {
    imgSrc: "PER.jpeg",
    alt: "Performance Analysis",
    title: "Performance Analysis",
    description: "Real-time data insights to track and enhance player output.",
  },
  {
    imgSrc: "per2.jpeg",
    alt: "Win-Loss Prediction",
    title: "Win-Loss Prediction",
    description: "Predict outcomes using AI and machine learning models.",
  },
  {
    imgSrc: "per3.jpg",
    alt: "Training Recommendations",
    title: "Training Recommendations",
    description: "Customized drills and suggestions based on match data.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-center text-3xl font-bold mb-4">Main Features</h2>
      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Stats Perform are a critical vector for audience growth, revenue growth,
        and on-field success
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {features.map(({ imgSrc, alt, title, description }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-md w-72 text-center transform transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src={imgSrc}
              alt={alt}
              className="h-44 w-full object-contain mb-4 rounded-md"
            />
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
