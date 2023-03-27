import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function GitHubStat() {
  return (
    <Box py={["20px"]} px={["20px", "60px", "80px"]}>
      <Center pb="30px">
        <Heading color="#B0BEC5">GITHUB STATISTICS</Heading>
      </Center>
      <Box>
        <Flex
          justifyContent={"center"}
          alignItems="center"
          gap={6}
          flexWrap="wrap">
          {" "}
          <p>
            <img
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=suraj826580&show_icons=true&locale=en"
              alt="suraj826580"
            />
          </p>
          <p>
            <img
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=suraj826580&"
              alt="suraj826580"
            />
          </p>
        </Flex>
      </Box>
    </Box>
  );
}
