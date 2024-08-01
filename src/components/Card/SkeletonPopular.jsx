import React from 'react';
import { Box, Flex, Heading, Text, Avatar, Skeleton, SkeletonCircle, SkeletonText, Card, CardHeader, CardBody } from '@chakra-ui/react';

const SkeletonPopular = () => {
  return (
    <Card borderWidth="1px" shadow={'unset'} borderRadius={"xl"} borderColor="gray.200">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <SkeletonCircle size="10" />
            <Box display={'flex'} gap={2}>
              <Skeleton height="10px" width="100px" />
              <Skeleton height="10px" width="60px" />
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody mt={-8}>
      <SkeletonText  noOfLines={1} spacing="4" />
      </CardBody>
    </Card>
  );
};

export default SkeletonPopular;
