import React from "react";
import styled from "styled-components";
import MyButton from "./UI/MyButton";

const DeleteForm = ({onClose, onDelete}) => {
  return (
    <>
      <h4>Are sure you wanna delete?</h4>
      <ButtonsBox>
        <MyButton color="white" textColor="blue" onClick={onClose}> 
          No
        </MyButton>
        <MyButton color="blue" onClick={onDelete}>Yes</MyButton>
      </ButtonsBox>
    </>
  );
};

export default DeleteForm;

const ButtonsBox = styled.div`
  display: flex;
  justify-content: end;
`;
