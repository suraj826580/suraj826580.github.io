import React from "react";
import {
  Grid,
  GridItem,
  Link,
  Image,
  Text,
  Center,
  Heading,
  Box,
} from "@chakra-ui/react";

const skill = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    title: "React",
    link: "https://react.dev",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    title: "Redux",
    link: "https://redux.js.org/",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    title: "Typescript",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
    title: "Mongo DB",
    link: "https://www.mongodb.com/",
  },
  {
    icon: "https://www.pixelbird.com.au/wp-content/uploads/2020/02/nodejs-image.png",
    title: "Node.js",
    link: "https://nodejs.org/en",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    title: "Express",
    link: "https://expressjs.com/",
  },
  {
    icon: "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
    title: "Chakra UI",
    link: "https://chakra-ui.com/",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    title: "Git",
    link: "https://git-scm.com/",
  },
];

export default function Skills() {
  return (
    <Box py={["0px", "60px", "80px"]} id="skills">
      <Center pb="30px" textAlign="center">
        <Heading color="#B0BEC5">Technologies and Tools</Heading>
      </Center>
      <Grid
        className="skills-card"
        p={["4%", "0%", "0%", "0%"]}
        w={["100%", "80%", "85%", "65%"]}
        gridTemplateColumns={[
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
          "repeat(5,1fr)",
        ]}
        gap={4}
        margin={"auto"}>
        {skill.map(({ icon, title, link }) => {
          return (
            <GridItem
              padding={"35px"}
              overflow="hidden"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}>
              <Link href={link} target="_blank">
                <Image
                  className="skills-card-img"
                  src={icon}
                  w="100%"
                  transition="all .1s ease-in-out"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                  borderRadius="10%"
                />
              </Link>
              <Text
                className="skills-card-name"
                textAlign={"center"}
                fontSize={["15px", "20px", "20px", "25px"]}
                color="#fff">
                {title}
              </Text>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}
