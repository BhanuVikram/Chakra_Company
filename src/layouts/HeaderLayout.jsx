import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/chakra-company-logo-white.svg";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
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

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box cursor={"pointer"}>
            <img src={logo} alt="Chakra Company logo" width={"140px"} />
          </Box>
          <HStack spacing={4} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={{ base: 4, lg: 20 }}
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
            <Link to={"/contact"}>
              <NavLink>Contact Us</NavLink>
            </Link>
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
