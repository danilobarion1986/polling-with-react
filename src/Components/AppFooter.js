import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  position: fixed;
  width: 100vw;
  bottom: 0;
  padding: 0.3em;
  background-color: #E0E0E0;
  box-shadow: 0px 1px 2px 2px hsl(200deg 11% 11% / 65%);
}
`;
function AppFooter(props) {
  return (
    <FooterStyled>
      <p>
        Info provided by{" "}
        <a href={"https://openweathermap.org/"}>openweathermap.org</a>
      </p>
    </FooterStyled>
  );
}

export default AppFooter;
