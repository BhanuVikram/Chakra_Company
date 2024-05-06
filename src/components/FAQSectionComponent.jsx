import React, { useState, useEffect, useRef } from "react";

import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";

const FAQs = [
  {
    question: "What is minimalism in modern design?",
    answer:
      "Minimalism is a design philosophy that emphasizes simplicity and functionality. In modern design, it translates to clean lines, uncluttered layouts, and a focus on negative space (empty areas) to create a sense of spaciousness and order. Minimalist designs prioritize user experience by ensuring clarity and ease of use. Color palettes are often limited, with neutral tones being dominant. Elements like typography and imagery are used strategically to convey information effectively without overwhelming the user. Minimalism is not about being bland; it's about using intentionality and restraint to create a calming and impactful design.",
  },
  {
    question: "What is the importance of responsive design in web development?",
    answer:
      "Responsive design is a web development approach that ensures websites render optimally across various devices, from desktops and laptops to tablets and smartphones. In today's world, where users access information through a multitude of screens, responsive design is no longer an option, it's a necessity. It provides a seamless user experience regardless of the device, leading to increased user engagement and conversion rates. Responsive design also simplifies website maintenance by eliminating the need for separate mobile and desktop versions. This translates to cost savings and a more consistent brand image across platforms.",
  },
  {
    question: "What is the role of white space in modern design?",
    answer:
      "White space, also known as negative space, refers to the empty areas between elements in a design. It might seem counterintuitive, but white space plays a crucial role in modern design. It provides breathing room for the eye, allowing users to focus on the essential content and preventing the design from feeling cluttered. White space helps guide the user's visual flow, directing their attention to specific elements and creating a hierarchy of importance. It also enhances readability by creating space between text blocks and images, making the content easier to digest. Used strategically, white space can contribute to a sense of luxury, sophistication, and a clean aesthetic.",
  },
  {
    question: "What are the benefits of using microinteractions in web design?",
    answer:
      "Microinteractions are subtle animations or interactions that occur when a user performs a specific action on a website, like hovering over a button or clicking on a link. These subtle animations can significantly enhance the user experience by providing immediate feedback on user actions, confirming successful interactions, and guiding users through the website. Microinteractions can also add a touch of delight and personality to a website, making it more engaging and memorable. Additionally, they can be used to subtly communicate information or functionality, such as indicating the loading of content or the presence of interactive elements.",
  },
  {
    question: "How can user experience (UX) be improved through web design?",
    answer:
      "Web design plays a critical role in shaping user experience (UX). By prioritizing UX principles, web designers can create websites that are intuitive, easy to navigate, and meet the user's needs.  This includes aspects like clear and concise navigation menus, logical page layouts, and well-organized content.  Web design can also improve UX by using visual cues like icons and contrasting colors to guide users and highlight important information. Accessibility is another key factor; websites should be usable by everyone, regardless of their abilities. This can be achieved through features like alternative text descriptions for images and keyboard navigation support. Ultimately, good web design anticipates user needs and creates a journey that is both enjoyable and efficient.",
  },
  {
    question: "What are the advantages of using hero images in web design?",
    answer:
      "Hero images are large, prominent images that are typically placed at the top of a webpage. They serve several purposes in web design. A well-chosen hero image can immediately capture the user's attention and visually communicate the brand identity or the website's purpose. High-quality hero images can evoke emotions and create a lasting impression on visitors. They can also be used to tell a story or showcase a product or service. Hero images can further enhance user experience by setting the overall tone and aesthetic for the website.  When paired with clear calls to action, hero images can also be a powerful tool for driving user engagement and conversions.",
  },
  {
    question:
      "What is the difference between UI (user interface) and UX (user experience) in web design?",
    answer:
      "UI (user interface) and UX (user experience) are two closely related concepts in web design, but they represent different aspects of the user's interaction with a website. UI refers to the visual elements and functionalities that users interact with directly. This includes buttons, menus, icons, typography, color schemes, and overall layout.  In simpler terms, it's the look and feel of the website. UX, on the other hand, focuses on the overall experience.",
  },
];

const FAQSectionComponent = () => {
  return (
    <Box m={20}>
      <VStack spacing={2} textAlign="center" mb={12}>
        <Heading a s="h2" fontSize="2xl">
          Frequently Asked Questions
        </Heading>
      </VStack>
      <Accordion
        maxW="1000"
        m="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        allowMultiple
      >
        {FAQs.map((faq, index) => (
          <AccordionItem key={index} pt={6} pb={6}>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textalign="left"
                  fontSize="20"
                  fontWeight={500}
                >
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} p={5} mb={5} borderRadius={5} fontSize={17}>
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default FAQSectionComponent;
