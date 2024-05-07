import React from "react";
import { Link } from "react-router-dom";
import logoLight from "../assets/logos/chakra-company-logo-white.svg";
import logoDark from "../assets/logos/chakra-company-logo-black.svg";

import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Links = [
  { page: "Home", route: "/" },
  { page: "Websites", route: "/webdevelopment" },
  { page: "Mobile Apps", route: "/appdevelopment" },
  { page: "Marketing", route: "/marketing" },
  { page: "Contact Us", route: "/contact" },
];

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const FooterLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 4, md: 12 }}
          mt={{ base: 8, md: 12 }}
          mb={{ base: 8, md: 4 }}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          {Links.map((link, index) => (
            <Link key={index} to={link.route}>
              {link.page}
            </Link>
          ))}
        </Stack>
        {colorMode === "light" ? (
          <Link to={"/"}>
            <Image
              cursor={"pointer"}
              src={logoDark}
              alt="Chakra Company logo"
              width={"140px"}
              margin={{ base: "auto", md: "4" }}
            />{" "}
          </Link>
        ) : (
          <Link to={"/"}>
            <Image
              cursor={"pointer"}
              src={logoLight}
              alt="Chakra Company logo"
              width={"140px"}
              margin={{ base: "auto", md: "4" }}
            />
          </Link>
        )}
      </Container>

      <Box
        borderTopWidth={1}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", lg: "row" }}
          spacing={4}
          justify={{ base: "center", lg: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text
            fontSize={{ base: "xs", md: "sm", lg: "md" }}
            my={{ sm: 0, md: 4, lg: 0, xl: 0 }}
          >
            © 2024 Chakra Company. All rights reserved.
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default FooterLayout;
