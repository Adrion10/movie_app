import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./Search.svg";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const movie1 = {
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYzkxOGRiZGUtYjA2YS00NTczLTllNGMtZWRmYjgxZjZjMDQ4L2ltYWdlXkEyXkFqcGdeQXVyMjQzNDA4MTg@._V1_SX300.jpg",
  Title: "Iron Men",
  Type: "movie",
  Year: "2017",
  imdbID: "tt6440810",
};

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Iron Men");
  }, []);

  return (
    <div className="app">
      <h1>LaceMovieApp</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Iron man"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>
      <div className="container">
        <MovieCard movie1={movies[0]} />
      </div>
    </div>
  );
}
export default App;
