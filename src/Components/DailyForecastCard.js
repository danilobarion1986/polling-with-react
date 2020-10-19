import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  margin: 1em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 600px;
  border: none;
  border-radius: 30px;
  background-color: #E0E0E0;
  @media (max-width: 680px) {
		display: grid;
		gap: 0.7em;
		grid-template-areas: 
			"date temp"
			"heat temp"
			"humidity condition";
		place-items: center;
  }
`


function DailyForecastCard(props) {
  return (
    <CardStyled>
      {props.children}
    </CardStyled>
  )
}

export default DailyForecastCard;