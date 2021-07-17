import React, { useState, useEffect } from 'react'
import Header from './components/header'
import Popup from './components/popup'
import Form from './components/form'
import EmptyMessage from './components/emptyMessage'
import { WeatherContext } from './context/weatherContext'
import WeatherLocations from './components/weatherLocations'

const App = () => {
  let [openPopup, setOpenPopup] = useState(false)
  let [localCacheFound, setLocalCacheFound] = useState(false)
  const [weather, setWeather] = useState({ locations: [] })

  const checkLocalCache = () => {
    let weatherData = window.localStorage.getItem('srWeather')

    if (!weatherData) return

    if (weatherData) {
      setLocalCacheFound(true)
      return
    }
  }

  const setWeatherObject = locationData => {
    const weatherClone = { ...weather }
    weatherClone.locations.unshift(locationData)
    setWeather(weatherClone)
  }

  const setWeatherDataFromCache = () => {
    const srWeather = JSON.parse(window.localStorage.getItem('srWeather'))
    setWeather(srWeather)
    setLocalCacheFound(false)
  }

  const removeWeatherDataByLocation = location => {
    let weatherData = { ...weather }
    let { locations } = weatherData

    let newLocations = locations.filter(loc => loc.id !== location.id)

    weatherData = {
      locations: newLocations,
      lastUpdated: weatherData.lastUpdated,
    }

    setWeather(weatherData)
  }
  const setPopupStatus = () => {
    setOpenPopup(!openPopup)
  }

  return (
    <WeatherContext.Provider
      value={{
        localCacheFound,
        setWeatherObject,
        setWeatherDataFromCache,
        setPopupStatus,
      }}
    >
      <div className='relative min-h-screen App bg-gradient-to-t from-gray-900 via-gray-700 to-gray-800'>
        <Header />
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
  )
}

export default App
