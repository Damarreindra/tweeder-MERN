import React from "react";
import { Avatar, Flex, IconButton, Text, VStack } from "@chakra-ui/react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { useState } from "react";
import app from "../../firebase";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Portal,
} from "@chakra-ui/react";
import Logout from "../Logout/Logout";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../auth/AuthContext";

function AvatarBox({ collapse }) {

  const {user} = useAuth()


  return (
    <Flex
      borderWidth={collapse ? 1 : 0}
      borderColor="gray.100"
      borderRadius="full"
      w="full"
      p={2}
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      flexDirection={collapse ? "row" : "column-reverse"}
    >
      {user ? <Avatar src={user.photoUrl} bg="teal.300" /> : ""}

      {collapse && (
        <VStack
          w="full"
          h={'full'}
          display={'flex'}
          flexDirection="column"
          alignItems="flex-start"
        >
          <Text fontSize="md" mt={3} fontWeight="bold" lineHeight={0}>
            {user.displayName}
          </Text>
          <Text color="gray.500" fontSize={'sm'}  lineHeight={0}>
            @{user.username}
          </Text>
        </VStack>
      )}
      <Menu>
        <MenuButton borderRadius="full" color="gray.400" variant="ghost">
          {" "}
          <IconButton borderRadius="full" icon={<MdOutlineMoreHoriz />} />
        </MenuButton>
        <Portal>
          <MenuList>
            <MenuItem><Logout/></MenuItem>
            
          </MenuList>
        </Portal>
      </Menu>
    </Flex>
  );
}

export { AvatarBox };
