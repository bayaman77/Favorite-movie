import React, { useRef } from "react";
import styled from "styled-components";
import InputForm from "./UI/InputForm";
import MyButton from "./UI/MyButton";

const MovieForm = ({ onClose, onAddNewMovie }) => {
  const titleInputRef = useRef();
  const imgUrlInputRef = useRef();
  const ratingInputRef = useRef();

  const addMovieHandler = () => {
    const title = titleInputRef.current.value;
    const img = imgUrlInputRef.current.value;
    const rating = ratingInputRef.current.value;

    if (title && img && rating) {
      const newMovie = {
        id: Math.random().toString(),
        title,
        img,
        rating,
      };
      onAddNewMovie(newMovie);

      titleInputRef.current.value = "";
      imgUrlInputRef.current.value = "";
      ratingInputRef.current.value = "";

      onClose();
    }
  };

  return (
    <>
      <div>
        <InputForm
          lableTitle="Movie Title"
          inputType="text"
          ref={titleInputRef}
        />
        <InputForm
          lableTitle="Image URL"
          inputType="text"
          ref={imgUrlInputRef}
        />
        <InputForm
          lableTitle="Your Rating"
          InputType="number"
          ref={ratingInputRef}
        />
      </div>
      <BottonsBox>
        <MyButton color="#6fc1dd" onClick={onClose}>
          Cancel
        </MyButton>
        <MyButton color="blue" onClick={addMovieHandler}>
          Add
        </MyButton>
      </BottonsBox>
    </>
  );
};

export default MovieForm;

const BottonsBox = styled.div`
  display: flex;
  justify-content: end;
`;
