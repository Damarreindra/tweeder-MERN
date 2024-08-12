import {
  Flex,
  HStack,
  Box,
  useOutsideClick,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { useSelector } from "react-redux";
import PopularCard from "../Card/PopularCard";
import Search from "../Searchbar/Search";
import SkeletonPopular from "../Card/SkeletonPopular";
import { motion } from "framer-motion"


const PagesTemplate = ({ children, onOpen, isOpen, onClose }) => {
  const threads = useSelector((state) => state.ThreadsReducer.getThreadsResult);
  const [loading, setLoading] = useState(true);
  const sortedThreads = threads
    ? threads.sort((a, b) => b.likes - a.likes)
    : [];
  const [collapse, setCollapse] = useState(true);
  const ref = useRef();

  useEffect(() => {
    if (threads.length) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [threads.length]);

  useOutsideClick({
    ref: ref,
    handler: onClose,
  });

  return (
    <HStack
      w="full"
      h="100vh"
      p={{ base: 1, md: 10 }}
      display="flex"
      flexDir={{ base: "column", md: "row" }}
      justifyContent="center"
    >
      <Flex
        as="aside"
        ref={ref}
        display={{ base: isOpen ? "flex" : "none", md: "none" }}
        w="full"
        h="full"
        maxW={collapse ? 250 : "none"}
        bg="white"
        alignItems="start"
        p={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRadius="3xl"
        position="fixed"
        top={0}
        left={0}
        zIndex="docked"
        overflowY="auto"
      >
        <Search />

        <Sidebar collapse={collapse} />
      </Flex>

      <Flex
        as="aside"
        display={{ base: "none", md: "flex" }}
        w="full"
        h="full"
        maxW={collapse ? 350 : 100}
        bg="white"
        alignItems="start"
        p={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRadius="3xl"
        position="relative"
        border="1px solid"
        borderColor="gray.300"
      >
        <Sidebar collapse={collapse} />
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
        overflowY="auto"
        border="1px solid"
        borderColor="gray.300"
        ml={{ base: 0, md: collapse ? 0 : "350px" }}
        maxW={550}
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
        {children}
      </Box>

      <Flex
        as="aside"
        display={{ base: "none", md: "flex" }}
        w="full"
        h="full"
        maxW={350}
        bg="white"
        alignItems="center"
        p={6}
        flexDirection="column"
        transition="ease-in-out .2s"
        borderRadius="3xl"
        border="1px solid"
        borderColor="gray.300"
      >
        <Flex w={"full"} mb={2} flexDir={"column"}>
          <Text fontWeight={"bold"} fontSize={"x-large"}>
            Find any thread
          </Text>
          <Search />
        </Flex>
        <Flex w={"full"} flexDir={"column"}>
          <Text fontWeight={"bold"} fontSize={"x-large"}>
            Most liked thread
          </Text>

          <Flex w={"full"} justifyItems={'center'} gap={2} flexDir={"column"}>
            {threads.length ? (
               threads.slice(0, 3).map((e) =>
               <>
               <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
               >
                <PopularCard threads={e} />
                </motion.div>
                </>
                )
            
            ) : (
              <>
        
              <SkeletonPopular/>
              <SkeletonPopular/>
              <SkeletonPopular/>
           
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
    </HStack>
  );
};

export default PagesTemplate;
