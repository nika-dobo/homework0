import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, onSelect }) {
  return movies.map((obj) => (
    <MovieCard
      title={obj.title}
      genre={obj.genre}
      price={obj.price}
      key={obj.id}
      movie={obj}
      objFunction={onSelect}
    />
  ));
}

export default MovieList;
