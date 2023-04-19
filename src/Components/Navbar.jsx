import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Resume from "../Resume/Suraj-Yadav-Resume.pdf";

const Links = [
  { title: "Home", href: "#home", classs: "nav-link home" },
  { title: "About", href: "#about", classs: "nav-link about" },
  { title: "Skills", href: "#skills", classs: "nav-link skills" },
  { title: "Project", href: "#projects", classs: "nav-link projects" },
  { title: "Contact", href: "#contact", classs: "nav-link contact" },
];

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
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}>
              {Links.map(({ title, classs, href }) => (
                <Link
                  px={2}
                  fontSize={"20px"}
                  color={"#fff"}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    color: "#4299E1",
                  }}
                  href={href}
                  className={classs}>
                  {title}
                </Link>
              ))}
              <Link
                className="nav-link resume"
                href={Resume}
                download
                target="_blank">
                <Button
                  borderRadius={"3%"}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}>
                  Resume
                </Button>
              </Link>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ title, href }) => (
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
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>content</Box>
    </>
  );
}
// /* <NavLink key={link}>{link}</NavLink> */
