import React from "react";
import styled from "styled-components";

const DivStyled = styled.div`
  display: block;
  margin-bottom: 0.8em;
  min-width: max-content;
  @media (max-width: 680px) {
    grid-area: temp;
  }
`
const MaxTempSpan = styled.span`
  font-size: 1.6em;
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