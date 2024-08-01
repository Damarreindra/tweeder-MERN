import { Box, Flex, Icon, IconButton, Image, Text } from "@chakra-ui/react";
import { AiFillThunderbolt, AiOutlineSearch } from "react-icons/ai";
import { Divider } from '@chakra-ui/react'
export const Logo = ({ collapse }) => (
  <Flex
    w="full"
    alignItems="center"
    justifyContent="space-between"
    flexDirection={collapse ? "row" : "column"}
    gap={4}
    h={85}

  >
    <Box display="flex" alignItems="center" gap={2}>
    <Image src="https://user-images.githubusercontent.com/80618060/209421785-aa078881-83eb-41e3-ae28-9b05ee0d5dc0.png" w="40px" alt="Tweeder Logo" />
      {collapse && (
         <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
       
         <Text fontWeight="bold" mt={2} fontSize={24}>
        Tweeder
      </Text>
      </Box>
      )}
    </Box>
   
  </Flex>
);

