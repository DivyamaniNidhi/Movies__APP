import axios from "axios";

const API_URL = "/api"; // Use relative path

// API endpoint to search movies by title
export const searchMovies = (title) => {
  return axios.get(`${API_URL}/movies`, { params: { title } });
};

// API endpoint to get details of a movie
export const getMovieDetails = (id) => {
  return axios.get(`${API_URL}/movie/${id}`);
};
