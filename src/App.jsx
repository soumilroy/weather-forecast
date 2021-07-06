import React, { useState, useEffect } from 'react'
import Header from './components/header'
import Controls from './components/controls'
import WeatherData from './components/weatherData'
import Popup from './components/popup'
import Form from './components/form'
import EmptyMessage from './components/emptyMessage'
import { WeatherContext } from './context/weatherContext'
// env read import.meta.env.SNOWPACK_PUBLIC_API_URL
// const {SNOWPACK_PUBLIC_API_URL} = import.meta.env;
// fetch(`${SNOWPACK_PUBLIC_API_URL}/users`).then(...)

// const srWeather = {
//   locations: [
//     {
//       id: '1234-7890',
//       locationLabel: 'London',
//       longitude: '45',
//       latitude: '33',
//       temperatureInCelcius: '32',
//       windsInKmph: '45',
//       humidity: '78',
//       currentForecast: [
//         { id: 123, someVal: 123 },
//         { id: 456, someVal: 456 },
//       ],
//       sevenDayForecast: [
//         { id: 789, someVal: 789 },
//         { id: 987, someVal: 987 },
//       ],
//       lastFetched: new Date().toUTCString(),
//     },
//     {
//       id: '9876-5432',
//       locationLabel: 'Kolkata',
//       longitude: '22',
//       latitude: '45',
//       temperatureInCelcius: '36',
//       windsInKmph: '23',
//       humidity: '89',
//       currentForecast: [
//         { id: 456, someVal: 456 },
//         { id: 123, someVal: 123 },
//       ],
//       sevenDayForecast: [
//         { id: 987, someVal: 987 },
//         { id: 789, someVal: 789 },
//       ],
//       lastFetched: new Date().toUTCString(),
//     },
//     {
//       id: '1111-2222',
//       locationLabel: 'Vancouver',
//       longitude: '25',
//       latitude: '77',
//       temperatureInCelcius: '49',
//       windsInKmph: '56',
//       humidity: '90',
//       currentForecast: [
//         { id: 456, someVal: 456 },
//         { id: 123, someVal: 123 },
//       ],
//       sevenDayForecast: [
//         { id: 987, someVal: 987 },
//         { id: 789, someVal: 789 },
//       ],
//       lastFetched: new Date().toUTCString(),
//     },
//   ],
// }

// window.localStorage.setItem('srWeather', JSON.stringify(srWeather))

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
    weatherClone.locations.push(locationData)
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
    saveWeatherObjectOnLocal(weatherData)

    if (!newLocations.length) clearLocalCache()
  }

  const saveWeatherObjectOnLocal = weatherData => {
    const freshWeatherData = JSON.stringify(weatherData)
    window.localStorage.removeItem('srWeather')
    window.localStorage.setItem('srWeather', freshWeatherData)
  }

  const clearLocalCache = () => {
    window.localStorage.removeItem('srWeather')
    setWeather({ locations: [] })
    setLocalCacheFound(false)
  }

  const setPopupStatus = () => {
    setOpenPopup(!openPopup)
  }

  useEffect(() => {
    checkLocalCache()
  }, [])

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
      <div className='relative min-h-screen App bg-gradient-to-t from-gray-900 via-gray-700 to-gray-800'>
        <Header />
        <Controls localCacheFound={localCacheFound} />
        <div className='max-w-6xl px-4 py-4 mx-auto'>
          {weather &&
            weather.locations.map(location => (
              <WeatherData
                key={location.id}
                location={location}
                removeLocation={removeWeatherDataByLocation}
              />
            ))}
        </div>
        <Popup open={openPopup} setPopupStatus={setPopupStatus}>
          <Form setPopupStatus={setPopupStatus} />
        </Popup>
        {weather.locations.length === 0 && <EmptyMessage />}
      </div>
    </WeatherContext.Provider>
  )
}

export default App
