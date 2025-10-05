import React from "react";
import Service1 from "../components/service1";
import Service3 from "../components/Service3";
import Service4 from "../components/Service4";
import Service5 from "../components/Service5";
import ScrollReveal from "../components/ScrollReveal";

const ServicePage = () => {
  return (
    <>
      <ScrollReveal>
        <Service1 />
      </ScrollReveal>

      <ScrollReveal>
        <Service3 />
      </ScrollReveal>

      <ScrollReveal>
        <Service4 />
      </ScrollReveal>

      <ScrollReveal>
        <Service5 />
      </ScrollReveal>
    </>
  );
};

export default ServicePage;
