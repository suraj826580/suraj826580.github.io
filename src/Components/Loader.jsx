import { Box } from "@chakra-ui/react";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";
export default function Loader() {
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}>
      <InfinitySpin width="200" color="#4299e1" />
    </Box>
  );
}
