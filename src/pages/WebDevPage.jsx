import React, { useEffect } from "react";
import CarouselSectionComponent from "../components/CarouselSectionComponent";
import WebsiteFeaturesSectionComponent from "../components/WebsiteFeaturesSectionComponent";

const WebDevPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CarouselSectionComponent />
      <WebsiteFeaturesSectionComponent />
    </div>
  );
};

export default WebDevPage;
