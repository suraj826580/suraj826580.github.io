import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Flip from "react-reveal/Flip";
import Resume from "../Resume/Suraj-Yadav-Resume.pdf";
import TypeWritter from "./TypeWritter";
import logo from "../Images/Suraj-Yadav-green-image.jpg";

export default function Home() {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      id="home"
      py={["40px", "60px", "80px"]}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Flip left>
          <Stack spacing={4} w={"full"} maxW={"xl"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text>
                <Box display={"flex"} gap={2}>
                  <Text> Hey, </Text>{" "}
                  <Text color={"#fff"} id="user-detail-name">
                    I'm Suraj👋
                  </Text>
                </Box>
              </Text>
              <Text color={"blue.400"} as={"span"} fontSize={"4xl"}>
                <TypeWritter />
              </Text>{" "}
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color={"gray.500"}
              id="user-detail-intro">
              Self-driven, quick starter, passionate programmer with a curious
              mind who enjoys solving problems and working on new projects.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/16L2vxa_3gtfPC5HeL45A8hlpH4SP_ZjS/view?usp=sharing"
                  );
                }}
                id="resume-button-2"
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}>
                <Link
                  href={Resume}
                  download
                  target="_blank"
                  id="resume-link-2"
                  _hover={{
                    textDecoration: "none",
                  }}>
                  Download Resume
                </Link>
              </Button>
            </Stack>
          </Stack>
        </Flip>
      </Flex>
      <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
        <Box width={"400px"}>
          <Flip right>
            <Image
              className="home-img"
              width={"100%"}
              p={["20px", "", ""]}
              borderRadius={"50%"}
              objectFit={"cover"}
              // src={
              //   "https://abdenassar-portfolio-4smfcqph6-abdenassaramimi99-gmailcom.vercel.app/static/media/illistration.1f485184.png"
              // }
              src={logo}
            />
          </Flip>
        </Box>
      </Flex>
    </Stack>
  );
}
