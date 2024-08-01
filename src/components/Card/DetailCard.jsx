import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Heading,
  Avatar,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { FcComments, FcLike, FcLikePlaceholder } from "react-icons/fc";
import { formatDistanceStrict } from "date-fns";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getDetailThread,
  getThread,
  getThreads,
  likeThread,
  unLikeThread,
} from "../../actions/threadsAction";
import moment from "moment/moment";
import { AiOutlineComment } from "react-icons/ai";

function DetailCard({ thread, user }) {
  const formattedDate = moment(thread.createdAt).format("h:mm A · MMM D, YYYY");

  const dispatch = useDispatch();

  const isLiked = thread.likedBy.includes(user._id);

  const handleLike = async () => {
    try {
      await likeThread(thread._id);
      dispatch(getDetailThread(thread._id));
    } catch (error) {
      console.error("Error liking/unliking thread: ", error);
    }
  };
  return (
    <>
      <Card borderWidth="1px" borderRadius={"unset"} borderColor="gray.200">
        <Link style={{ color: "black" }} to={`/status/${thread.uid}`}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name={thread.author.displayName}
                  src={thread.author.photoUrl}
                />
                <Box>
                  <Text m={0} fontSize={"md"} fontWeight={"bold"}>
                    {thread.author.displayName}
                  </Text>

                  <Text fontSize={"sm"} color={"gray.500"}>
                    @{thread.author.username}
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody mb={"-8"} mt={"-8"}>
            <Text>{thread.content}</Text>
            <Text color="gray.500" fontSize="sm">
              {formattedDate}
            </Text>
          </CardBody>
        </Link>
        <Box p={1}>
          {isLiked ? (
            <Button
              variant=""
              fontSize="sm"
              fontWeight={"sm"}
              leftIcon={<FcLike fontSize="16px" />}
              onClick={handleLike}
            >
              {thread.likes}
            </Button>
          ) : (
            <Button
              variant=""
              fontSize="sm"
              fontWeight={"sm"}
              leftIcon={<FcLikePlaceholder fontSize="16px" />}
              onClick={handleLike}
            >
              {thread.likes}
            </Button>
          )}

          <Button
            variant=""
            fontSize="sm"
            fontWeight={"sm"}
            leftIcon={<FcComments fontSize="16px" />}
          >
            {thread.comments.length}
          </Button>
        </Box>
      </Card>
    </>
  );
}

export default DetailCard;
