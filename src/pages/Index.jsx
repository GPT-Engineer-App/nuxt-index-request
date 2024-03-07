import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack, useToast, ChakraProvider } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const toast = useToast();

  const handleIndexRequest = () => {
    // This would be replaced with an actual request to the indexing API
    console.log("Requesting indexing for:", url);
    toast({
      title: "Indexing Requested",
      description: `We've received your request to index: ${url}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Reset the input field after request
    setUrl("");
  };

  return (
    <ChakraProvider>
      <Container centerContent p={6}>
        <VStack spacing={4} align="stretch">
          <Heading as="h1" size="xl" textAlign="center">
            Request Indexing
          </Heading>
          <Box>
            <FormControl id="url">
              <FormLabel>URL to Index</FormLabel>
              <Input type="url" placeholder="Enter the URL you wish to index" value={url} onChange={(e) => setUrl(e.target.value)} />
            </FormControl>
          </Box>
          <Button leftIcon={<FaSearch />} colorScheme="teal" variant="solid" onClick={handleIndexRequest} isDisabled={!url}>
            Request Indexing
          </Button>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
