import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/weatherContext';

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
    windDirection: wind.deg,
    lastFetched: dt,
  };
}

const Form = () => {
  const { setWeatherObject, setPopupStatus } = useContext(WeatherContext);
  const [searchLocation, setSearchLocation] = useState('');
  const [error, setError] = useState(null);

  const searchWeatherByCity = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation.trim()}&units=metric&appid=f2ea0ed9ea8fa5922812c1debb3a0bdd`,
    )
      .then((res) => res.json())
      .then((data) => {
        return transformCurrentWeather(data);
      })
      .then((data) => setWeatherObject(data))
      .then(() => setPopupStatus({ openPopup: false }));
  };

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
        />
        <button
          type="submit"
          className="mt-4 w-full bg-gradient-to-b to-purple-800 from-purple-500 text-purple-50 px-6 py-2.5 focus:ring-2 ring-purple-400 rounded-md text-sm font-medium shadow hover:opacity-90 transition duration-150 ease-linear"
        >
          Get Weather Details
        </button>
      </form>
      <div className="my-2 text-center">
        <span className="inline-block text-sm">Or</span>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-br to-pink-700 from-pink-500 text-pink-50 px-6 py-2.5 focus:ring-2 ring-pink-400 rounded-md text-sm font-medium shadow hover:opacity-90 transition duration-150 ease-linear"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="map-marker-alt"
          className="inline-block w-4 h-4 mr-2 fill-current"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
          ></path>
        </svg>
        Use my location
      </button>
    </>
  );
};

export default Form;
