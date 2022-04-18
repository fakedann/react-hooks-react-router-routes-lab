import React from "react";
import { movies } from "../data";

function Movies() {

  const displayedMovies = movies.map( movObj => <div key={movObj.title}>Title: {movObj.title}. Runtime: {movObj.time} <ul>Genres: {movObj.genres.map( genObj => <li key={Math.floor(Math.random() * 1000)}>{genObj}</li>)}</ul> </div>)
  const h1 = <h1>Movies Page</h1>
  return <div>
    {h1}
    {displayedMovies}
  </div>;
}

export default Movies;
