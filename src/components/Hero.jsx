import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function HeroSection() {
  const whatsappColor = useColorModeValue("whatsapp.500", "whatsapp.200");

  return (
    <Box as="section" id="hero" h="100vh" display="flex" flexDir={{base:"column", sm:'row'}} alignItems="center" justifyContent="center" p={4}>
      <Container maxW="container.md">
        <Flex direction="column" align="center" w="100%" textAlign="center">
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bolder"
            color={whatsappColor}
          >
            The Social Media that just works
          </Heading>
          <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bolder" mt={4}>
            Go further with us!
          </Text>
        </Flex>
      </Container>
      <Container maxW="container.md" mt={8}>
        <Flex flex="1" justifyContent="center" alignItems="center" bg="white">
          <Container textAlign="center">
            <Stack spacing={6}>
              <Box>
                <Image
                  src="https://user-images.githubusercontent.com/80618060/209421785-aa078881-83eb-41e3-ae28-9b05ee0d5dc0.png"
                  width={{ base: "30px", md: "40px" }}
                  mx="auto"
                />
              </Box>
              <Heading as="h1" size={{ base: "xl", md: "2xl" }} fontWeight="bold">
                Happening Now
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
                Join Tweeder today.
              </Text>
              <Button
                as={RouterLink}
                to="/login"
                colorScheme="gray"
                variant="outline"
                leftIcon={
                  <Image
                    src="https://img.icons8.com/color/48/000000/google-logo.png"
                    boxSize="20px"
                  />
                }
              >
                Sign up with Google
              </Button>
              <Button
                as={RouterLink}
                to="/register"
                colorScheme="whatsapp"
                size="lg"
                sx={{
                  "&:hover": {
                    textDecoration: "none",
                    color: "inherit",
                  },
                }}
              >
                Sign up with Email
              </Button>
              <Text fontSize={{ base: "sm", md: "md" }}>
                By signing up, you agree to the{" "}
                <Link color="blue.500" href="#">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link color="blue.500" href="#">
                  Privacy Policy
                </Link>
                , including{" "}
                <Link color="blue.500" href="#">
                  Cookie Use
                </Link>
                .
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
                Already have an account?
              </Text>
              <Button
                as={RouterLink}
                to="/login"
                colorScheme="whatsapp"
                size="lg"
                sx={{
                  "&:hover": {
                    textDecoration: "none",
                    color: "inherit",
                  },
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Container>
        </Flex>
      </Container>
    </Box>
  );
}

export default HeroSection;
