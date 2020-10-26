import React, { useState } from "react";
import styled from "styled-components";
import FormButton from "./Button";
import CoordinatesInput from "./CoordinatesInput";
import Subtitle from "./Subtitle";
import LocationList from "./LocationList";

const FormStyled = styled.form`
  display: grid;
  grid-template-areas:
    "legend legend"
    "coord select"
    "coord select"
    "button button";
  gap: 10px;
  align-items: center;
  justify-content: space-evenly;
  max-width: 350px;
  margin: 1em auto;
  padding: 0.5em 0.8em;
  background-color: #e0e0e0;
  border-radius: 20px;
`;

function Form(props) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleLatitudeInput = (e) => {
    setLatitude(e.target.value);
  };

  const handleLongitudeInput = (e) => {
    setLongitude(e.target.value);
  };

  const resetForm = () => {
    setLatitude("");
    setLongitude("");
  };

  const sendGeoDataInput = (e) => {
    e.preventDefault();
    props.getWeather({ lat: latitude, lon: longitude });
    resetForm();
  };

  return (
    <FormStyled>
      <Subtitle
        legend={"Type latitude and longitude OR choose a city from the list"}
      />
      <CoordinatesInput
        changedLatitude={handleLatitudeInput}
        changedLongitude={handleLongitudeInput}
      />
      <LocationList setLatitude={setLatitude} setLongitude={setLongitude} />
      <FormButton clicked={sendGeoDataInput} name={"Get weather"} />
    </FormStyled>
  );
}

export default Form;
