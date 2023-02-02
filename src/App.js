import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./Search.svg";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
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
      <div className="container"></div>
    </div>
  );
}
export default App;
