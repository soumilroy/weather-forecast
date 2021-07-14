import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Controls from './components/controls';
import Popup from './components/popup';
import Form from './components/form';
import EmptyMessage from './components/emptyMessage';
import { WeatherContext } from './context/weatherContext';
import WeatherLocations from './components/weatherLocations';
// env read import.meta.env.SNOWPACK_PUBLIC_API_URL
// const {SNOWPACK_PUBLIC_API_URL} = import.meta.env;
// fetch(`${SNOWPACK_PUBLIC_API_URL}/users`).then(...)

const App = () => {
  let [openPopup, setOpenPopup] = useState(false);
  let [localCacheFound, setLocalCacheFound] = useState(false);
  const [weather, setWeather] = useState({ locations: [] });

  const checkLocalCache = () => {
    let weatherData = window.localStorage.getItem('srWeather');

    if (!weatherData) return;

    if (weatherData) {
      setLocalCacheFound(true);
      return;
    }
  };

  const setWeatherObject = (locationData) => {
    const weatherClone = { ...weather };
    weatherClone.locations.unshift(locationData);
    setWeather(weatherClone);
    saveWeatherObjectOnLocal(weatherClone);
  };

  const setWeatherDataFromCache = () => {
    const srWeather = JSON.parse(window.localStorage.getItem('srWeather'));
    setWeather(srWeather);
    setLocalCacheFound(false);
  };

  const removeWeatherDataByLocation = (location) => {
    let weatherData = { ...weather };
    let { locations } = weatherData;

    let newLocations = locations.filter((loc) => loc.id !== location.id);

    weatherData = {
      locations: newLocations,
      lastUpdated: weatherData.lastUpdated,
    };

    setWeather(weatherData);
    saveWeatherObjectOnLocal(weatherData);

    if (!newLocations.length) clearLocalCache();
  };

  const saveWeatherObjectOnLocal = (weatherData) => {
    const freshWeatherData = JSON.stringify(weatherData);
    window.localStorage.removeItem('srWeather');
    window.localStorage.setItem('srWeather', freshWeatherData);
  };

  const clearLocalCache = () => {
    window.localStorage.removeItem('srWeather');
    setWeather({ locations: [] });
    setLocalCacheFound(false);
  };

  const setPopupStatus = () => {
    setOpenPopup(!openPopup);
  };

  useEffect(() => {
    checkLocalCache();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        localCacheFound,
        setWeatherObject,
        setWeatherDataFromCache,
        clearLocalCache,
        setPopupStatus,
      }}
    >
      <div className="relative min-h-screen App bg-gradient-to-t from-gray-900 via-gray-700 to-gray-800">
        <Header />
        <Controls localCacheFound={localCacheFound} />
        <WeatherLocations
          weather={weather}
          removeWeatherDataByLocation={removeWeatherDataByLocation}
        />
        <Popup open={openPopup} setPopupStatus={setPopupStatus}>
          <Form setPopupStatus={setPopupStatus} />
        </Popup>
        {weather.locations.length === 0 && <EmptyMessage />}
      </div>
    </WeatherContext.Provider>
  );
};

export default App;
