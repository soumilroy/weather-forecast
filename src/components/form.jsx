import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/weatherContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';

function transformWeatherByCoord({ lat, lon, current, hourly, daily }) {
  return {
    id: current.dt,
    name: 'My Location',
    latitude: lat,
    longitude: lon,
    temperatureInCelcius: current.temp,
    feelsLike: current.feels_like,
    humidity: current.humidity,
    weatherMain: current.weather[0].main,
    weatherDescription: current.weather[0].description,
    windSpeed: current.wind_speed,
    lastFetched: current.dt,
    hourly,
    daily,
  };
}

function transformCurrentWeather({ id, name, coord, weather, main, wind, dt }) {
  return {
    id,
    name,
    latitude: coord.lat,
    longitude: coord.lon,
    temperatureInCelcius: main.temp,
    minTemperatureInCelcius: main.temp_min,
    maxTemperatureInCelcius: main.temp_max,
    feelsLike: main.feels_like,
    humidity: main.humidity,
    weatherMain: weather[0].main,
    weatherDescription: weather[0].description,
    windSpeed: wind.speed,
    lastFetched: dt,
  };
}

const Form = () => {
  const { setWeatherObject, setPopupStatus } = useContext(WeatherContext);
  const [searchLocation, setSearchLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkWeatherForCurrentLoc = () => {
    setLoading(true);

    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=22.5697&lon=88.3697&exclude=minutely,daily,alerts&units=metric&appid=f2ea0ed9ea8fa5922812c1debb3a0bdd`,
    )
      .then((res) => res.json())
      .then((data) => transformWeatherByCoord(data))
      .then((data) => {
        setWeatherObject(data);
        setLoading(false);
      })
      .then(() => setPopupStatus({ openPopup: false }))
      .catch(() => {
        setError(`This location doesn't exist`);
        setLoading(false);
      });
  };

  const searchWeatherByCity = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation.trim()}&units=metric&appid=f2ea0ed9ea8fa5922812c1debb3a0bdd`,
    )
      .then((res) => res.json())
      .then((data) => transformCurrentWeather(data))
      .then((data) => {
        setWeatherObject(data);
        setLoading(false);
      })
      .then(() => setPopupStatus({ openPopup: false }))
      .catch(() => {
        setError(`This location doesn't exist`);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="text-center py-4 px-4 rounded-md bg-green-100 text-green-700 font-medium text-lg">
        <span className="inline-flex items-center">
          Fetching weather
          <FontAwesomeIcon
            icon={faSpinner}
            size="lg"
            spin
            className="text-green-700 ml-2"
          />
        </span>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={searchWeatherByCity}>
        <label htmlFor="location" className="block mb-2 text-sm text-gray-600">
          Type Location
        </label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={(e) => setSearchLocation(e.target.value)}
          className="w-full block py-2.5 px-4 border border-gray-300 rounded-md focus:ring ring-purple-300 focus:border-purple-400 outline-none transition duration-150 ease-in text-sm"
          placeholder="e.g London"
          required
        />
        {error ? (
          <span className="text-xs text-red-500 mt-2">{error}</span>
        ) : (
          ''
        )}
        <button
          type="submit"
          className="mt-4 w-full bg-gradient-to-b to-purple-800 from-purple-500 text-purple-50 px-6 py-2.5 focus:ring-2 ring-purple-400 rounded-md text-sm font-medium shadow hover:opacity-90 transition duration-150 ease-linear"
        >
          Get Weather Details
        </button>

        <div className="my-2 text-center">
          <span className="inline-block text-sm">Or</span>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-br to-pink-700 from-pink-500 text-pink-50 px-6 py-2.5 focus:ring-2 ring-pink-400 rounded-md text-sm font-medium shadow hover:opacity-90 transition duration-150 ease-linear"
          onClick={checkWeatherForCurrentLoc}
        >
          <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
          Use my location
        </button>
      </form>
    </>
  );
};

export default Form;
