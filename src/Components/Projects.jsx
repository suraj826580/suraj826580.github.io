import { Box, Center, Heading, Image, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import MailChimp from "../Project_Videos/MainChimp.mp4";
import RedMeat from "../Project_Videos/RedMeat.mp4";
import Portfiolio from "../Project_Videos/Portfolio.mp4";
import TATA_1mg from "../Project_Videos/TATA-1mg.mp4";
const projectsArray = [
  {
    logo: Portfiolio,
    description:
      "Mailchimp is a marketing automation platform and email marketing service",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    logo: TATA_1mg,
    description:
      "Licious is an online delivery platform intended to offer quality meat products",
    techStack: ["Reactjs", "Chakra UI", "React-Router-Dom"],
  },
  {
    logo: RedMeat,
    description:
      "Mailchimp is a marketing automation platform and email marketing service",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    logo: MailChimp,
    description:
      "Licious is an online delivery platform intended to offer quality meat products",
    techStack: ["Reactjs", "Chakra UI", "React-Router-Dom"],
  },
];
export default function Projects() {
  return (
    <Box py={["0px", "10px", "30px"]} id="projects" width={"80%"} m={"auto"}>
      <Center pb="30px" textAlign="center">
        <Heading color="#B0BEC5">Projects</Heading>
      </Center>
      <Box>
        <Grid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
          ]}
          gap={[0, 5, 10]}>
          {projectsArray.map(({ logo }) => {
            return (
              <GridItem key={Math.random()} zIndex={2}>
                <video autoPlay loop>
                  <source src={logo} type="video/mp4" />
                </video>
              </GridItem>
            );
          })}
        </Grid>
        <Box>{/** */}</Box>
      </Box>
    </Box>
  );
}
