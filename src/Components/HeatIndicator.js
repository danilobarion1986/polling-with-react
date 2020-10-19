import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  width: 4em;
	height: 15px;
  margin: 0.2em;
  background-color: ${props => props.color};
	border-radius: 10px;
  @media (max-width: 680px) {
    grid-area: heat;
  }
`

function HeatIndicator(props) {
  
  const heatMapColor = {
    extremeCold: "#417bbc",
    cold: "#8dc4ac",
    mild: "#fccf79",
    hot: "#f68838",
    extremeHot: "#ee3e32" 
  }
  
  const getColor = (heatValue) => {
    return (
      (heatValue >= 35) ? heatMapColor.extremeHot 
      : (heatValue >= 25) ? heatMapColor.hot
      : (heatValue >= 15) ? heatMapColor.mild
      : (heatValue >= 5) ? heatMapColor.cold
      : heatMapColor.extremeCold
    ) 
  }

  return (
    <StyledSpan color={getColor(props.maxHeat)} />
)}

export default HeatIndicator;