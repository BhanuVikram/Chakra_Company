import React from "react";
import HeroSectionComponent from "../components/HeroSectionComponent";
import TestimonialsSectionComponent from "../components/TestimonialsSectionComponent";
import ServicesSectionComponent from "../components/ServicesSectionComponent";
import PricingChartSectionComponent from "../components/PricingChartSectionComponent";

const HomePage = () => {
  return (
    <div>
      <HeroSectionComponent />
      <TestimonialsSectionComponent />
      <ServicesSectionComponent />
      <PricingChartSectionComponent />
    </div>
  );
};

export default HomePage;
