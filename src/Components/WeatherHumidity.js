import React from "react";
import styled from "styled-components";

const ParagStyled = styled.p`
  display: block;
  margin: 0.2em;
  min-width: max-content;
  @media (max-width: 680px) {
    grid-area: humidity;
  }
`;

function WeatherHumidity(props) {
  return <ParagStyled>Hum. {props.humidity}</ParagStyled>;
}

export default WeatherHumidity;
