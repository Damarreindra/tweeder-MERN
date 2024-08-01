import { ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavbarDetailPost() {
  const navigate = useNavigate();

  return (
    <>
      <Flex as="nav" alignItems="center" p={2} bg="black.200">
        <Flex gap={5}>
          <IconButton
            variant="ghost"
            fontSize="xl"
            borderRadius="3xl"
            icon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
          />
          <Flex flexDir="column" mt={1}>
            <Text fontSize="xl" fontWeight="bold">Post</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default NavbarDetailPost;
