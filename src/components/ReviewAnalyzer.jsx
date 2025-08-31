// import React from "react";

// const ReviewAnalyzer = () => {
//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
//       style={{
//         background:
//           "linear-gradient(90deg, #F0FDFA 0%, #E6FFFA 50%, #CCFBF1 100%)",
//       }}
//     >
//       {/* Heading outside the box */}
//       <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F766E] mb-2 text-center">
//         Review Analyzer
//       </h2>
//       <p className="text-center text-gray-700 text-lg mb-8 max-w-2xl">
//         Paste a product review below to analyze its authenticity and sentiment
//       </p>

//       {/* White box */}
//       <div className="w-full max-w-5xl border border-gray-200 bg-white p-8 rounded-xl shadow-md">
//         {/* Form area */}
//         <div className="relative mb-8">
//           {/* Label */}
//           <label className="block text-gray-800 font-medium mb-2">
//             Paste product review here
//           </label>

//           {/* Example buttons on top right */}
//           <div className="absolute right-0 top-0 flex gap-4 mt-[-2px]">
//             <button className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:brightness-110 transition duration-300">
//               Example 1
//             </button>
//             <button className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:brightness-110 transition duration-300">
//               Example 2
//             </button>
//           </div>

//           {/* Textarea */}
//           <textarea
//             placeholder="Enter the product review you want to analyze……"
//             className="w-full mt-7 h-48 rounded-md p-4 bg-[#ECFDF5] text-gray-800 placeholder-gray-400 outline-none resize-none "
//           ></textarea>
//         </div>

//         {/* Analyze Button */}
//         <div className="text-center">
//           <button className="bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:brightness-110 transition duration-300">
//             Start Analyzing
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewAnalyzer;
import React from "react";

const ReviewAnalyzer = () => {
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

export default ReviewAnalyzer;
