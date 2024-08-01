import {
  Flex,
  HStack,
  Box,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import Lottie from "lottie-react";
import animationData from "../../lottie/loading.json";

const PageSkeleton = () => {
  return (
    <HStack
      w="full"
      h="100vh"
      bg="gray.100"
      p={10}
      display={"flex"}
      justifyContent={"center"}
    >
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={350}
        bg="white"
        alignItems="start"
        p={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRadius="3xl"
        position="relative"
      >
        <Sidebar collapse={true} />
      </Flex>
      <Box
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="flex-start"
        flexDirection="column"
        position="relative"
        maxW={550}
        overflowY="auto"
        sx={{
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        
      </Box>
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={350}
        bg="white"
        alignItems="start"
        p={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRadius="3xl"
      >
        {/* Additional content for the right sidebar can go here */}
      </Flex>
    </HStack>
  );
};

export default PageSkeleton;
