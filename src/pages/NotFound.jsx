// src/pages/NotFound.js
import React from 'react';
import { Box, Heading, Text, Button, Image, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import Error from '../lottie/404.json'

const NotFound = () => {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, teal.400, blue.500)"
      color="white"
      textAlign="center"
      direction="column"
      p={4}
    >
      <Lottie animationData={Error}/>
      <Heading as="h1" size="2xl" mb={4}>
        404 - Page Not Found
      </Heading>
      <Text fontSize="xl" mb={4}>
        Oops! The page you are looking for does not exist.
      </Text>
      <Button as={Link} to="/home" colorScheme="teal" size="lg">
        Go to Home
      </Button>
    </Flex>
  );
};

export default NotFound;
