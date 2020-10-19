import React from "react";
import styled from "styled-components";

const DivStyled = styled.div`
  display: flex;
  margin: 0.5em;
	flex-flow: row;
  justify-content: center;
  @media (max-width: 680px) {
    flex-flow: column;
  }
`


function ForecastList(props) {
  return (
    <DivStyled>
      {props.children}
    </DivStyled>
  )
}

export default ForecastList;