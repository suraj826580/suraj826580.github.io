import {
  Box,
  Center,
  Flex,
  Heading,
  Link,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const arr = [
  {
    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/suraj-yadav-068230246/",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/270/270798.png",
    title: "Github",
    link: "https://github.com/suraj826580",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/1384/1384172.png",
    title: "Instagram",
    link: "",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/3799/3799742.png",
    title: "surajyadav8265@gmail.com",
    link: "surajyadav8265@gmail.com",
  },
];

export default function GetInTouch() {
  return (
    <Box pb={["50px"]} id="contact">
      <Center pb="30px" textAlign="center">
        <Heading color="#B0BEC5">Get In Touch</Heading>
      </Center>
      <Flex justifyContent={"center"} gap={6} flexWrap="wrap">
        {arr.map(({ logo, title, link }) => {
          return (
            <Box>
              <Box w={"60px"} margin={"auto"}>
                <Link href={link}>
                  <Image src={logo} w="100%" h={"auto"} />
                </Link>
              </Box>
              <Text color={"#fff"} textAlign={"center"}>
                {title}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}
