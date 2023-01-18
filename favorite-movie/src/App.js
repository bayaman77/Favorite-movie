import React, { useState } from "react";
import { MOVIES } from './components/helpers/constants'
import MainContent from "./components/MainContent";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  const [movies, setMovies] = useState(MOVIES);

  const addNewMovie = (newMovie) => {
    setMovies([...movies,newMovie])
    console.log(movies);
  }

  const deleteMovieHandler = (deletingMovieId) => {
    const filteredMovies = movies.filter((movie) => movie.id !== deletingMovieId)
    setMovies(filteredMovies)
  }

  return (
    <>
      <Header onAddNewMovie={addNewMovie}/>
      <MainContent movies={movies} deleteMovieHandler={deleteMovieHandler}/>
    </>
  );
};

export default App;
