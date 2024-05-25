import React, {useEffect} from "react";
import HeroSectionComponent from "../components/HeroSectionComponent";
import TestimonialsSectionComponent from "../components/TestimonialsSectionComponent";
import ServicesSectionComponent from "../components/ServicesSectionComponent";
import PricingChartSectionComponent from "../components/PricingChartSectionComponent";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
