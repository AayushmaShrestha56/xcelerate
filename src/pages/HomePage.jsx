import React from "react";
import Intro from "../components/Intro";
import VideoSec from "../components/VideoSec";
import StatsSection from "../components/StatsSection";
import ReminderAnalyze from "../components/ReminderAnalyze";
import AboutUs from "../components/AboutUs";
import AboutUsMission from "../components/AboutUsMission";
import Newsletter from "../components/Newsletter";

const HomePage = () => {
  return (
    <>
      <Intro />
      <VideoSec />
      <StatsSection />
      <ReminderAnalyze />
      <AboutUs />
      <AboutUsMission />
      <Newsletter />
    </>
  );
};

export default HomePage;