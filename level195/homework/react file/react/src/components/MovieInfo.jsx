import React from 'react';

function MovieInfo({ title, genre, price }) {
  return (
    <div className="space-y-1">
      <h2 className="text-xl font-bold text-gray-800">🎬 {title}</h2>
      <p className="text-sm text-gray-600">Genre: <span className="font-medium text-gray-800">{genre}</span></p>
      <p className="text-sm text-gray-600">Price: <span className="font-semibold text-gray-900">${price}</span></p>
    </div>
  );
}

export default MovieInfo;
