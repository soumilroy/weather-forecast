import React, { Component } from 'react';

class Storage extends Component {
  state = { srWeather: null };

  obtainWeatherObjectOnLoad = () => {
    const weatherObj = JSON.parse(window.localStorage.getItem('srWeather'));

    if (!weatherObj) {
      console.log(`Weather Object not defined!`);
    } else {
      console.log(weatherObj);
    }
  };

  saveWeatherObjectOnFetch = (weatherData = { someVal: 123 }) => {
    const freshWeatherData = JSON.stringify(weatherData);
    window.localStorage.setItem('srWeather', freshWeatherData);
  };

  validateWeatherObject = (weatherData) => {};
}

export default Storage;
