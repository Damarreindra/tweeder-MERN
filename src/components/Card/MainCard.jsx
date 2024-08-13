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
  Menu,
  MenuButton,
  IconButton,
  Portal,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { FcComments, FcFullTrash, FcLike, FcLikePlaceholder, FcMenu } from "react-icons/fc";
import { formatDistanceStrict } from "date-fns";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteThread,
  getThread,
  getThreads,
  likeThread,
  unLikeThread,
} from "../../actions/threadsAction";
import moment from "moment";
import { RemoveOutlined } from "@mui/icons-material";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MdOutlineMoreHoriz } from "react-icons/md";
import Logout from "../Logout/Logout";
import { FaTrash } from "react-icons/fa";
import { useAuth } from "../../auth/AuthContext";

function MainCard({ thread }) {
  const createdAt = moment(thread.createdAt);
  const now = moment();
  const duration = moment.duration(now.diff(createdAt));
  const {user} = useAuth()


  const formatDuration = (duration) => {
    if (duration.asSeconds() < 60) {
      return `now`;
    } else if (duration.asMinutes() < 60) {
      return `${Math.floor(duration.asMinutes())}m`;
    } else if (duration.asHours() < 24) {
      return `${Math.floor(duration.asHours())}h`;
    } else {
      const days = Math.floor(duration.asDays());
      return `${days}d`;
    }
  };

  const dispatch = useDispatch();

  const isLiked = thread.likedBy.includes(user._id);

  const handleLike = async () => {
    try {
      await likeThread(thread._id);
      dispatch(getThreads());
    } catch (error) {
      console.error("Error liking/unliking thread: ", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteThread(thread._id)
      dispatch(getThreads());
    } catch (error) {
      console.error("Error deleting thread: ", error);
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

                <Box display={"flex"} m={0} gap={1}>
                  <Text fontSize="md" fontWeight={"bold"}>
                    {thread.author.displayName}
                  </Text>
                  <Text fontSize="sm" color={"gray.500"}>
                    @{thread.author.username}
                  </Text>
                  ·
                  <Text fontSize="sm" color={"gray.400"}>
                    {formatDuration(duration)}
                  </Text>
                </Box>
              </Flex>
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
            {
              thread.author._id === user._id ? (
                <Menu>
                <MenuButton position={"absolute"} top={2} right={2} variant="ghost">
                  <IconButton variant={"ghost"} icon={<MdOutlineMoreHoriz />} />
                </MenuButton>
                <Portal>
                  <MenuList>
                    <MenuItem p={0} m={0}>
                      <Button
                     
                        variant=""
                        fontSize="sm"
                        fontWeight={"sm"}
                        leftIcon={<FaTrash fontSize="16px" />}
                        onClick={handleDelete}
                      >
                       Delete Thread
                      </Button>
                    </MenuItem>
                  </MenuList>
                </Portal>
              </Menu>

              ) :" "
            }
         


        </Box>
      </Card>
    </>
  );
}

export default MainCard;
