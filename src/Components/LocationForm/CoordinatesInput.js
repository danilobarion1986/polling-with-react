import React from "react";
import styled from "styled-components";
import Input from "./Input";
import FormLabel from "./Label";

const FieldsetStyled = styled.fieldset`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  grid-area: coord;
  border: none;
`;

function CoordinatesInput(props) {
  return (
    <FieldsetStyled>
      <FormLabel labelText={"Lat: "} id={"latitude-label"}>
        <Input
          type={"text"}
          onChange={props.changedLatitude}
          placeholder={"ex: -46.6388"}
        />
      </FormLabel>
      <FormLabel labelText={"Lon: "} id={"longitude-label"}>
        <Input
          type={"text"}
          onChange={props.changedLongitude}
          placeholder={"ex: -23.5489"}
        />
      </FormLabel>
    </FieldsetStyled>
  );
}

export default CoordinatesInput;
