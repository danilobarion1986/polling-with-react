import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.h2`
  text-align: center;
	margin: 1em;
	color: #E0E0E0;
`


function ForecastTitle(props) {
  return (
    <HeaderStyled>
      {props.title}
    </HeaderStyled>
  )
}

export default ForecastTitle;