import { Avatar, Button, Flex, Textarea, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../actions/userAction';
import { useAuth } from '../../auth/AuthContext';

function TweedForm() {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const addPostResult = useSelector((state) => state.UserReducer.addPostResult);
const {user} = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ content: content }));
  };

  
  useEffect(() => {
    if (addPostResult) {
      setContent('');
    }
  }, [addPostResult]);

  return (
    <VStack w="full" mt={3}  borderBottomWidth="1px" borderColor="gray.200" spacing={4}>
      <Flex
        as="form"
        onSubmit={(e) => handleSubmit(e)}
        align="end"
        w="full"
        bg="white"
        p={4}
        
        borderRadius="lg"
        boxShadow="sm"
        
      >
        <Avatar name={`${user.displayName}`} src={`${user.photoUrl}`}  size="md"  />
        <Textarea
          placeholder="What's happening?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          resize="none"
          border="none"
          _focus={{ boxShadow: 'none' }}
          ml={4}
          required
          rows={2}
          flex="1"
        />
        <Button
          type="submit"
          borderRadius={'40px'}
          colorScheme='teal'
          alignSelf={'end'}
        >
          Tweed
        </Button>
      </Flex>
    </VStack>
  );
}

export default TweedForm;
