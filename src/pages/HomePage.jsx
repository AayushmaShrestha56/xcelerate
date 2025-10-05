import React from "react";
import Intro from "../components/Intro";
import VideoSec from "../components/VideoSec";
import StatsSection from "../components/StatsSection";
import ReminderAnalyze from "../components/ReminderAnalyze";
import AboutUs from "../components/AboutUs";
import AboutUsMission from "../components/AboutUsMission";
import ScrollRevealAdvanced from "../components/ScrollRevealAdvanced";

const HomePage = () => {
  return (
    <>
      <ScrollRevealAdvanced direction="up">
        <Intro />
      </ScrollRevealAdvanced>

      <ScrollRevealAdvanced direction="left">
        <VideoSec />
      </ScrollRevealAdvanced>

      <ScrollRevealAdvanced direction="up">
        <StatsSection />
      </ScrollRevealAdvanced>

      <ScrollRevealAdvanced direction="right">
        <ReminderAnalyze />
      </ScrollRevealAdvanced>

      <ScrollRevealAdvanced direction="up">
        <AboutUs />
      </ScrollRevealAdvanced>

      <ScrollRevealAdvanced direction="up">
        <AboutUsMission />
      </ScrollRevealAdvanced>
    </>
  );
};

export default HomePage;
