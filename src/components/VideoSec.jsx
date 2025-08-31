
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
