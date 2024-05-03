import React from "react";
import HeroSectionComponent from "../components/HeroSectionComponent";
import TestimonialsSectionComponent from "../components/TestimonialsSectionComponent";
import ServicesSectionComponent from "../components/ServicesSectionComponent";

const HomePage = () => {
  return (
    <div>
      <HeroSectionComponent />
      <TestimonialsSectionComponent />
      <ServicesSectionComponent />

    </div>
  );
};

export default HomePage;
