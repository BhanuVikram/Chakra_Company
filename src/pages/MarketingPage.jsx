import React, {useEffect} from "react";
import CarouselSectionComponent from "../components/CarouselSectionComponent";
import MarketingServicesSectionComponent from "../components/MarketingServicesSectionComponent";

const MarketingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CarouselSectionComponent />
      <MarketingServicesSectionComponent />
    </div>
  );
};

export default MarketingPage;
