import React, { forwardRef } from "react";
import styled from "styled-components";
import Input from "./Input";

const InputForm = forwardRef(({ lableTitle, inputType }, ref) => {
  return (
    <>
      <StyledLabel>{lableTitle}</StyledLabel>
      <Input type={inputType} ref={ref}/>
    </>
  );
})

export default InputForm;

const StyledLabel = styled.label`
     font-weight: bold;
    margin: 0.5rem 0;
    color: #464646;
`
