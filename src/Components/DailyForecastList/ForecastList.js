import React from "react";
import styled from "styled-components";
import DailyForecastCard from "./DailyForecastCard";
import HeatIndicator from "../WeatherCard/HeatIndicator";
import WeatherCondition from "../WeatherCard/WeatherCondition";
import WeatherDate from "../WeatherCard/WeatherDate";
import WeatherHumidity from "../WeatherCard/WeatherHumidity";
import WeatherIcon from "../WeatherCard/WeatherIcon";
import WeatherTemp from "../WeatherCard/WeatherTemp";

const DivStyled = styled.div`
  display: flex;
  margin: 0.5em;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 680px) {
    flex-flow: column;
  }
`;

function ForecastList(props) {
  const convertTimestampToDate = (unixTimestamp) => {
    let date = new Date(unixTimestamp * 1000);
    let day = date.getDate();
    let month = date.getMonth() + 1;

    return `${day}/${month}`;
  };

  const weatherCards = props.weatherData.slice(0, 5).map((day, index) => {
    return (
      <DailyForecastCard key={index}>
        <WeatherDate date={convertTimestampToDate(day.dt)} />
        <HeatIndicator maxHeat={Math.round(day.temp.max)} />
        <WeatherIcon
          iconNum={day.weather[0].icon}
          iconDescription={day.weather[0].description}
        />
        <WeatherTemp
          maxTemp={Math.round(day.temp.max) + "º"}
          minTemp={Math.round(day.temp.min) + "º"}
        />
        <WeatherCondition condition={day.weather[0].main} />
        <WeatherHumidity humidity={day.humidity + "%"} />
      </DailyForecastCard>
    );
  });

  return <DivStyled>{weatherCards}</DivStyled>;
}

export default ForecastList;
