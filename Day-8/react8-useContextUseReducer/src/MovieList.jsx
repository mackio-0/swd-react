import React, {useContext, useState} from "react";
import { StateContext } from "./context/StateContext"
import Movie from "./Movie";

const MovieList = () => {
  const {movieList, setMovieList} = useContext(StateContext)
  return (
    <div className="list-container">
      <div>
        {movieList.map(movie => {
          return <Movie key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
