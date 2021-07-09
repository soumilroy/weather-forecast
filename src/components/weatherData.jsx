import React, { useState } from 'react';
// import TodayForecast from './todayForecast'
// import SevenDayForecast from './sevenDayForecast'

// id,
// name,
// latitude: coord.lat,
// longitude: coord.lon,
// temperatureInCelcius: main.temp,
// minTemperatureInCelcius: main.temp_min,
// maxTemperatureInCelcius: main.temp_max,
// feelsLike: main.feels_like,
// humidity: main.humidity,
// weatherMain: weather.main,
// weatherDescription: weather.description,
// windSpeed: wind.speed,
// windDirection: wind.deg,
// windGust: wind.gust,
// lastFetched: dt,

const WeatherData = (props) => {
  const [open, setOpen] = useState(false);

  const {
    id,
    name,
    latitude,
    longitude,
    temperatureInCelcius,
    minTemperatureInCelcius,
    maxTemperatureInCelcius,
    feelsLike,
    humidity,
    weatherMain,
    weatherDescription,
    windSpeed,
    windDirection,
    lastFetched,
  } = props.location;

  let dropDownClasses = 'bg-white transition transform duration-300';
  dropDownClasses = open ? dropDownClasses : `${dropDownClasses} h-0`;
  return (
    <div className="my-6 overflow-hidden rounded-lg shadow-lg weather-data">
      <header className="bg-gradient-to-b to-gray-600 from-gray-500">
        <div className="flex items-center justify-between">
          <div className="flex justify-between w-7/12 px-4 py-4">
            <div className="w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={
                  open
                    ? 'h-6 w-6 text-gray-50 transform'
                    : 'h-6 w-6 text-gray-50 transform -rotate-90'
                }
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="w-64">
              <h2
                className="text-lg font-bold text-gray-100 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                {name}
              </h2>
            </div>
            <div className="w-24">
              <span className="text-base font-medium text-gray-200">
                {temperatureInCelcius} °C
              </span>
            </div>
            <div className="w-24">
              <span className="text-base font-medium text-gray-200">
                {windSpeed}
              </span>
            </div>
            <div className="w-24">
              <span className="text-base font-medium text-gray-200">
                {humidity}
              </span>
            </div>
          </div>
          <div className="w-5/12 px-4 font-normal text-right">
            <div className="flex flex-col">
              <span className="block text-xs font-normal leading-loose text-gray-300">
                Generated on {new Date(lastFetched).toLocaleDateString()}
              </span>
              <div className="flex justify-end">
                <button
                  onClick={() => props.removeLocation(props.location)}
                  className="inline-block ml-4 text-xs text-yellow-200 hover:text-red-300"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={dropDownClasses}>
        <div className="flex flex-wrap">
          <div className="w-1/2 px-4 py-4">
            <div className="">{/* <TodayForecast /> */}</div>
          </div>
          <div className="w-1/2 px-4 py-4">
            <div className="">{/* <SevenDayForecast /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
