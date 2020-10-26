import React from "react";
import styled from "styled-components";
import Label from "./Label";
import Select from "./Select";
import locations from "../../Utils/locationGeoData";

const DivStyled = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 15px;
  grid-area: select;
`;

function LocationList(props) {
  const handleSelected = (cityGeoData) => {
    props.setLatitude(locations[cityGeoData].lat);
    props.setLongitude(locations[cityGeoData].lon);
  };

  return (
    <DivStyled>
      <Label labelText={"Cities"} />
      <Select
        options={locations}
        defaultOption={"select a city"}
        selected={handleSelected}
      />
      {props.children}
    </DivStyled>
  );
}

export default LocationList;
