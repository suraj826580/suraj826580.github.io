import React from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Stack,
  Heading,
  TagLeftIcon,
  Text,
  HStack,
  Center,
  Textarea,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faPhoneVolume,
  faLocationDot,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

export default function GetInTouch() {
  return (
    <Box id="contact" pb={["20px", "50px", "100px"]}>
      <Center>
        {" "}
        <Heading color="#B0BEC5" mb={3}>
          Reach Out to me!
        </Heading>
      </Center>
      <Flex justifyContent={"center"} gap={20} flexWrap={"wrap"}>
        <Stack fontSize={"20px"} mt={2} spacing={3}>
          <HStack>
            <TagLeftIcon
              boxSize="15px"
              children={<FontAwesomeIcon icon={faPhoneVolume} />}
            />
            <Text color={"#fff"} id="contact-phone">
              +91- 8265807053
            </Text>
          </HStack>
          <HStack>
            <TagLeftIcon
              boxSize="15px"
              children={<FontAwesomeIcon icon={faEnvelope} />}
            />
            <Text color={"#fff"} id="contact-email">
              surajyadav8265@gmail.com
            </Text>
          </HStack>
          <HStack>
            <TagLeftIcon
              boxSize="15px"
              children={<FontAwesomeIcon icon={faLocationDot} />}
            />
            <Text color={"#fff"}>Aligarh, Uttar Pradesh</Text>
          </HStack>
          <HStack spacing={4}>
            <Box width={"30px"} id="contact-linkedin">
              <Link
                href="https://www.linkedin.com/in/suraj-yadav-068230246?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhMdwOESkSPK0nlZmlU5Gvw%3D%3D"
                target="_blank">
                <Image
                  width={"100%"}
                  src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png"
                  alt="linkedin"
                />
              </Link>
            </Box>
            <Box width={"30px"} id="contact-github">
              <Link href="https://github.com/suraj826580" target="_blank">
                <Image
                  width={"100%"}
                  src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
                />
              </Link>
            </Box>
          </HStack>
        </Stack>
        <Stack spacing={2} width={["85%", "90%", "25%"]}>
          <form action="https://formspree.io/f/mzbqkdzq" method="POST">
            <InputGroup>
              <InputLeftElement children={<FontAwesomeIcon icon={faUser} />} />
              <Input
                name="name"
                border={0}
                color="#B0BEC5"
                borderBottom={"1px solid #fff"}
                placeholder="Name"
                _focus={{ boxShadow: "none" }}
                isRequired
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={<FontAwesomeIcon icon={faEnvelope} />}
              />
              <Input
                id="contact-email"
                name="email"
                type="email"
                color="#B0BEC5"
                border={0}
                borderBottom={"1px solid #fff"}
                placeholder="E-mail"
                _focus={{ boxShadow: "none" }}
                isRequired
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={<FontAwesomeIcon icon={faPhoneVolume} />}
              />
              <Input
                id="contact-phone"
                color="#B0BEC5"
                name="number"
                type="number"
                border={0}
                borderBottom={"1px solid #fff"}
                placeholder="Mobile"
                _focus={{ boxShadow: "none" }}
                isRequired
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={<FontAwesomeIcon icon={faMessage} />}
              />
              <Textarea
                isRequired
                name="message"
                color="#B0BEC5"
                pl="30px"
                border={0}
                borderBottom={"1px solid #fff"}
                placeholder="Message"
                _focus={{ boxShadow: "none" }}
              />
            </InputGroup>
            <Button
              type="submit"
              width={"100%"}
              mt={2}
              bg={"transparent"}
              _hover={{
                color: "#fff",
                background: "#4299e1",
              }}>
              Send Message
            </Button>
          </form>
        </Stack>
      </Flex>
    </Box>
  );
}
