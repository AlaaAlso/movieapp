import React from "react";
import Moviecard from "./Moviecard";

const MovieList = (props) => {
  return (
    <div style={{ backgroundColor: "#ffe8a5" }}>
      <h1 style={{ textAlign: "center", color: "#e71a45", fontSize: "100px" }}>Movies</h1>
      <div className="cardstyle">
        {props.movies
          .filter(
            (movie) =>
              movie.name
                .toLowerCase()
                .includes(props.filterByName.toLowerCase()) &&
              movie.rating >= props.value
          )
          .map((movie, i) => (
            <Moviecard key={i} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
