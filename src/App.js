import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navvbar from "./Component/Navbar";
import MoviesData from "./Component/Moviedata";
import MovieList from "./Component/MovieList";
import Mianpart from "./Component/Mianpart";
import Cardmovie from "./Component/Cardmovie";
import Addmovie from "./Component/Addmovie";
import Footer from "./Component/Footer";
import "./App.css";

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

      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Mianpart />
              <MovieList
                movies={movies}
                filterByName={filterByName}
                value={value}
                setValue={setValue}
              />
              <Addmovie
                MoviesData={MoviesData}
                setMovies={setMovies}
                movies={movies}
              />
            </>
          }
        />
        <Route path="/movies/:id" element={<Cardmovie />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
