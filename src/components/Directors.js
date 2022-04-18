import React from "react";
import { directors } from "../data";

function Directors() {

  const displayedDirectors = directors.map( movObj => <div key={movObj.name}>{movObj.name}<ul>Films: {movObj.movies.map( genObj => <li key={Math.floor(Math.random() * 1000)}>{genObj}</li>)}</ul> </div>)
  return <div>
    <h1>Directors Page</h1>
    {displayedDirectors}
  </div>;
}

export default Directors;
