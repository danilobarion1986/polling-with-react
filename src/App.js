import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPolling from 'react-polling'; 

function App() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  const lat =  "-23.5489";
  const lon =  "-46.6388";
  const part = "hourly,minutely";
  const [weatherData, setWeatherData] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <ReactPolling
        url={`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}`}
        interval= {20000}
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
              <h2>Hello I am polling</h2>
              {weatherData.map((item, index) => {
                return (
                  <p key={index}>{item.dt}</p>
                )
                })}
              </div>
            );
          } else {
            return (
              <div> Hello I stopped polling</div>
            );
          }
        }}
      />
    </div>
  );
}

export default App;
