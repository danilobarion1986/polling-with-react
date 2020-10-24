import React from "react";
import styled from "styled-components";
import FormLabel from "./FormLabel";
import FormSelect from "./FormSelect";
import locations from "../../locationGeoData";

const DivStyled = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 15px;
  grid-area: select;
`;

function LocationListSelect(props) {
  const handleSelected = (cityGeoData) => {
    props.setLatitude(locations[cityGeoData].lat);
    props.setLongitude(locations[cityGeoData].lon);
  };

  return (
    <DivStyled>
      <FormLabel labelText={"Cities"} />
      <FormSelect
        options={locations}
        defaultOption={"select a city"}
        selected={handleSelected}
      />
      {props.children}
    </DivStyled>
  );
}

export default LocationListSelect;
