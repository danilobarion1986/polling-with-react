import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  width: 15px;
	height: 2em;
  background-color: ${props => props.color};
	border-radius: 10px;
  @media (max-width: 500px) {
    grid-area: heat;
		width: 4em;
		height: 15px;
  }
`


function HeatIndicator(props) {
  return (
    <StyledSpan color={props.heatColor} />
)}

export default HeatIndicator;