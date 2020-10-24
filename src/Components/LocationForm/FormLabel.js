import React from "react";
import styled from "styled-components";

const LabelStyled = styled.label``;

function FormLabel(props) {
  return (
    <LabelStyled>
      {props.labelText}
      {props.children}
    </LabelStyled>
  );
}

export default FormLabel;
