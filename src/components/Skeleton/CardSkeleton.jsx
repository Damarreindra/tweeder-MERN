import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Button,
} from "@chakra-ui/react";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";

const MainCardSkeleton = () => {
  return (
    <Card borderWidth="1px" borderRadius={"unset"} borderColor="gray.200">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <SkeletonCircle size="10" />
            <Box>
              <Skeleton height="10px" width="70px" />
            </Box>
          </Flex>
          <Skeleton height="10px" width="50px" float={"right"} />
        </Flex>
      </CardHeader>
      <CardBody mb={"-8"} ml={4} mt={"-12"}>
        <SkeletonText mt="4" noOfLines={4} spacing="4" ml={12} />
      </CardBody>
      <Box ml={12}>
        <Button
          variant="outline"
          fontSize="sm"
          fontWeight={"sm"}
          leftIcon={<AiOutlineLike />}
          ml={6}
          isLoading
          loadingText="Loading"
        >
          Like
        </Button>
        <Button
          variant="outline"
          fontSize="sm"
          fontWeight={"sm"}
          leftIcon={<AiOutlineComment />}
          isLoading
          loadingText="Loading"
        >
          Comment
        </Button>
      </Box>
    </Card>
  );
};

export default MainCardSkeleton;
