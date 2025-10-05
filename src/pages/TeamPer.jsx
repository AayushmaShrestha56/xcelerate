import React from "react";
import Team1 from "../components/team1";
import Team2 from "../components/team2";
<<<<<<< HEAD
import Team3 from "../components/Team3";
import Team4 from "../components/Team4";
import ScrollRevealAlternate from "../components/ScrollRevealAlternate";
=======
import Team3 from "../components/team3";
import Team4 from "../components/team4";

>>>>>>> 555613d0abfb66250dfb87f01e67a0cf7c159b57

const TeamPer = () => {
  const teams = [<Team1 />, <Team2 />, <Team3 />, <Team4 />];

  return (
    <>
      {teams.map((TeamComponent, index) => (
        <ScrollRevealAlternate key={index} index={index}>
          {TeamComponent}
        </ScrollRevealAlternate>
      ))}
    </>
  );
};

export default TeamPer;
