import React, { Component } from 'react';

class WeatherData extends Component {
  state = {
    open: false,
  };

  render() {
    const {
      locationLabel,
      temperatureInCelcius,
      windsInKmph,
      humidity,
      lastFetched,
      currentForecast,
      sevenDayForecast,
    } = this.props.location;

    let dropDownClasses = 'bg-white transition transform duration-300';
    dropDownClasses = this.state.open
      ? dropDownClasses
      : `${dropDownClasses} h-0`;
    return (
      <div className="weather-data shadow overflow-hidden rounded-lg my-6">
        <header className="bg-gradient-to-b to-gray-600 from-gray-500">
          <div className="flex items-center justify-between">
            <div className="w-7/12 flex justify-between px-4 py-4">
              <div className="w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={
                    this.state.open
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
                  className="font-bold text-lg text-gray-100 cursor-pointer"
                  onClick={() => this.setState({ open: !this.state.open })}
                >
                  {locationLabel}
                </h2>
              </div>
              <div className="w-24">
                <span className="text-base font-medium text-gray-200">
                  {temperatureInCelcius}
                </span>
              </div>
              <div className="w-24">
                <span className="text-base font-medium text-gray-200">
                  {windsInKmph}
                </span>
              </div>
              <div className="w-24">
                <span className="text-base font-medium text-gray-200">
                  {humidity}
                </span>
              </div>
            </div>
            <div className="w-5/12 font-normal text-right px-4">
              <div className="flex flex-col">
                <span className="block leading-loose font-normal text-xs text-gray-300">
                  Generated on {lastFetched}
                </span>
                <div className="flex justify-end">
                  <button className="ml-4 inline-block text-yellow-200 text-xs hover:text-green-300">
                    Update
                  </button>
                  <button
                    onClick={() =>
                      this.props.removeLocation(this.props.location)
                    }
                    className="ml-4 inline-block text-yellow-200 text-xs hover:text-red-300"
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
              <div className="">
                {sevenDayForecast.map(
                  (forecast) => `${forecast.id}` + ` ${forecast.someVal}`,
                )}
              </div>
            </div>
            <div className="w-1/2 px-4 py-4">
              <div className="">
                {currentForecast.map(
                  (forecast) => `${forecast.id}` + ` ${forecast.someVal}`,
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherData;
