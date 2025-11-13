import React from "react";
import About0 from "../components/About0";
import About1 from "../components/About1";
import About2 from "../components/About2";
import About3 from "../components/About3";
import ScrollRevealAdvanced from "../components/ScrollRevealAdvanced";

const AboutPage = () => {
  return (
    <>
      
        <About0 />
      
      <ScrollRevealAdvanced direction="left">
        <About1 />
      </ScrollRevealAdvanced>

      <ScrollRevealAdvanced direction="right">
        <About2 />
      </ScrollRevealAdvanced>

      <ScrollRevealAdvanced direction="up">
        <About3 />
      </ScrollRevealAdvanced>
    </>
  );
};

export default AboutPage;
