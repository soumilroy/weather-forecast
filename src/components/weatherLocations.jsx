import React from 'react'
import WeatherData from './weatherData'

const WeatherLocations = ({ weather, removeWeatherDataByLocation }) => {
  return (
    <div className='max-w-7xl px-4 py-4 mx-auto'>
      {weather &&
        weather.locations.map(location => (
          <WeatherData
            key={location.id}
            location={location}
            removeLocation={removeWeatherDataByLocation}
          />
        ))}
    </div>
  )
}

export default WeatherLocations
