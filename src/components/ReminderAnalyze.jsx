
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
            className="bg-white rounded-xl p-6 shadow-md w-72 text-center transform transition-transform duration-600 hover:-translate-y-1"
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
