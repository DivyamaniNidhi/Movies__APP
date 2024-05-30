import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Text,
  Button,
  VStack,
  HStack,
  StackDivider,
  Spinner,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../api";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then((response) => setMovie(response.data));
  }, [id]);

  if (!movie) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box p="6">
      <Button onClick={() => navigate(-1)} mb="4" colorScheme="teal">
        Go Back
      </Button>
      <HStack spacing="8" align="start">
        <Image
          src={movie.Poster}
          alt={movie.Title}
          boxSize="300px"
          objectFit="cover"
          borderRadius="md"
        />
        <VStack
          align="start"
          spacing="4"
          divider={<StackDivider borderColor="gray.200" />}
        >
          <Text fontWeight="bold" fontSize="2xl">
            {movie.Title}
          </Text>
          <Text>
            <Text as="span" fontWeight="bold">
              Year:
            </Text>{" "}
            {movie.Year}
          </Text>
          <Text>
            <Text as="span" fontWeight="bold">
              Genre:
            </Text>{" "}
            {movie.Genre}
          </Text>
          <Text>
            <Text as="span" fontWeight="bold">
              Runtime:
            </Text>{" "}
            {movie.Runtime}
          </Text>
          <Text>
            <Text as="span" fontWeight="bold">
              Director:
            </Text>{" "}
            {movie.Director}
          </Text>
          <Text>
            <Text as="span" fontWeight="bold">
              Actors:
            </Text>{" "}
            {movie.Actors}
          </Text>
          <Text>
            <Text as="span" fontWeight="bold">
              Plot:
            </Text>{" "}
            {movie.Plot}
          </Text>
          <Text>
            <Text as="span" fontWeight="bold">
              Language:
            </Text>{" "}
            {movie.Language}
          </Text>
          <Text>
            <Text as="span" fontWeight="bold">
              Country:
            </Text>{" "}
            {movie.Country}
          </Text>
          <Text>
            <Text as="span" fontWeight="bold">
              Awards:
            </Text>{" "}
            {movie.Awards}
          </Text>
          <Box>
            <Text fontWeight="bold">Ratings:</Text>
            {movie.Ratings.map((rating) => (
              <Text key={rating.Source}>
                {rating.Source}: {rating.Value}
              </Text>
            ))}
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default MovieDetail;
