import React from "react";
import { Link } from "react-router-dom";
import {
  ListIcon,
  Link as LinkChakra,
  Heading,
  Box,
  Badge,
  Text,
} from "@chakra-ui/react";

export const NavItem = ({ item, isActive, collapse }) => {
  const { label } = item;

  if (item.type === "link") {
    const { icon, notifications, messages } = item;
    return (
      <Box display="flex" alignItems="center" my={6} justifyContent="center">
        <LinkChakra
          as={Link}
          to={item.path}
          gap={1}
          display="flex"
          alignItems="center"
          _hover={{ textDecoration: "none", color: "green.500" }}
          fontWeight="medium"
          color={isActive ? "teal" : "gray.400"}
          w="full"
          justifyContent={collapse ? "space-between" : "center"}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <ListIcon as={icon} fontSize={22} mb="2" />
            {collapse && <Text mt={2}>{label}</Text>}
          </Box>
          {collapse && (
            <>
              {notifications && (
                <Badge
                  borderRadius="full"
                  colorScheme="yellow"
                  w={6}
                  textAlign="center"
                >
                  {notifications}
                </Badge>
              )}
              {messages && (
                <Badge
                  borderRadius="full"
                  colorScheme="green"
                  w={6}
                  textAlign="center"
                >
                  {messages}
                </Badge>
              )}
            </>
          )}
        </LinkChakra>
      </Box>
    );
  }
  return (
    <Heading
      color="gray.400"
      fontWeight="medium"
      textTransform="uppercase"
      fontSize="sm"
      borderTopWidth={1}
      borderColor="gray.100"
      pt={collapse ? 8 : 0}
      my={6}
    >
      <Text display={collapse ? "flex" : "none"}>{label}</Text>
    </Heading>
  );
};
