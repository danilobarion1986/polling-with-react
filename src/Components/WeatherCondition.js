import React from "react";
import styled from "styled-components";

const ParagStyled = styled.p`
  display: block;
  @media (max-width: 500px) {
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