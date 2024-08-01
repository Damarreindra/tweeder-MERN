import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";

function NavbarLanding() {
  return (
    <Box as="nav" bg="white" shadow="md" p={4} borderBottom="1px" borderColor="gray.200">
      <Flex
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Link to={"/home"}>
            <Image
              src="https://user-images.githubusercontent.com/80618060/209421785-aa078881-83eb-41e3-ae28-9b05ee0d5dc0.png"
              width="40px"
              alt="Tweeder logo"
            />
          </Link>
          <Heading as="h2" color="green.500" ml={3}>
            Tweeder
          </Heading>
        </Flex>
       
      </Flex>
    </Box>
  );
}

export default NavbarLanding;
