import "./App.css";
import NavbbarC from "./Components/Navbar/NavbarC";

import { useState } from "react";
import moviesData from "./Components/data";
import Movielist from "./Components/MovieLists/Movielist";
import RatingSIze from "./Components/rating";
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(0);
  return (
    <div className="App">
      <NavbbarC
        movies={movies}
        setMovies={setMovies}
        search={search}
        setSearch={setSearch}
        rate={rate}
        setRate={setRate}
      />

      <Movielist
        movies={movies}
        search={search}
        rate={rate}
        setRate={setRate}
      />
    </div>
  );
}

export default App;
