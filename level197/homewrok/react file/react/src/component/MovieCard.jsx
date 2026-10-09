import React, { useState } from "react";

function MovieCard({ title, genre, price, key, movie, objFunction }) {
  return (
    <div key={key}>
      <p>title:{title}</p>
      <p>genre:{genre}</p>
      <p>price:{price}</p>

      <button onClick={() => objFunction(movie)}>Select Movie</button>
    </div>
  );
}

export default MovieCard;
