import React, { useState } from "react";
import styled from "styled-components";
import DeleteForm from "./DeleteForm";
import Modal from "./UI/Modal";
import MyButton from "./UI/MyButton";

const MovieItem = ({ data, deleteMovieHandler }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModalHandler = () => {
    setModalVisible((prevState) => !prevState);
  };

  const deleteMovie = () => {
    deleteMovieHandler(data.id)
  }

  return (
    <ListItem>
      <ImgBox>
        <StyledImg src={data.img} alt="photo" />
      </ImgBox>
      <InfoBox>
        <Title>{data.title}</Title>
        <Subtitle>{data.rating}/5 stars</Subtitle>

        <MyButton color="red" onClick={toggleModalHandler}>Delete</MyButton>
        {isModalVisible ? (
        <Modal onClose={toggleModalHandler}>
            <DeleteForm onClose={toggleModalHandler} onDelete={deleteMovie}/>
        </Modal>
      ) : null}
      </InfoBox>
    </ListItem>
  );
};

export default MovieItem;

const ListItem = styled.li`
  background-color: rgba(45, 213, 185, 0.781);
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  display: flex;
  height: 200px;
`;

const ImgBox = styled.div`
  flex: 1;
  border-radius: 10px 0 0 10px;
  overflow: hidden;
`;
const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const InfoBox = styled.div`
  flex: 2;
  padding: 1rem;
`;
const Title = styled.h2`
  font-size: 1.25rem;
  margin: 0;
  color: white;
  margin-bottom: 1rem;
`;
const Subtitle = styled.p`
  font-size: 1.25rem;
  margin: 0;
  color: white;
  display: inline;
  background: #f67722;
  padding: 0.25rem 1rem;
  border-radius: 15px;
`;
