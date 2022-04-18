import React from "react";
import { actors } from "../data";

function Actors() {

  const displayedActors = actors.map( movObj => <div key={movObj.name}>{movObj.name}<ul>Films: {movObj.movies.map( genObj => <li key={Math.floor(Math.random() * 1000)}>{genObj}</li>)}</ul> </div>)
  return <div>
    <h1>Actors Page</h1>
    {displayedActors}
  </div>;
}

export default Actors;
