import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.h2`
  text-align: center;
  margin: 1em;
  color: #e0e0e0;
`;

function ForecastTitle(props) {
  return <HeaderStyled>{props.title}</HeaderStyled>;
}

export default ForecastTitle;
