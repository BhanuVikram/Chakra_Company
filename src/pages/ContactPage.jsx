import React, { useEffect } from "react";
import ContactFormComponent from "../components/ContactFormSectionComponent";
import FAQSectionComponent from "../components/FAQSectionComponent";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ContactFormComponent />
      <FAQSectionComponent />
    </div>
  );
};

export default ContactPage;
