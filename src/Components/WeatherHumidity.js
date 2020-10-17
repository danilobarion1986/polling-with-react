import React from "react";
import styled from "styled-components";

const ParagStyled = styled.p`
  display: block;
  @media (max-width: 500px) {
    grid-area: humidity;
  }
`


function WeatherHumidity(props) {
  return (
    <ParagStyled >
      Hum. {props.humidity}
    </ParagStyled>
  )

}

export default WeatherHumidity;