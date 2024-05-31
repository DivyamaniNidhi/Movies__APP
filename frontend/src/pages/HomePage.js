import "../../src/HomePage.css";
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

  useEffect(() => {
    // Reset state on page refresh
    const handlePageRefresh = () => {
      sessionStorage.removeItem("searchTerm");
      sessionStorage.removeItem("movies");
      setSearchTerm("");
      setMovies([]);
    };

    window.addEventListener("beforeunload", handlePageRefresh);
    return () => {
      window.removeEventListener("beforeunload", handlePageRefresh);
    };
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
    <Box
      className="homepage"
      p="6"
      minHeight="100vh"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Box
        bg="rgba(255, 255, 255, 0.8)"
        borderRadius="md"
        p="6"
        maxWidth="600px"
        mx="auto"
        boxShadow="xl"
      >
        <Input
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button mt="4" onClick={handleSearch} colorScheme="teal">
          Search
        </Button>
        {error && <Box color="red">{error}</Box>}
      </Box>
      <MovieList movies={movies} />
    </Box>
  );
};

export default HomePage;
