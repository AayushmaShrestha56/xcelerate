// import React from "react";
// import { motion } from "framer-motion";

// const ReviewCheckerLanding = () => {
//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-6"
//       style={{
//         background:
//           "linear-gradient(90deg, #F0FDFA 0%, #E6FFFA 50%, #CCFBF1 100%)",
//       }}
//     >
//       <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
//         {/* Left Section */}
//         <div className="max-w-xl">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-4 font-black">
//             Check if a review is{" "}
//             <span className="bg-gradient-to-r from-teal-700 to-teal-400 bg-clip-text text-transparent font-black">
//               real or fake
//             </span>{" "}
//             with AI
//           </h1>
//           <p className="text-gray-700 mb-6 text-lg">
//             Identify authentic product reviews with our powerful AI sentiment
//             analysis. Get accurate insights and make informed purchase
//             decisions.
//           </p>
//           <div className="flex gap-4">
//             <button
//               className="text-white font-medium py-2.5 px-6 rounded-lg shadow-md"
//               style={{
//                 background: "linear-gradient(90deg, #14B8A6, #14B8A6)",
//                 boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)",
//               }}
//             >
//               Try review analyzer
//             </button>
//             <button
//               className="text-black font-medium py-2.5 px-6 rounded-lg shadow-md"
//               style={{
//                 backgroundColor: "#FDE047",
//                 boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)",
//               }}
//             >
//               Learn more
//             </button>
//           </div>
//         </div>

//         {/* Right Section - Image */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src="/Intro.png"
//             alt="Review Analysis Illustration"
//             className="w-[480px] max-w-full"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ReviewCheckerLanding;
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