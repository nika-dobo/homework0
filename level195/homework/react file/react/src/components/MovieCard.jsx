import React from 'react';
import MovieInfo from './MovieInfo';
import MovieRating from './MovieRating';
import MovieStatus from './MovieStatus';

function MovieCard({ movie }) {
  const { title, genre, rating, price, isAvailable } = movie;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 flex flex-col justify-between gap-4 hover:shadow-md transition-shadow">
      <div className="space-y-4">
        <MovieInfo title={title} genre={genre} price={price} />
        <MovieRating rating={rating} />
        <MovieStatus isAvailable={isAvailable} />
      </div>
      <div className="pt-3 border-t border-gray-100">
        <span className="inline-block text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-700 rounded-lg border border-gray-200">
          {price >= 13 ? "💎 Premium Ticket" : "💰 Affordable Ticket"}
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
