import React from "react";
import styled from "styled-components";

const ParagStyled = styled.p`
  display: block;
  margin: 0.2em;
  @media (max-width: 680px) {
    grid-area: condition;
  }
`


function WeatherCondition(props) {
  return (
    <ParagStyled >
      {props.condition}
    </ParagStyled>
  )

}

export default WeatherCondition;