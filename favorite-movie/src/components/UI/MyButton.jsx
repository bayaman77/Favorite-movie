import React from "react";
import styled from "styled-components";

const MyButton = ({ color, children, onClick, textColor}) => {
  return (
    <StyledButton style={{ background: `${color}`, color: `${textColor}` }} onClick={onClick}>{children}</StyledButton>
  );
};

export default MyButton;

const StyledButton = styled.button`
  font: inherit;
  margin: 0 5px;
  padding: 0.5rem 1rem;
  border: none;
  background-color: blue;
  color: white;
  border-radius: 6px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  &:hover,
  &:hover {
    background: #f3cc4b;
    border-color: #f3cc4b;
    color: #995200;
  }
`;
