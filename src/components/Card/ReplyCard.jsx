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
import { getDetailThread, getThread, getThreads, likeThread, unLikeThread } from "../../actions/threadsAction";
import moment from "moment/moment";
import { AiOutlineComment } from "react-icons/ai";

function ReplyCard({ thread }) {
    const formattedDate = moment(thread.createdAt).format('MMM D');

  console.log(thread);
  return (
    <>
      
          <Card  borderWidth="1px" borderRadius={"unset"} borderColor="gray.200">
        
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name={thread.author.displayName} src={thread.author.photoUrl} />
                  <Box display={'flex'} gap={2}>
                    <Heading  size="sm" fontWeight={'bold'}>{thread.author.username}</Heading>  <Text  color="gray.500" fontSize="sm">· {formattedDate}</Text>
                  </Box>
                </Flex>
               
              </Flex>
            </CardHeader>
            <CardBody p={5} mb={"-8"} ml={8}  mt={"-8"}>
              <Text  mt={"-3"} ml={8}>{thread.content}</Text>
              
            </CardBody>
            </Card>
{/*          
            <Box p={1}>
              {
                isLiked ? (
                  <Button
                  variant=""
                  fontSize="sm"
                  fontWeight={"sm"}
                  leftIcon={< FcLike fontSize="16px"/>}
               
                  onClick={handleLike}
                >
                  {thread.likes}
                </Button>
                ) :(
                  <Button
                  variant=""
                  fontSize="sm"
                  fontWeight={"sm"}
                  leftIcon={<FcLikePlaceholder fontSize="16px" />}
           
                  onClick={handleLike}
                >
                  {thread.likes}
                </Button>
                )
              }
             
              <Button
                variant=""
                fontSize="sm"
                fontWeight={"sm"}
                leftIcon={<FcComments fontSize="16px" />}
              >
                0
              </Button>
            </Box> */}
   
    
    </>
  );
}

export default ReplyCard;
