import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 0.5em;
  background-color: #e0e0e0;
  color: #263238;
  box-shadow: 0px 1px 2px 2px hsl(200deg 11% 11% / 65%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
`;
function AppHeader(props) {
  return (
    <HeaderStyled>
      <h1>Weather forecast App</h1>
    </HeaderStyled>
  );
}

export default AppHeader;
