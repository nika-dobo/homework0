import React from "react";

function SelectedMovie({ movie }) {
  if (!movie) {
    return;
  }

  const { title, genre, price } = movie;

  return (
    <div>
      <h3>Selected Movie</h3>
      <p>title: {title}</p>
      <p>genre: {genre}</p>
      <p>price: {price}</p>
    </div>
  );
}

export default SelectedMovie;
