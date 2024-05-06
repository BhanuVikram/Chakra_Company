import React from "react";
import { Link } from "react-router-dom";
import logoLight from "../assets/logos/chakra-company-logo-white.svg";
import logoDark from "../assets/logos/chakra-company-logo-black.svg";

import { BsSun, BsMoonStarsFill } from "react-icons/bs";

import {
  Avatar,
  Box,
  Flex,
  HStack,
  Text,
  Button,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  { page: "Home", route: "/" },
  { page: "Websites", route: "/webdevelopment" },
  { page: "Mobile Apps", route: "/appdevelopment" },
  { page: "Marketing", route: "/marketing" },
];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

const HeaderLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        position={"sticky"}
        left={0}
        right={0}
        top={0}
        zIndex={10}
        minH={"6vh"}
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box
            cursor={"pointer"}
            m={4}
            width={{ base: "100%", md: "auto" }}
            margin={{ base: "auto", md: "0" }}
          >
            {colorMode === "light" ? (
              <Image
                src={logoDark}
                alt="Chakra Company logo"
                width={"140px"}
                margin={{ base: "auto", md: "4" }}
              />
            ) : (
              <Image
                src={logoLight}
                alt="Chakra Company logo"
                width={"140px"}
                margin={{ base: "auto", md: "4" }}
              />
            )}
          </Box>
          <HStack spacing={4} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={{ base: 4, lg: 10, xl: 20 }}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, index) => (
                <Link key={index} to={link.route}>
                  <NavLink>{link.page}</NavLink>
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Box display={{ base: "none", lg: "block" }}>
              <Link to={"/contact"}>
                <NavLink>Contact Us</NavLink>
              </Link>
            </Box>
            <Button
              aria-label="Toggle Color Mode"
              onClick={toggleColorMode}
              _focus={{ boxShadow: "none" }}
              w="fit-content"
              m={{ base: 0, md: 5 }}
            >
              {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, index) => (
                <Link key={index} to={link.route}>
                  <NavLink>{link.page}</NavLink>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default HeaderLayout;
