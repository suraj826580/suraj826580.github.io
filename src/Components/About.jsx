import { Box, Center, Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <Box py="80px" id="about">
      <Center pb="30px">
        <Heading color={"#B0BEC5"}>All About Me</Heading>
      </Center>
      <Flex justifyContent={"center"} flexWrap="wrap" gap={3}>
        <Box>
          <Text
            textAlign={"right"}
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
            around
          </Text>
        </Box>
        <Box>
          <Text px="20px" color="#fff">
            Enthusiastic and aspiring full-stack developer. Open minded <br />{" "}
            and problem solver, with a keen interest in emerging tech and
            <br />
            building creativity. Looking forward to a challenging work
            <br />
            environment for thinking outside the box and to grow as a<br />{" "}
            person and a developer as well.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
