import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaIcons } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function StaticNavbarProfile({ thread }) {
  const navigate = useNavigate()
  return (
    <>
      <Flex as={"nav"} alignItems={'center'} p={2} bg={"black.200"}>
        <Flex gap={5}>
          <IconButton onClick={()=>navigate(-1)} variant={'ghost'} fontSize={'xl'} borderRadius={"3xl"} icon={<ArrowBackIcon />}></IconButton>
          <Flex flexDir={'column'} m={0}>
          
          <Text m={0} fontSize={'xl'} fontWeight={'bold'}>Profile</Text>
          <Text fontSize={'smaller'} m={0}>0 Post</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default StaticNavbarProfile;
