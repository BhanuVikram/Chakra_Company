import React, { useEffect } from "react";
import CarouselSectionComponent from "../components/CarouselSectionComponent";
import AppFeaturesSectionComponent from "../components/AppFeaturesSectionComponent";

const AppDevPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CarouselSectionComponent />
      <AppFeaturesSectionComponent />
    </div>
  );
};

export default AppDevPage;
