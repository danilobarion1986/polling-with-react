import React from "react";
import styled from "styled-components";
import FormLabel from "./FormLabel";
import FormSelect from "./FormSelect";

const DivStyled = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 15px;
  grid-area: select;
`;

function LocationListSelect(props) {
  return (
    <DivStyled>
      <FormLabel labelText={"Cities"} />
      <FormSelect options={[""]} defaultOption={"Pick a city"} />
      {props.children}
    </DivStyled>
  );
}

export default LocationListSelect;
