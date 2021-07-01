import React, { Component } from 'react';

class WeatherData extends Component {
  state = {};
  render() {
    return (
      <div className="weather-data shadow overflow-hidden rounded-lg my-6">
        <header className="bg-gradient-to-b to-gray-600 from-gray-500">
          <div className="flex items-center justify-between">
            <div className="w-7/12 flex justify-between px-4 py-4">
              <h2 className="font-bold text-lg text-gray-100">Kolkata</h2>
              <span className="text-base font-medium text-gray-200">33deg</span>
              <span className="text-base font-medium text-gray-200">
                Partly Cloudy
              </span>
              <span className="text-base font-medium text-gray-200">Windy</span>
              <span className="text-base font-medium text-gray-200">
                Humidity
              </span>
            </div>
            <div className="w-5/12 font-normal text-right px-4">
              <div className="flex flex-col">
                <span className="block leading-loose font-normal text-xs text-gray-300">
                  Generated on 30 June 2021 at 16:40
                </span>
                <div className="flex justify-end">
                  <button className="ml-4 inline-block text-yellow-200 text-xs hover:text-green-300">
                    Update
                  </button>
                  <button className="ml-4 inline-block text-yellow-200 text-xs hover:text-red-300">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="hidden bg-white transform transition duration-300 ease-in">
          <div className="flex flex-wrap">
            <div className="w-1/2 px-4 py-4">
              <div className="border-2 border-dashed border-gray-300 rounded-md">
                here
              </div>
            </div>
            <div className="w-1/2 px-4 py-4">
              <div className="border-2 border-dashed border-gray-300 rounded-md">
                here
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherData;
