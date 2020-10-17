import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  margin: 1em auto;
  padding: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 600px;
  border: none;
  border-radius: 30px;
  background-color: #E0E0E0;;
`


function DailyForecastCard(props) {
  return (
    <CardStyled>
      {props.children}
    </CardStyled>
  )
}

export default DailyForecastCard;