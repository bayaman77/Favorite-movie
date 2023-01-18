import React, { forwardRef } from "react";
import styled from "styled-components";

const Input = forwardRef(({type}, ref) => {
  return <StyledInput type={type} ref={ref}/>;
})

export default Input;

const StyledInput = styled.input`
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.4rem 0.2rem;
  color: #383838;
  display: block;
  width: 100%;
  margin: 10px 0;
`;
