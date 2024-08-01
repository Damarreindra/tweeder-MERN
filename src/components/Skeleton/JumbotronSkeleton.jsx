import { Avatar, Box, Button, Flex, Image, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import React from 'react';

function JumbotronSkeleton() {
  return (
    <>
      <Box>
        <Flex justify="center">
          <Skeleton height="200px" width="100%" />
        </Flex>
        <Flex pl={[2, 5]} justify="space-between" flexWrap="wrap">
          <SkeletonCircle 
            size="2xl" 
            mt={[-6, -8, -10, -16]} 
            border="solid 2px" 
          />
          <Skeleton height="40px" width="120px" mt={[2, 4]} borderRadius="3xl" />
        </Flex>
        <Flex pl={[2, 5]} flexDir="column">
          <SkeletonText mt="4" noOfLines={1} spacing="4" width="150px" />
          <SkeletonText noOfLines={1} spacing="4" width="100px" />
        </Flex>
      </Box>
    </>
  );
}

export default JumbotronSkeleton;
