import React from "react";
import styled from "styled-components";
import FormInput from "./FormInput";
import FormLabel from "./FormLabel";

const FieldsetStyled = styled.fieldset`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  grid-area: coord;
  border: none;
`;

function LocationCoordinatesInput(props) {
  return (
    <FieldsetStyled>
      <FormLabel labelText={"Lat: "} id={"latitude-label"}>
        <FormInput
          type={"text"}
          onChange={props.changedLatitude}
          placeholder={"ex: -46.6388"}
        />
      </FormLabel>
      <FormLabel labelText={"Lon: "} id={"longitude-label"}>
        <FormInput
          type={"text"}
          onChange={props.changedLongitude}
          placeholder={"ex: -23.5489"}
        />
      </FormLabel>
    </FieldsetStyled>
  );
}

export default LocationCoordinatesInput;
