# Movie Search App

## Overview
This is a movie search application that allows users to search for movies by title and view detailed information about each movie. 
The app consists of a backend server built with Node.js and Express, and a frontend application built with React and Chakra UI.

## Features
- Search for movies by title
- View detailed information about each movie

## Technologies Used
- Backend: Node.js, Express, Axios, dotenv, CORS
- Frontend: React, Axios, Chakra UI, React Router

## Setup and Installation

### Prerequisites
- Node.js
- npm

### Backend Setup
1. Clone the repository and navigate to the `backend` directory:
    ```bash
    git clone https://github.com/DivyamaniNidhi/Movies__APP.git
    cd Movies__APP/backend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your OMDB API key:
    ```
    OMDB_API_KEY=your_api_key_here
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the `frontend` directory:
    ```bash
    cd ../frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Update the `API_URL` in `src/api.js` to point to your deployed backend URL or just use /api to run on local server:
    ```javascript
    const API_URL = "https://your-deployed-backend-url/api" or "/api";
    ```

4. Start the frontend development server:
    ```bash
    npm start
    ```

### Assumptions
- The OMDB API key is valid and has sufficient quota.
- The backend server runs on `http://localhost:5000` or is properly deployed.
- The frontend server runs on `http://localhost:3000` or is properly deployed.

## Development Process
1. **Backend Development**:
    - Created an Express server with two endpoints: one for searching movies by title and one for fetching movie details by IMDb ID.
    - Used Axios to make HTTP requests to the OMDB API.
    - Configured environment variables for sensitive data.

2. **Frontend Development**:
    - Built the UI using React and Chakra UI.
    - Created components for movie cards, movie details, and movie lists.
    - Used React Router for navigation.
    - Integrated the backend API with Axios to fetch data.

## Running the Application
1. Start both the backend and frontend servers as mentioned in the setup instructions.
2. Open your browser and navigate to `http://localhost:3000` or your deployed frontend URL.
3. Use the search bar to find movies and click on a movie to view its details.

## Deployment
- URL : https://movies-app-frontend-psi.vercel.app/

