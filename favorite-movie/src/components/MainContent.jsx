import React from "react";
import MovieItem from "./MovieItem";
import styled from "styled-components";

const MainContent = ({movies, deleteMovieHandler}) => {
  return (
    <List>
      {movies.map((movie) => {
        return <MovieItem data={movie} key={movie.id} deleteMovieHandler={deleteMovieHandler}/>;
      })}
    </List>
  );
};

export default MainContent;

const List = styled.ul`
  list-style: none;
  width: 40rem;
  max-width: 90%;
  margin: 1rem auto;
  padding: 0;
`;
