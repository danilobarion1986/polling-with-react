import React, { useState } from 'react';
import ReactPolling from 'react-polling'; 

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
    let year = date.getFullYear();

    return `${day}/${month}/${year}` 
  }

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
              <div> 
              <h2>This is the seven days weather forecast</h2>
              {weatherData.map((day, index) => {
                return (
                  <p key={index}>{convertTimestampToDate(day.dt)} => Min Temp: {day.temp.min} ºC, Max Temp: {day.temp.max} ºC</p>
                )
                })}
              </div>
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
