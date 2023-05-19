import { Box, Center, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <Box py={["20px", "", "80px"]} id="about" className="about section">
      <Center pb="30px">
        <Heading color={"#B0BEC5"}>All About Me</Heading>
      </Center>
      <Flex
        justifyContent={"center"}
        flexWrap="wrap"
        m={"auto"}
        gap={2}
        width={"80%"}>
        {/* <Box> */}
        <Text
          // px={["10px", "7px", "2px"]}
          textAlign={["left", "left", "right", "right"]}
          fontSize={["22px", "25px", "35px"]}
          lineHeight="1.13em"
          fontWeight={"bold"}
          letterSpacing="0.01em">
          Hi. I'm{" "}
          <Text color={"#fff"} display="inline">
            Suraj
          </Text>
          , nice to meet <br />
          you. Please take a look <br />
          around.
        </Text>
        {/* </Box> */}
        {/* <Box> */}
        <Text
          // px={["40px", "7px", "2px"]}
          // border={"1px solid"}
          color="#fff"
          id="user-detail-intro"
          // border={"1px solid"}
          w={["90%", "80%", "80%", "40%"]}>
          Passionate Full-Stack Web Developer with strong design and problem-
          solving skills. A highly disciplined and motivated person having
          proficiency in a wide range of front-end and back-end skills like
          HTML, CSS, Node, JavaScript, React,Redux etc. Looking forward to
          launching a career as a React developer.
        </Text>
        {/* </Box> */}
      </Flex>
    </Box>
  );
}
