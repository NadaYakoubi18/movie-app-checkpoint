import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ movies, search, rate }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
        flexwrap: "wrap",
      }}
    >
      {movies
        .filter(
          (movie) =>
            movie.name.toLowerCase().includes(search.toLowerCase()) &&
            movie.rating >= rate
        )
        .map((movie) => (
          <Moviecard movie={movie} />
        ))}
    </div>
  );
};

export default Movielist;
