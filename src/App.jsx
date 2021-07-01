import React, { Component } from 'react';
import Header from './components/header';
import Controls from './components/controls';
import WeatherData from './components/weatherData';
import Popup from './components/popup';
import Form from './components/form';
import Storage from './components/storage';
// env read import.meta.env.SNOWPACK_PUBLIC_API_URL
// const {SNOWPACK_PUBLIC_API_URL} = import.meta.env;
// fetch(`${SNOWPACK_PUBLIC_API_URL}/users`).then(...)

class App extends Storage {
  state = {
    openPopup: false,
  };

  componentDidMount = () => {
    this.obtainWeatherObjectOnLoad();
    // this.saveWeatherObjectOnFetch();
  };

  setPopupStatus = () => {
    this.setState({ openPopup: !this.state.openPopup });
  };

  render() {
    return (
      <div className="App relative bg-gradient-to-t from-gray-900 via-gray-700 to-gray-800 min-h-screen">
        <Header setPopupStatus={this.setPopupStatus} />
        <Controls />
        <div className="max-w-6xl mx-auto px-4 py-4">
          <WeatherData />
          <WeatherData />
          <WeatherData />
        </div>
        <Popup open={this.state.openPopup} setPopupStatus={this.setPopupStatus}>
          <Form />
        </Popup>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="h-24 flex items-center justify-center border-2 border-dashed border-gray-700 rounded-lg">
            <p className="text-gray-400 opacity-90">
              You can save & view weather information upto 3 locations
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
