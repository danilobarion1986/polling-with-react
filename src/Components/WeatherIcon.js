import React from "react";
import styled from "styled-components";

const ImageStyled = styled.img`
  display: block;
  width: 90px;
  height: auto;
  @media (max-width: 680px) {
    grid-area: icon;
    width: 70px;
`


function WeatherIcon(props) {
  return (
    <ImageStyled 
      src={`http://openweathermap.org/img/wn/${props.iconNum}@2x.png`}
      alt={props.iconDescription}
    />
  )
}

export default WeatherIcon;