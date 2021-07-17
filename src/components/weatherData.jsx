import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import TodayForecast from './todayForecast'
import SevenDayForecast from './sevenDayForecast'
import {
  faChevronRight,
  faTemperatureLow,
  faWind,
  faSun,
} from '@fortawesome/free-solid-svg-icons'

const WeatherData = props => {
  const [open, setOpen] = useState(false)

  const {
    name,
    latitude,
    longitude,
    temperatureInCelcius,
    humidity,
    minTemperatureInCelcius,
    maxTemperatureInCelcius,
    feelsLike,
    weatherDescription,
    windSpeed,
    hourly,
    daily,
    lastFetched,
  } = props.location

  let dropDownClasses = 'bg-white transition transform duration-300'
  dropDownClasses = open ? dropDownClasses : `${dropDownClasses} h-0`
  return (
    <div className='my-6 overflow-hidden rounded-lg shadow-lg weather-data'>
      <header
        className='cursor-pointer bg-gradient-to-t to-gray-100 from-gray-200'
        onClick={() => setOpen(!open)}
      >
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-between w-7/12 px-4 py-2 leading-tight'>
            <div className='w-8'>
              <FontAwesomeIcon
                icon={faChevronRight}
                className={
                  open
                    ? 'h-6 w-6 text-gray-700 transform rotate-90'
                    : 'h-6 w-6 text-gray-700 transform'
                }
              />
            </div>
            <div className='w-64'>
              <h2 className='text-base font-bold text-gray-700 cursor-pointer'>
                {name}
              </h2>
              <span className='text-sm text-gray-600'>
                {weatherDescription}
              </span>
            </div>
            <div className='w-32'>
              <span className='text-sm text-gray-600'>
                <FontAwesomeIcon icon={faSun} className='mr-2' />
                {temperatureInCelcius}°C
              </span>
            </div>
            <div className='w-32'>
              <span className='text-sm text-gray-600'>
                <FontAwesomeIcon icon={faWind} className='mr-2' />
                {windSpeed} m/s
              </span>
            </div>
            <div className='w-32'>
              <span className='text-sm text-gray-600'>
                <FontAwesomeIcon icon={faTemperatureLow} className='mr-2' />
                {humidity}%
              </span>
            </div>
          </div>
          <div className='w-5/12 px-4 font-normal text-right'>
            <div className='flex flex-col'>
              <span className='block text-xs font-normal leading-loose text-gray-600'>
                Fetched {moment.unix(lastFetched).fromNow()}
              </span>
              <div className='flex justify-end'>
                <button
                  onClick={() => props.removeLocation(props.location)}
                  className='inline-block ml-4 text-xs text-yellow-600 hover:text-red-300'
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={dropDownClasses}>
        <div className='px-4 py-3 other-info'>
          <div className='flex flex-wrap items-center -mx-4'>
            {minTemperatureInCelcius && (
              <div className='w-1/5 px-4 py-2'>
                <div className='card px-4 py-2.5 border rounded-md text-gray-700 font-bold'>
                  <span className='block text-sm font-normal text-gray-500'>
                    Minimum Temperature
                  </span>
                  {minTemperatureInCelcius}°C
                </div>
              </div>
            )}
            {maxTemperatureInCelcius && (
              <div className='w-1/5 px-4 py-2'>
                <div className='card px-4 py-2.5 border rounded-md text-gray-700 font-bold'>
                  <span className='block text-sm font-normal text-gray-500'>
                    Maximum Temperature
                  </span>
                  {maxTemperatureInCelcius}°C
                </div>
              </div>
            )}
            <div className='w-1/5 px-4 py-2'>
              <div className='card px-4 py-2.5 border rounded-md text-gray-700 font-bold'>
                <span className='block text-sm font-normal text-gray-500'>
                  Feels like
                </span>
                {feelsLike}°C
              </div>
            </div>
            <div className='w-1/5 px-4 py-2'>
              <div className='card px-4 py-2.5 border rounded-md text-gray-700 font-bold'>
                <span className='block text-sm font-normal text-gray-500'>
                  Latitude
                </span>
                {latitude}
              </div>
            </div>
            <div className='w-1/5 px-4 py-2'>
              <div className='card px-4 py-2.5 border rounded-md text-gray-700 font-bold'>
                <span className='block text-sm font-normal text-gray-500'>
                  Longitude
                </span>
                {longitude}
              </div>
            </div>
          </div>
        </div>
        {hourly && daily && (
          <div className='flex flex-wrap items-center px-4 pb-4 -mx-4'>
            <div className='w-1/2 px-4 today'>
              <TodayForecast hourlyData={hourly} />
            </div>
            <div className='w-1/2 px-4 seven-day'>
              <SevenDayForecast dailyData={daily} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default WeatherData
