import { Avatar, Flex, Image, useOutsideClick } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavbarMobile({ user, onOpen }) {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        as="nav"
        alignItems="center"
        justifyContent="space-between"
        p={2}
        bg="rgba(255, 255, 255, 0.2)" 
        backdropFilter="blur(10px)" 
        borderRadius="md"
        boxShadow="lg"
        position="relative"
        top={0}
        left={0}
        right={0}
      >
        <Avatar
          position="absolute"
          size="sm"
          ml={4}
          as="button"
          src={user.photoUrl}
          onClick={onOpen}
        />
        <Flex flex={1} alignItems="center" justifyContent="center">
          <Image
            src="https://user-images.githubusercontent.com/80618060/209421785-aa078881-83eb-41e3-ae28-9b05ee0d5dc0.png"
            w={42}
          />
        </Flex>
      </Flex>
    </>
  );
}

export default NavbarMobile;
