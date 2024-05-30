const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

const OMDB_API_KEY = process.env.OMDB_API_KEY;

// Endpoint to search movies by title
app.get("/api/movies", async (req, res) => {
  const { title } = req.query;
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${title}&apikey=${OMDB_API_KEY}`
    );
    if (response.data.Response === "False") {
      return res.status(404).json({ error: response.data.Error });
    }
    const movies = response.data.Search.map((movie) => ({
      imdbID: movie.imdbID,
      Title: movie.Title,
      Year: movie.Year,
      Poster: movie.Poster,
      Type: movie.Type,
    }));
    res.json(movies);
  } catch (error) {
    console.error("Error fetching movie data:", error.message);
    res.status(500).send("Error fetching movie data");
  }
});

// Endpoint to get movie details by IMDb ID
app.get("/api/movie/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${id}&plot=full&apikey=${OMDB_API_KEY}`
    );
    if (response.data.Response === "False") {
      return res.status(404).json({ error: response.data.Error });
    }
    const movie = {
      Title: response.data.Title,
      Year: response.data.Year,
      Rated: response.data.Rated,
      Genre: response.data.Genre,
      Runtime: response.data.Runtime,
      Director: response.data.Director,
      Actors: response.data.Actors,
      Plot: response.data.Plot,
      Language: response.data.Language,
      Country: response.data.Country,
      Awards: response.data.Awards,
      Poster: response.data.Poster,
      Ratings: response.data.Ratings,
    };
    res.json(movie);
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    res.status(500).send("Error fetching movie details");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
