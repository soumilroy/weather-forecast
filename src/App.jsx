import React, { Component } from 'react';
import Header from './components/header';
import Controls from './components/controls';
import WeatherData from './components/weatherData';
import Popup from './components/popup';
import Form from './components/form';
import Storage from './components/storage';
import EmptyMessage from './components/emptyMessage';
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
//   lastUpdated: new Date().toUTCString(),
// };

// window.localStorage.setItem('srWeather', JSON.stringify(srWeather));

class App extends Storage {
  componentDidMount = () => {
    this.checkLocalCache();
  };

  setPopupStatus = () => {
    this.setState({ openPopup: !this.state.openPopup });
  };

  render() {
    let weatherDataAvailable = false;

    if (Object.keys(this.state.srWeather).length) weatherDataAvailable = true;
    else weatherDataAvailable = false;

    return (
      <div className="relative min-h-screen App bg-gradient-to-t from-gray-900 via-gray-700 to-gray-800">
        <Header setPopupStatus={this.setPopupStatus} />
        <Controls
          isLocalCache={this.state.localCacheFound}
          setWeatherData={this.setWeatherData}
          clearLocalCache={this.clearLocalCache}
        />
        <div className="max-w-6xl px-4 py-4 mx-auto">
          {weatherDataAvailable &&
            this.state.srWeather.locations.map((location) => (
              <WeatherData
                key={location.id}
                location={location}
                removeLocation={this.removeWeatherDataByLocation}
              />
            ))}
        </div>
        <Popup open={this.state.openPopup} setPopupStatus={this.setPopupStatus}>
          <Form />
        </Popup>
        {!weatherDataAvailable && <EmptyMessage />}
      </div>
    );
  }
}

export default App;
