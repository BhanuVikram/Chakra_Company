import React, { useEffect } from "react";
import CarouselSectionComponent from "../components/CarouselSectionComponent";

const WebDevPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CarouselSectionComponent />
    </div>
  );
};

export default WebDevPage;
