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
              id="github-stats-card"
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=suraj826580&show_icons=true&locale=en"
              alt="suraj826580"
            />
          </p>
          <p>
            <img
              id="github-streak-stats"
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=suraj826580&"
              alt="suraj826580"
            />
          </p>
        </Flex>
        <Center pt={6}>
          <p>
            <img
              id="github-top-langs"
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=suraj826580&show_icons=true&locale=en&layout=compact"
              alt="suraj826580"
            />
          </p>
        </Center>
      </Box>
    </Box>
  );
}
