import React from "react";
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
  const handleLatitudeInput = (e) => {
    props.setLatitude(e.target.value);
    props.setSelectedLocation("");
  };

  const handleLongitudeInput = (e) => {
    props.setLongitude(e.target.value);
    props.setSelectedLocation("");
  };

  const resetForm = () => {
    props.setLatitude("");
    props.setLongitude("");
    props.setSelectedLocation("");
  };

  const sendGeoDataInput = (e) => {
    e.preventDefault();
    props.getWeather({ lat: props.latitude, lon: props.longitude });
    resetForm();
  };

  return (
    <FormStyled>
      <Subtitle
        legend={"Type latitude and longitude OR choose a city from the list"}
      />
      <CoordinatesInput
        latitude={props.latitude}
        longitude={props.longitude}
        changedLatitude={handleLatitudeInput}
        changedLongitude={handleLongitudeInput}
      />
      <LocationList
        setLatitude={props.setLatitude}
        setLongitude={props.setLongitude}
        selectedLocation={props.selectedLocation}
        setSelectedLocation={props.setSelectedLocation}
      />
      <FormButton clicked={sendGeoDataInput} name={"Get weather"} />
    </FormStyled>
  );
}

export default Form;
