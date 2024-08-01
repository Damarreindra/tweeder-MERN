import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../actions/userAction";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  Image,
  Heading,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const toast = useToast()
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { addUserResult, addUserError } = useSelector(
    (state) => state.UserReducer
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addUser({
        email: email,
        username: username,
        password: password,
        displayName: displayName
      })
    );
  };

  useEffect(() => {
    if (addUserResult) {
      toast({
        position: 'bottom-left',
        render: () => (
          <Box color='white' p={3} bg='green.500'>
            Registered
          </Box>
        ),
      })
      navigate('/login');
      setPassword("");
      setUsername("");
      setEmail("");
      setDisplayName("");
    } else if (addUserError) {
      setError(addUserError);
      setEmail("");
    }
  }, [addUserResult, addUserError, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box className="container mt-5 col-md-7">
        <Box className="card mb-4">
          <Box display="flex" flexDirection={{ base: "column", md: "row" }} g="0">
            <Box className="col-md-6 d-none d-md-block">
              <Image
                src="images/tangga.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </Box>
            <Box className="col-md-6 mx-auto">
              <Box className="card-body text-center">
                <Heading as="h2" className="card-title border-bottom mb-4 text-success">
                  Tweeder
                </Heading>
                <Heading as="h5" className="card-title mb-3">
                  Register
                </Heading>
                <form onSubmit={handleSubmit} id="form">
                  <VStack spacing={4}>
                    <FormControl isRequired>
                      <FormLabel htmlFor="email">Email address</FormLabel>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <Input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        name="username"
                        id="username"
                        minLength={8}
                        maxLength={24}
                        placeholder="Username"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="displayName">Display Name</FormLabel>
                      <Input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        name="displayName"
                        id="displayName"
                        minLength={8}
                        maxLength={24}
                        placeholder="Display Name"
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        id="password"
                        placeholder="Password"
                      />
                    </FormControl>
                    {error && (
                      <Alert status="error">
                        <AlertIcon />
                        {error}
                      </Alert>
                    )}
                    <Button type="submit" colorScheme="green">
                      Register
                    </Button>
                    <Text>
                      Already have an account?{" "}
                      <Link to="/login" style={{ color: "green", textDecoration: "none" }}>
                        Login
                      </Link>
                    </Text>
                  </VStack>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default Register;
