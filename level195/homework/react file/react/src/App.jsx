import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      genre: "Sci-Fi",
      rating: 4.9,
      price: 15,
      isAvailable: true
    },
    {
      id: 2,
      title: "Inception",
      genre: "Thriller",
      rating: 4.7,
      price: 12,
      isAvailable: true
    },
    {
      id: 3,
      title: "Avatar",
      genre: "Fantasy",
      rating: 4.5,
      price: 10,
      isAvailable: false
    },
    {
      id: 4,
      title: "The Dark Knight",
      genre: "Action",
      rating: 4.8,
      price: 14,
      isAvailable: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <Header />
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
