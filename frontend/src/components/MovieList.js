import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <Box>
      <SimpleGrid columns={[1, 2, 3, 5]} spacing="6" p="2">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MovieList;
