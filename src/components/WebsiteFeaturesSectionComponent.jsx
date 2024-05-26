import React from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import codeRain from "../assets/images/code.png";

const WebsiteFeaturesSectionComponent = function () {
  return (
    <Box bg={"gray.800"} position={"relative"} mx={"auto"}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage={codeRain}
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"50%"}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={"linear(to-r, gray.800 10%, transparent)"}
          w={"full"}
          h={"full"}
        />
      </Flex>
      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"gray.400"}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 20, xl: 36 }}
          >
            <Box mb={{ base: 8, md: 12 }}>
              <Text
                fontFamily={"heading"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={"gray.500"}
              >
                Technology
              </Text>
              <Heading
                color={"white"}
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                State of the art websites and web apps
              </Heading>
              <Text fontSize={"xl"} color={"gray.400"}>
                We use cutting-edge Technology to build beautifully designed
                websites and web apps. We take the stress of development and
                security so you don't have to.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={"heading"}
                    fontSize={"3xl"}
                    fontWeight={"900"}
                    color={"white"}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={"xl"} color={"gray.400"}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
};

const StatsText = ({ children }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "50+",
    content: (
      <>
        <StatsText>Stunning</StatsText> web applications and intuitive mobile
        apps that captivate your users
      </>
    ),
  },
  {
    title: "24/7",
    content: (
      <>
        <StatsText>Analytics</StatsText> enabled right in your dashboard without
        history limitations
      </>
    ),
  },
  {
    title: "100%",
    content: (
      <>
        <StatsText>Data-driven</StatsText> decision making with real-time
        analytics and insightful dashboards
      </>
    ),
  },
  {
    title: "25+",
    content: (
      <>
        <StatsText>Companies</StatsText> partner with us to bring your
        innovative ideas to life and achieve digital success.
      </>
    ),
  },
];

export default WebsiteFeaturesSectionComponent;
