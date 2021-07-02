import React, { Component } from 'react';

class Controls extends Component {
  render() {
    //    console.log(this.props.isLocalCache);

    if (!this.props.isLocalCache) return null;

    return (
      <div className="bg-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <div className="py-2.5 px-4 w-full md:w-1/2">
              <span className="text-green-400 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400 inline-block mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Local cache found!
              </span>
            </div>
            <div className="px-4 pb-3 md:pb-0 w-full md:w-1/2 md:text-right">
              <button
                type="button"
                className="bg-green-500 text-white hover:opacity-90 transition duration-150 py-1 px-4 text-sm rounded-full shadow mr-4"
                onClick={() => this.props.setWeatherData()}
              >
                Restore Cache
              </button>
              <button
                type="button"
                onClick={() => this.props.clearLocalCache()}
                className="bg-gray-500 text-white hover:opacity-90 transition duration-150 py-1 px-4 text-sm rounded-full shadow"
              >
                Clear Local Cache
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
