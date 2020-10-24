import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  margin: 1em;
  padding: 0.5em;
  width: 150px;
  background-color: #ffc370;
  border: none;
  border-radius: 5px;
  grid-area: button;
  justify-self: center;
  &:hover {
    cursor: pointer;
    background-color: #ff990a;
    transition: background-color 0.2s;
  }
`;

function FormButton(props) {
  return <ButtonStyled onClick={props.clicked}>{props.name}</ButtonStyled>;
}

export default FormButton;
