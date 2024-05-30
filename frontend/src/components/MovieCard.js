import React from "react";
import { Box, Image, Text, Button, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m="2"
      p="4"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
      <Image src={movie.Poster} alt={movie.Title} />
      <Flex direction="column" flex="1">
        <Box p="2">
          <Text fontWeight="bold" fontSize="xl">
            {movie.Title}
          </Text>
          <Text>{movie.Year}</Text>
        </Box>
        <Spacer />
        <Link to={`/movie/${movie.imdbID}`}>
          <Button mt="4" colorScheme="teal">
            View Details
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default MovieCard;
