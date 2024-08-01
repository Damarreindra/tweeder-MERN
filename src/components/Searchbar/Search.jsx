import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  List,
  ListItem,
  Flex,
  Text,
  Avatar,
} from "@chakra-ui/react";
import React, { useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import debounce from "lodash/debounce";
import { Link } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const [threads, setThreads] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const token = localStorage.getItem("token");
  
  const truncated = (text) =>{
    const maxChar = 25
    if(text.length > maxChar){
      return text.substring(0,maxChar) + "...."
    }
    return text
  }

  const performSearch = async (query) => {
    try {
      const { data } = await axios.get(
        `https://betweeder-production.up.railway.app/search?query=${query}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setThreads(data);
      setShowDropdown(data.length > 0);
    } catch (error) {
      console.error("Error searching threads:", error);
    }
  };

  const debouncedSearch = useCallback(debounce(performSearch, 500), []);

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    if (newQuery) {
      debouncedSearch(newQuery);
    } else {
      setShowDropdown(false);
    }
  };

  return (
    <>
      <Box as="form" position="relative">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaSearch} color="gray.300" />
          </InputLeftElement>
          <Input
            borderRadius="xl"
            shadow={1}
            type="search"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
            onFocus={() => setShowDropdown(true)}
          />
        </InputGroup>
        {showDropdown && (
          <Box
            position="absolute"
            width="100%"
            mt={2}
            border="1px gray"
            borderRadius="md"
            backgroundColor="white"
            zIndex="10"
            maxH="200px"
            overflowY="auto"
            boxShadow="md"
            onMouseLeave={()=>setShowDropdown(false)}
          >
            {query === "" && (
              <Text textAlign={"center"}>Try searching threads</Text>
            )}
            <Box
              mt={2}
              w={"100%"}
              border="1px gray"
              borderRadius="md"
              backgroundColor="white"
              overflowY="auto"
              boxShadow="md"
            >
              {threads.map((thread) => (
                <Box
                  _hover={{ backgroundColor: "gray.200", cursor:'pointer' }}
                  w={"100%"}
                  key={thread._id}
                  p={2}
                >
                  <Flex direction="column">
                    
                    <Flex as={Link} to={`/status/${thread._id}`} _hover={{color:'black'}} alignItems={'center'} gap={2}>
                      <Avatar src={thread.author.photoUrl}/>
                      <Flex gap={0} flexDir={'column'}>
                   <Text m={0} fontWeight={'bold'}>@{thread.author.username}</Text>  
                 {
               
                    thread.content.substring(0,7)+" ..."

                 
              
                 } 
                      </Flex>
                      </Flex>
                  </Flex>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Search;
