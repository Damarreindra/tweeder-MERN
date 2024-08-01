import { Avatar, Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import EditPictureModal from '../EditProfile/EditPictureModal';

function Jumbotron({user}) {
  return (
    <>
      <Box>
        <Flex justify="center">
          <Image 
            src="/images/header.jpg" 
           
          />
        </Flex>    
        <Flex pl={[2, 5]} p={3} justify="space-between" flexWrap="wrap">
          <Avatar 
            border="solid 2px" 
            mt={{base: -16, md:-16}} 
            size="2xl" 
            src={user.photoUrl}
          />    
         
          <EditPictureModal/>
        </Flex> 
        <Flex p={2} pl={[2, 5]} flexDir="column">
          <Text fontSize={['lg', 'xl']} m={0} fontWeight="bold">{user.displayName}</Text>
         <Text fontSize={'sm'} color={'gray.500'}>@{user.username}</Text>
        </Flex>
      </Box>    
    </>
  );
}

export default Jumbotron;
