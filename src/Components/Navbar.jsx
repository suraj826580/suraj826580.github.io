import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Resume from "../Resume/Suraj-Yadav-Resume.pdf";

// const Links = [
//   { title: "Home", href: "#home", classs: "nav-link home" },
//   { title: "About", href: "#about", classs: "nav-link about" },
//   { title: "Skills", href: "#skills", classs: "nav-link skills" },
//   { title: "Project", href: "#projects", classs: "nav-link projects" },
//   { title: "Contact", href: "#contact", classs: "nav-link contact" },
// ];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        id="nav-menu"
        bg={"#1f1f1f"}
        px={4}
        position={"fixed"}
        w={"100%"}
        zIndex={1}
        top={0}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={["right", "right", "center"]}>
          <IconButton
            _hover={{
              bg: "transparent",
            }}
            bg={"#1f1f1f"}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* <HStack spacing={8} alignItems={"center"}> */}
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {/* {Links.map(({ title, classs, href }) => (
                <Link
                  className={classs}
                  px={2}
                  fontSize={"20px"}
                  color={"#fff"}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "#4299E1",
                  }}
                  href={href}>
                  {title}
                </Link>
              ))} */}

            <Link
              className={"nav-link home"}
              px={2}
              fontSize={"20px"}
              color={"#fff"}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                color: "#4299E1",
              }}
              href={"#home"}>
              Home
            </Link>
            <Link
              className={"nav-link about"}
              px={2}
              fontSize={"20px"}
              color={"#fff"}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                color: "#4299E1",
              }}
              href={"#about"}>
              About
            </Link>
            <Link
              className={"nav-link skills"}
              px={2}
              fontSize={"20px"}
              color={"#fff"}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                color: "#4299E1",
              }}
              href={"#skills"}>
              Skills
            </Link>
            <Link
              className={"nav-link projects"}
              px={2}
              fontSize={"20px"}
              color={"#fff"}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                color: "#4299E1",
              }}
              href={"#projects"}>
              Projects
            </Link>
            <Link
              className={"nav-link contact"}
              px={2}
              fontSize={"20px"}
              color={"#fff"}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                color: "#4299E1",
              }}
              href={"#contact"}>
              Contact
            </Link>
            <Button
              className="nav-link resume"
              borderRadius={0}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/14gIM2RBxRrELxsRkN9O6gj9NJcDEQaWf/view?usp=sharing"
                );
              }}
              id="resume-button-1"
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}>
              <Link
                href={Resume}
                download
                target="_blank"
                id="resume-link-1"
                _hover={{
                  textDecoration: "none",
                }}>
                Resume
              </Link>
            </Button>
            {/* </HStack> */}
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* {Links.map(({ title, href }) => (
                <Link
                  px={2}
                  color={"#fff"}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "#4299E1",
                  }}
                  href={href}>
                  {title}
                </Link>
              ))} */}
              <Link
                className={"nav-link home"}
                px={2}
                fontSize={"20px"}
                color={"#fff"}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  color: "#4299E1",
                }}
                href={"#home"}>
                Home
              </Link>
              <Link
                className={"nav-link about"}
                px={2}
                fontSize={"20px"}
                color={"#fff"}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  color: "#4299E1",
                }}
                href={"#about"}>
                About
              </Link>
              <Link
                className={"nav-link skills"}
                px={2}
                fontSize={"20px"}
                color={"#fff"}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  color: "#4299E1",
                }}
                href={"#skills"}>
                Skills
              </Link>
              <Link
                className={"nav-link projects"}
                px={2}
                fontSize={"20px"}
                color={"#fff"}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  color: "#4299E1",
                }}
                href={"#projects"}>
                Projects
              </Link>
              <Link
                className={"nav-link contact"}
                px={2}
                fontSize={"20px"}
                color={"#fff"}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  color: "#4299E1",
                }}
                href={"#contact"}>
                Contact
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
