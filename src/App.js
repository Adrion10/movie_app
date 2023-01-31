import { useEffect } from "react";
import "./App.css";

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

  return <h1> My Movie App</h1>;
}
export default App;
