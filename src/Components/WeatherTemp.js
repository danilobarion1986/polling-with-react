import React from "react";
import styled from "styled-components";

const DivStyled = styled.h3`
  display: block;
  @media (max-width: 500px) {
    grid-area: temp;
  }
`
const MaxTempSpan = styled.span`
  font-size: 1.9em;
	font-weight: 700;
`

const MinTempSpan = styled.span`
  font-size: 1.2em;
	font-weight: 400;
`

function WeatherTemp(props) {
  return (
    <DivStyled >
      <MaxTempSpan>{props.maxTemp}</MaxTempSpan>
      {" /"}
      <MinTempSpan>{props.minTemp}</MinTempSpan>
    </DivStyled>
  )

}

export default WeatherTemp;