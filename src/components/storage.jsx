import { Component } from 'react';

class Storage extends Component {
  state = {
    srWeather: {},
    openPopup: false,
    localCacheFound: false,
  };

  checkLocalCache = () => {
    let weatherData = window.localStorage.getItem('srWeather');

    if (!weatherData) return;

    if (weatherData) {
      this.setState({ localCacheFound: true });
      return;
    }
  };

  setWeatherData = () => {
    const srWeather = JSON.parse(window.localStorage.getItem('srWeather'));
    this.setState({ srWeather, localCacheFound: false });
  };

  removeWeatherDataByLocation = (location) => {
    let weatherData = { ...this.state.srWeather };
    let { locations } = weatherData;

    let newLocations = locations.filter((loc) => loc.id !== location.id);

    weatherData = {
      locations: newLocations,
      lastUpdated: weatherData.lastUpdated,
    };

    this.setState({ srWeather: weatherData });
    this.saveWeatherObjectOnLocal(weatherData);

    if (!newLocations.length) this.clearLocalCache();
  };

  saveWeatherObjectOnLocal = (weatherData) => {
    const freshWeatherData = JSON.stringify(weatherData);
    window.localStorage.removeItem('srWeather');
    window.localStorage.setItem('srWeather', freshWeatherData);
  };

  clearLocalCache = () => {
    window.localStorage.removeItem('srWeather');
    this.setState({ localCacheFound: false });
  };
}

export default Storage;
