import React, { useState, useEffect } from "react";
import { Box, Input, Button } from "@chakra-ui/react";
import { searchMovies } from "../api";
import MovieList from "../components/MovieList";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load stored search term and results from session storage if they exist
    const storedSearchTerm = sessionStorage.getItem("searchTerm");
    const storedMovies = sessionStorage.getItem("movies");

    if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
    }
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
    }
  }, []);

  const handleSearch = () => {
    searchMovies(searchTerm)
      .then((response) => {
        setMovies(response.data);
        setError(null);
        // Save search term and results to session storage
        sessionStorage.setItem("searchTerm", searchTerm);
        sessionStorage.setItem("movies", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error("Error fetching movies:", error.message);
        setError("Error fetching movies");
      });
  };

  return (
    <Box p="6">
      <Input
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button mt="4" onClick={handleSearch} colorScheme="teal">
        Search
      </Button>
      {error && <Box color="red">{error}</Box>}
      <MovieList movies={movies} />
    </Box>
  );
};

export default HomePage;
