import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  SkeletonCircle,
  SkeletonText,
  Skeleton,
  Button,
} from "@chakra-ui/react";

const SkeletonMain = () => {
  return (
    <Card borderWidth="1px" borderRadius={"unset"} borderColor="gray.200">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <SkeletonCircle size="10" />
            <Box display={"flex"} m={0} gap={2}>
              <Skeleton height="20px" width="100px" />
              <Skeleton height="20px" width="80px" />
            </Box>
          </Flex>
          <Skeleton height="20px" width="50px" float={"right"} />
        </Flex>
      </CardHeader>
      <CardBody mb={"-8"} ml={4} mt={"-12"}>
        <SkeletonText mt="4" noOfLines={3} spacing="4" ml={12} />
      </CardBody>
      <Box ml={12}>
        <Skeleton height="30px" width="50px" ml={6} />
        <Skeleton height="30px" width="50px" ml={6} />
      </Box>
    </Card>
  );
};

export default SkeletonMain;
