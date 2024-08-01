import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Avatar, Flex, Box } from '@chakra-ui/react'
import moment from "moment";
import { Link } from "react-router-dom";

function PopularCard({threads}) {
    const formattedDate = moment(threads.createdAt).format('MMM D');

    
  return (
    <>
    <Link to={`/status/${threads._id}`}>
       <Card borderWidth="1px" shadow={'unset'} borderRadius={"xl"} borderColor="gray.200">
        
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name={threads.author.displayName} src={threads.author.photoUrl} />
              <Box display={'flex'} gap={2}>
                <Heading  size="sm">@{threads.author.username}</Heading>  <Text  color="gray.500" fontSize="sm">· {formattedDate}</Text>
              </Box>
            </Flex>
           
          </Flex>
        </CardHeader>
        <CardBody mb={"-8"} ml={8}  mt={"-8"}>
          <Text  mt={"-5"} ml={8}>{threads.content}</Text>
          
        </CardBody>
        </Card>
        </Link>
    </>
  );
}

export default PopularCard;
