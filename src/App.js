import React, { useState } from 'react';
import ReactPolling from 'react-polling'; 
import DailyForecastCard from './Components/DailyForecastCard';
import ForecastTitle from './Components/ForecastTitle';
import HeatIndicator from './Components/HeatIndicator';
import WeatherCondition from './Components/WeatherCondition';
import WeatherHumidity from './Components/WeatherHumidity';
import WeatherTemp from './Components/WeatherTemp';
import WeatherDate from "./Components/WeatherDate";
import ForecastList from './Components/ForecastList';

function App() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  const lat =  "-23.5489";
  const lon =  "-46.6388";
  const part = "hourly,minutely";
  const [weatherData, setWeatherData] = useState([])

  const convertTimestampToDate = (unixTimestamp) => {
    let date = new Date(unixTimestamp * 1000);
    let day = date.getDate(); 
    let month = date.getMonth() + 1;
    /* let year = date.getFullYear(); */

    return `${day}/${month}` 
  }

  const CardWeatherData = weatherData.map((day, index) => {
    return (
      <React.Fragment>
        <DailyForecastCard key={index}>
          <WeatherDate date={convertTimestampToDate(day.dt)}/>
          <WeatherCondition condition={day.weather[0].main}/>
          <HeatIndicator />
          <WeatherTemp 
            maxTemp={Math.round(day.temp.max) + "º"}
            minTemp={Math.round(day.temp.min) + "º"}
          />
          <WeatherHumidity humidity={day.humidity}/>
        </DailyForecastCard>
      </React.Fragment>
    )
    })

  return (
    <div className="App">

      <ReactPolling
        url={`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}&units=metric`}
        interval= {10000}
        retryCount={2}
        onSuccess={(response) => {
            console.log(response);
            console.log('handle success');
            setWeatherData(response.daily);
            return true
          }
        }
        onFailure={(error) => console.log(error)}
        method={'GET'}
        render={({ startPolling, stopPolling, isPolling }) => {
          if (isPolling) {
            return (
              <React.Fragment> 
                <ForecastTitle title={"5-day weather forecast for Sao Paulo"}/>
                <ForecastList>
                  {CardWeatherData}
                </ForecastList>
              </React.Fragment>
            );
          } else {
            return (
              <div> No more weather today! Bye!</div>
            );
          }
        }}
      />
    </div>
  );
}

export default App;

/* 

To DO:

- create logic for display heat color box
- remove dec


*/