import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function GCC() {
  return (
    <Box textAlign="center">
      <Center>
        <Heading color="#B0BEC5" fontSize={["20px", "25px", "30px", "35px"]}>
          GITHUB CONTRIBUTION CALENDER
        </Heading>
      </Center>
      <Box>
        <Center m={["20px", "30px", "50px"]}>
          <GitHubCalendar
            username="suraj826580"
            hideTotalCount={"false"}
            color={"#4299e1"}
          />
        </Center>
      </Box>
    </Box>
  );
}
