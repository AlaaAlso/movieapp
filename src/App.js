import React, { useState } from "react";
import "./App.css";
import Navvbar from "./Component/Navbar";
import MoviesData from "./Component/Moviedata";
import MovieList from "./Component/MovieList";
import Mianpart from "./Component/Mianpart";
import Addmovie from "./Component/Addmovie";
import Footer from "./Component/Footer"

const App = () => {
  const [value, setValue] = useState(1);
  const [filterByName, setFilterByName] = useState("");
  const [movies, setMovies] = useState(MoviesData);

  return (
    <div>
      <Navvbar
        filterByName={filterByName}
        setFilterByName={setFilterByName}
        value={value}
        setValue={setValue}
      />
      <Mianpart />
      <MovieList
        movies={movies}
        filterByName={filterByName}
        value={value}
        setValue={setValue}
      />
      <Addmovie MoviesData={MoviesData} setMovies={setMovies} movies={movies} />
      <Footer/>
    </div>
  );
};

export default App;
