import { useState } from "react";
import MovieList from "./component/MovieList";
import SelectedMovie from "./component/SelectedMovie";

function App() {
  const movies = [
    { id: 1, title: "Interstellar", genre: "Sci-Fi", price: 15 },
    { id: 2, title: "Inception", genre: "Thriller", price: 12 },
    { id: 3, title: "The Dark Knight", genre: "Action", price: 14 },
    { id: 4, title: "Avatar", genre: "Fantasy", price: 13 },
  ];

  let [selectedMovie, setSelectedMovie] = useState(null);

  // function henlder(id){
  //   let movie = movies.find((movie)=>{
  //     movie.id === id
  //   })
  //   setSelectedMovie(movie)
  // }

  return (
    <>
      <MovieList movies={movies} onSelect={setSelectedMovie} />
      <SelectedMovie movie={selectedMovie}/>
    </>
  );
}

export default App;
