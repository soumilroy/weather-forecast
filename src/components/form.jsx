import React, { useState, useContext } from 'react'
import { WeatherContext } from '../context/weatherContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faSpinner } from '@fortawesome/free-solid-svg-icons'
import {
  transformCurrentWeather,
  transformWeatherByCoord,
} from '../utils/transform'

const { SNOWPACK_PUBLIC_OPENWEATHER_API_KEY } = import.meta.env

const Form = () => {
  const { setWeatherObject, setPopupStatus } = useContext(WeatherContext)
  const [searchLocation, setSearchLocation] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const checkWeatherForCurrentLoc = () => {
    setLoading(true)

    new Promise((resolve, reject) => {
      try {
        window.navigator.geolocation.getCurrentPosition(position => {
          resolve(position)
        }, reject)
      } catch (ex) {
        reject(ex)
      }
    })
      .then(({ coords }) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude=minutely,alerts&units=metric&appid=${SNOWPACK_PUBLIC_OPENWEATHER_API_KEY}`,
        )
          .then(res => res.json())
          .then(data => transformWeatherByCoord(data))
          .then(data => {
            setWeatherObject(data)
            setLoading(false)
          })
          .then(() => setPopupStatus({ openPopup: false }))
          .catch(() => {
            setError(`This location doesn't exist`)
            setLoading(false)
          })
      })
      .catch(() => {
        setError(`Something went wrong!`)
        setLoading(false)
      })
  }

  const searchWeatherByCity = e => {
    e.preventDefault()
    setLoading(true)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation.trim()}&units=metric&appid=${SNOWPACK_PUBLIC_OPENWEATHER_API_KEY}`,
    )
      .then(res => res.json())
      .then(data => transformCurrentWeather(data))
      .then(data => {
        const { latitude, longitude } = data
        const updatedInfo = fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&units=metric&appid=${SNOWPACK_PUBLIC_OPENWEATHER_API_KEY}`,
        )
          .then(res => res.json())
          .then(({ hourly, daily }) => {
            return {
              ...data,
              hourly,
              daily,
            }
          })
        return updatedInfo
      })
      .then(data => {
        setWeatherObject(data)
        setLoading(false)
      })
      .then(() => setPopupStatus({ openPopup: false }))
      .catch(() => {
        setError(`This location doesn't exist`)
        setLoading(false)
      })
  }

  if (loading) {
    return (
      <div className='px-4 py-8 text-lg font-medium text-center text-green-700 bg-green-100 rounded-md'>
        <span className='inline-flex items-center'>
          Fetching weather
          <FontAwesomeIcon
            icon={faSpinner}
            size='lg'
            spin
            className='ml-2 text-green-700'
          />
        </span>
      </div>
    )
  }

  return (
    <>
      <form onSubmit={searchWeatherByCity}>
        <label htmlFor='location' className='block mb-2 text-sm text-gray-600'>
          Type Location
        </label>
        <input
          type='text'
          name='location'
          id='location'
          onChange={e => setSearchLocation(e.target.value)}
          className='w-full block py-2.5 px-4 border border-gray-300 rounded-md focus:ring ring-purple-300 focus:border-purple-400 outline-none transition duration-150 ease-in text-sm'
          placeholder='e.g London'
          required
        />
        {error ? (
          <span className='mt-2 text-xs text-red-500'>{error}</span>
        ) : (
          ''
        )}
        <button
          type='submit'
          className='mt-4 w-full bg-gradient-to-b to-purple-800 from-purple-500 text-purple-50 px-6 py-2.5 focus:ring-2 ring-purple-400 rounded-md text-sm font-medium shadow hover:opacity-90 transition duration-150 ease-linear'
        >
          Get Weather Details
        </button>

        <div className='my-2 text-center'>
          <span className='inline-block text-sm'>Or</span>
        </div>
        <button
          type='submit'
          className='w-full bg-gradient-to-br to-pink-700 from-pink-500 text-pink-50 px-6 py-2.5 focus:ring-2 ring-pink-400 rounded-md text-sm font-medium shadow hover:opacity-90 transition duration-150 ease-linear'
          onClick={checkWeatherForCurrentLoc}
        >
          <FontAwesomeIcon icon={faMapMarkedAlt} className='mr-2' />
          Use my location
        </button>
      </form>
    </>
  )
}

export default Form
