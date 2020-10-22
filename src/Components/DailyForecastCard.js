import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  margin: 0.3em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 600px;
  border: none;
  border-radius: 30px;
  background-color: #e0e0e0;
  @media (max-width: 680px) {
    display: grid;
    gap: 0.3em;
    grid-template-areas:
      "date heat"
      "icon temp"
      "condition humidity";
    place-items: center;
  }
`;

function DailyForecastCard(props) {
  return <CardStyled>{props.children}</CardStyled>;
}

export default DailyForecastCard;
