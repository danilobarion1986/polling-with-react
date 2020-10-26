import React from "react";
import styled from "styled-components";

const LegendStyled = styled.legend`
  text-align: center;
  margin: 0.5em;
  font-weight: bold;
  grid-area: legend;
`;

function Subtitle(props) {
  return <LegendStyled>{props.legend}</LegendStyled>;
}

export default Subtitle;
