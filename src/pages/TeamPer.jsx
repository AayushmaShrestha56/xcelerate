import React from "react";
import Team1 from "../components/Team1";
import Team2 from "../components/Team2";
import Team3 from "../components/Team3";
import Team4 from "../components/team4";
import ScrollRevealAdvanced from "../components/ScrollRevealAdvanced";

const TeamPer = () => {
  return (
    <>
      <ScrollRevealAdvanced direction="up">
        <Team1 />
      </ScrollRevealAdvanced>

      <ScrollRevealAdvanced direction="left">
        <Team2 />
      </ScrollRevealAdvanced>

      <ScrollRevealAdvanced direction="right">
        <Team3 />
      </ScrollRevealAdvanced>

      <ScrollRevealAdvanced direction="up">
        <Team4 />
      </ScrollRevealAdvanced>
    </>
  );
};

export default TeamPer;
