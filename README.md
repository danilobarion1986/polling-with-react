# Weather app with polling 

This is a ReactJS Weather Forecast application that fetches data from the OpenWeatherMap One Call API.

It uses a react-polling library that emulates a [HTTP long polling](https://www.ably.io/topic/long-polling) technique to update the requested data regurlarly.


## Built with

- [Create React App](https://github.com/facebook/create-react-app)
- [React Polling](https://github.com/vivek12345/react-polling)
- [OpenWeatherMap One Call API](https://openweathermap.org/api/one-call-api)
- [Styled Components](https://styled-components.com/)


## Installation

**1)** Get an Open Weather Map API key

 Sign up to [OpenWeatherMap](https://openweathermap.org/) and get a free key for One Call API.


**2)** Download or fork this repository and install the packages locally with:
 
 ```
 yarn install
 ``` 

**3)** Setup enviroment variables 

Create an .env file in the root folder of your project to store both **API key** and **API URL** with these names:

 ```
 REACT_APP_WEATHER_API_KEY = your_api_key_goes_here
 
 REACT_APP_API_URL = https://api.openweathermap.org/data/2.5/onecall
 ```

**4)** Run the app in the development mode. 

```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Usage

In order to get a 5-day weather forecast:

**1)** **Select** a custom location from the list **OR type** latitude and longitude coordinates in decimal degrees format (99.9999 / -99.9999). (You can find this data for any location here: [latlong.net](https://www.latlong.net/lat-long-dms.html))

**2)** **click Get Weather** 

If the request is sucessful, the app will render 5 cards displaying:

- forecast Date (dd/mm)
- Max/min temp (celsius)
- Weather condition description
- Weather condition thumbnail
- Humidity values


## Contribute

Contributions to this project are welcome. 
Check the open issues for a list of proposed features (and known issues).

1. Fork the Project
2. Create your Feature Branch ```git checkout -b feature/NewFeature```
3. Commit your Changes ```git commit -m 'Add some NewFeature'```
4. Push to the Branch ```git push origin feature/NewFeature```
5. Open a Pull Request





