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
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { formatDistanceStrict } from "date-fns";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getThread,
  getThreads,
  likeThread,
  unLikeThread,
} from "../../actions/threadsAction";
import { FcComments, FcLike, FcLikePlaceholder } from "react-icons/fc";
import moment from "moment";

function ProfileCard({ thread, user }) {
  const createdAt = moment(thread.createdAt)
  const now = moment()
  const duration = moment.duration(now.diff(createdAt))

  const formatDuration =(duration)=>{
    if (duration.asSeconds() < 60) {
      return `now`;
    } else if (duration.asMinutes() < 60) {
      return `${Math.floor(duration.asMinutes())}m`;
    } else if (duration.asHours() < 24) {
      return `${Math.floor(duration.asHours())}h`;
    } else {
      const days = Math.floor(duration.asDays());
      return `${days} day${days > 1 ? 's' : ''}`;
    }
  }

  const dispatch = useDispatch();

  const isLiked = thread.likedBy.includes(user._id);

  const handleLike = async () => {
    try {
      await likeThread(thread._id);
      dispatch(getThread(user._id))
    } catch (error) {
      console.error("Error liking/unliking thread: ", error);
    }
  };

  return (
    <>
      <Card borderWidth="1px" borderRadius={"unset"} borderColor="gray.200">
        <Link style={{ color: "black" }} to={`/status/${thread._id}`}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name={thread.author.displayName}
                  src={thread.author.photoUrl}
                />
                <Box display={"flex"} gap={2}>
                  <Text m={0} fontSize={"md"} fontWeight={"bold"}>
                    {thread.author.displayName}
                  </Text>

                  <Text fontSize={"sm"} color={"gray.500"}>
                    @{thread.author.username}
                  </Text>
                </Box>
              </Flex>
              <Text float={"right"} fontSize={"sm"}>
                {formatDuration(duration)}
              </Text>
            </Flex>
          </CardHeader>
          <CardBody mb={"-8"} ml={4} mt={"-12"}>
            <Text ml={12}>{thread.content}</Text>
          </CardBody>
        </Link>
        <Box ml={12}>
          {isLiked ? (
            <Button
              variant=""
              fontSize="sm"
              fontWeight={"sm"}
              leftIcon={<FcLike />}
              ml={6}
              onClick={handleLike}
            >
              {thread.likes}
            </Button>
          ) : (
            <Button
              variant=""
              fontSize="sm"
              fontWeight={"sm"}
              leftIcon={<FcLikePlaceholder />}
              ml={6}
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

export default ProfileCard;
