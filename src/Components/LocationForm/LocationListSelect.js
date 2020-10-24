import React from "react";
import styled from "styled-components";
import FormLabel from "./FormLabel";
import FormSelect from "./FormSelect";
import locations from "../../LocationGeoData";

const DivStyled = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 15px;
  grid-area: select;
`;

function LocationListSelect(props) {
  const locationList = Object.keys(locations);

  return (
    <DivStyled>
      <FormLabel labelText={"Cities"} />
      <FormSelect options={locationList} defaultOption={"select a city"} />
      {props.children}
    </DivStyled>
  );
}

export default LocationListSelect;
