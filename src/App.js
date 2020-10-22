import React, { useState } from "react";
import ReactPolling from "react-polling";
import DailyForecastCard from "./Components/DailyForecastCard";
import ForecastTitle from "./Components/ForecastTitle";
import HeatIndicator from "./Components/HeatIndicator";
import WeatherCondition from "./Components/WeatherCondition";
import WeatherHumidity from "./Components/WeatherHumidity";
import WeatherTemp from "./Components/WeatherTemp";
import WeatherDate from "./Components/WeatherDate";
import ForecastList from "./Components/ForecastList";
import AppHeader from "./Components/AppHeader";
import AppFooter from "./Components/AppFooter";
import WeatherIcon from "./Components/WeatherIcon";

function App() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const lat = "-23.5489";
  const lon = "-46.6388";
  const part = "hourly,minutely";
  const url = `${process.env.REACT_APP_API_URL}?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}&units=metric`;
  const [weatherData, setWeatherData] = useState([]);

  const convertTimestampToDate = (unixTimestamp) => {
    let date = new Date(unixTimestamp * 1000);
    let day = date.getDate();
    let month = date.getMonth() + 1;

    return `${day}/${month}`;
  };

  const CardWeatherData = weatherData.slice(0, 5).map((day, index) => {
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

  return (
    <div className="App">
      <ReactPolling
        url={url}
        interval={21600000}
        retryCount={2}
        onSuccess={(response) => {
          console.log(response);
          console.log("handle success");
          setWeatherData(response.daily);
          return true;
        }}
        onFailure={(error) => console.log(error)}
        method={"GET"}
        render={({ startPolling, stopPolling, isPolling }) => {
          if (isPolling) {
            return (
              <React.Fragment>
                <AppHeader />
                <main style={{ padding: "56px 0 30px" }}>
                  <ForecastTitle
                    title={"5-day weather forecast for Sao Paulo"}
                  />
                  <ForecastList>{CardWeatherData}</ForecastList>
                </main>
                <AppFooter />
              </React.Fragment>
            );
          } else {
            return <div> No more weather today! Bye!</div>;
          }
        }}
      />
    </div>
  );
}

export default App;
