export function transformWeatherByCoord ({ lat, lon, current, hourly, daily }) {
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
  }
}

export function transformCurrentWeather ({
  id,
  name,
  coord,
  weather,
  main,
  wind,
  dt,
}) {
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
  }
}