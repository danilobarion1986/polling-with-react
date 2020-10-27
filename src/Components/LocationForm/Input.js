import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  margin: 0.5em 0;
  padding: 3px;
  outline: none;
  border: 0;
  border-radius: 5px;
  max-width: 100px;
  &:focus {
    box-shadow: 0px 1px 5px black;
  }
`;

function Input(props) {
  return (
    <InputStyled
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
}

export default Input;
