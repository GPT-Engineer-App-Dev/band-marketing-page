import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Our Band
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Experience the best live music from the most talented band in the city.
        </Text>
        <Box boxSize="sm">
          <Image src="/path-to-your-band-image.jpg" alt="Band Image" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg">
          Listen Now
        </Button>
        <Flex justifyContent="center" width="100%" pt={4}>
          <Button as="a" href="https://facebook.com" target="_blank" leftIcon={<FaFacebook />} colorScheme="facebook" variant="outline" m={2}>
            Facebook
          </Button>
          <Button as="a" href="https://twitter.com" target="_blank" leftIcon={<FaTwitter />} colorScheme="twitter" variant="outline" m={2}>
            Twitter
          </Button>
          <Button as="a" href="https://instagram.com" target="_blank" leftIcon={<FaInstagram />} colorScheme="pink" variant="outline" m={2}>
            Instagram
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;