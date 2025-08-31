// import React from "react";

// const features = [
//   {
//     imgSrc: "/Real.png",
//     title: "Real Vs Fake Detection",
//     description:
//       "Advanced AI algorithms to detect fake online reviews with high accuracy.",
//     gradient: "bg-gradient-to-b from-[#F0FDFA] to-[#CCFBF1]",
//   },
//   {
//     imgSrc: "/Like.png",
//     title: "Sentiment Analysis",
//     description:
//       "Identify the emotional tone of reviews as positive, negative or neutral.",
//     gradient: "bg-gradient-to-b from-[#EFF6FF] to-[#DBEAFE]",
//   },
//   {
//     imgSrc: "/Analyzer.png",
//     title: "Review Scoring",
//     description:
//       "Get quantifiable scores that measure review authenticity and sentiment.",
//     gradient: "bg-gradient-to-b from-[#FEFCE8] to-[#FEF9C3]",
//   },
//   {
//     imgSrc: "/Insight.png",
//     title: "Aspect-Based Insights",
//     description:
//       "Discover sentiment trends for specific product aspects like quality or price.",
//     gradient: "bg-gradient-to-b from-[#FFEBFA] to-[#F5D9EE]",
//   },
// ];

// const KeyFeatures = () => {
//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-6"
//       style={{
//         background: "linear-gradient(90deg, #F8FAFC 0%, #F0FDF4 100%)",
//       }}
//     >
//       <div className="max-w-7xl w-full flex flex-col items-center justify-center gap-12">
//         {/* Title Section */}
//         <div className="text-center mb-4">
//           <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-teal-700 to-teal-400 bg-clip-text text-transparent mb-3">
//             Key Features
//           </h2>
//           <p className="text-gray-700 text-lg">
//             Our powerful tools help you analyze reviews and make better
//             decisions.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`${feature.gradient} rounded-2xl p-6 shadow-[0_6px_24px_rgba(0,0,0,0.08)]
//               transform transition-all duration-300 ease-in-out 
//               hover:scale-105 hover:shadow-[0_12px_32px_rgba(13,148,136,0.3)] 
//               flex flex-col justify-between min-h-[250px]`}
//             >
//               <div className="mb-4">
//                 <img
//                   src={feature.imgSrc}
//                   alt={feature.title}
//                   className="w-12 h-12 object-contain"
//                 />
//               </div>
//               <h3 className="font-extrabold text-lg mb-2">{feature.title}</h3>
//               <p className="text-sm text-gray-800">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KeyFeatures;

// // import React from "react";

// // const features = [
// //   {
// //     imgSrc: "/Real.png",
// //     title: "Real Vs Fake Detection",
// //     description:
// //       "Advanced AI algorithms to detect fake online reviews with high accuracy.",
// //     gradient: "bg-gradient-to-b from-[#F0FDFA] to-[#CCFBF1]",
// //   },
// //   {
// //     imgSrc: "/Like.png",
// //     title: "Sentiment Analysis",
// //     description:
// //       "Identify the emotional tone of reviews as positive, negative or neutral.",
// //     gradient: "bg-gradient-to-b from-[#EFF6FF] to-[#DBEAFE]",
// //   },
// //   {
// //     imgSrc: "/Analyzer.png",
// //     title: "Review Scoring",
// //     description:
// //       "Get quantifiable scores that measure review authenticity and sentiment.",
// //     gradient: "bg-gradient-to-b from-[#FEFCE8] to-[#FEF9C3]",
// //   },
// //   {
// //     imgSrc: "/Insight.png",
// //     title: "Aspect-Based Insights",
// //     description:
// //       "Discover sentiment trends for specific product aspects like quality or price.",
// //     gradient: "bg-gradient-to-b from-[#FFEBFA] to-[#F5D9EE]",
// //   },
// // ];

// // const KeyFeatures = () => {
// //   return (
// //     <div
// //       className="min-h-screen flex items-center justify-center px-6"
// //       style={{
// //         background: "linear-gradient(90deg, #F8FAFC 0%, #F0FDF4 100%)",
// //       }}
// //     >
// //       <div className="max-w-7xl w-full flex flex-col items-center justify-center gap-12">
// //         {/* Title Section */}
// //         <div className="text-center mb-4">
// //           <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-teal-700 to-teal-400 bg-clip-text text-transparent mb-3">
// //             Key Features
// //           </h2>
// //           <p className="text-gray-700 text-lg">
// //             Our powerful tools help you analyze reviews and make better
// //             decisions.
// //           </p>
// //         </div>

// //         {/* Features Grid */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
// //           {features.map((feature, index) => (
// //             <div
// //               key={index}
// //               className={`${feature.gradient} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between min-h-[250px]`}
// //             >
// //               <div className="mb-4">
// //                 <img
// //                   src={feature.imgSrc}
// //                   alt={feature.title}
// //                   className="w-12 h-12 object-contain"
// //                 />
// //               </div>
// //               <h3 className="font-extrabold text-lg mb-2">{feature.title}</h3>
// //               <p className="text-sm text-gray-800">{feature.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default KeyFeatures;
import React from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center px-6 bg-gray-100"
      style={{ backgroundColor: "#f5f5f5", padding: "60px" }}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex-1 min-w-[300px]"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            The Best Build Magic
            <br />
            With Stats Perform
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            The world's leading teams, broadcasters, media, apps, bookmakers and
            brands come to us to transform sporting magic into sports content,
            analysis and insight which powers audience growth, increased revenues
            and on-field success.
          </p>
          <p className="text-gray-700 text-lg">
            Enrich your sports analysis and power captivating experiences that
            bring fans closer to sport with our globally-predictions.
          </p>
        </motion.div>

        {/* Video Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex-1 min-w-[300px]"
        >
          <div className="overflow-hidden rounded-lg shadow-lg bg-black relative">
            <video
              controls
              poster="your-video-thumbnail.png"
              className="w-full border-b-4 border-red-600"
            >
              <source src="your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VideoSection;
