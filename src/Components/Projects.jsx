import { Box, Center, Heading, Image } from "@chakra-ui/react";
import React from "react";
import MailChimp from "../ProjectsImages/MailChimp.png";
import licious from "../ProjectsImages/licious.png";
const projectsArray = [
  {
    logo: MailChimp,
    description:
      "Mailchimp is a marketing automation platform and email marketing service",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    logo: licious,
    description:
      "Licious is an online delivery platform intended to offer quality meat products",
    techStack: ["Reactjs", "Chakra UI", "React-Router-Dom"],
  },
];
export default function Projects() {
  return (
    <Box py={["0px", "60px", "80px"]} id="project">
      <Center pb="30px" textAlign="center">
        <Heading color="#B0BEC5">Projects</Heading>
      </Center>
      <Box>
        <Box w="70%" margin={"auto"}>
          {projectsArray.map(({ logo }) => {
            return (
              <Box>
                <Image
                  src={logo}
                  w="100%"
                  h="auto"
                  py={["15px", "20px", "30px"]}
                />
              </Box>
            );
          })}
        </Box>
        <Box>{/** */}</Box>
      </Box>
    </Box>
  );
}
