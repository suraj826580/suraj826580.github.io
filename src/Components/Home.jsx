import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import TypeWritter from "./TypeWritter";

export default function Home() {
  const hadleResumeRedirect = () => {};
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }} id="home">
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"xl"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text>
              <Box display={"flex"} gap={2}>
                <Text> Hey, </Text> <Text color={"#fff"}>I'm Suraj👋</Text>
              </Box>
            </Text>
            <Text color={"blue.400"} as={"span"} fontSize={"4xl"}>
              <TypeWritter />
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Self-driven, quick starter, passionate programmer with a curious
            mind who enjoys solving problems and working on new projects.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              onClick={hadleResumeRedirect}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}>
              Resume
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
        <Image
          objectFit={"cover"}
          h={["250px", "350px", "500px"]}
          src={
            "https://abdenassar-portfolio-4smfcqph6-abdenassaramimi99-gmailcom.vercel.app/static/media/illistration.1f485184.png"
          }
          borderRadius={"5%"}
        />
      </Flex>
    </Stack>
  );
}
