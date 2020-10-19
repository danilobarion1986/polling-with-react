import React from "react";
import styled from "styled-components";

const HeadingStyled = styled.h3`
  display: block;
  margin: 0.2em;
  @media (max-width: 680px) {
    grid-area: date;
  }
`


function WeatherDate(props) {
  return (
    <HeadingStyled >
      {props.date}
    </HeadingStyled>
  )

}

export default WeatherDate;