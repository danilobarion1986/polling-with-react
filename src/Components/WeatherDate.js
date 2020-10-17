import React from "react";
import styled from "styled-components";

const HeadingStyled = styled.h3`
  display: block;
  @media (max-width: 500px) {
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