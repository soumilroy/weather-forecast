import React, { Component } from 'react';

class Controls extends Component {
  state = {};
  render() {
    return (
      <div className="bg-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <div className="py-2.5 px-4 w-full md:w-1/2">
              <span className="text-gray-300 text-sm">
                Weather report last generated on{' '}
                <strong>
                  1<sup>st</sup> July 2021
                </strong>{' '}
                at <strong>16:52</strong>
              </span>
            </div>
            <div className="px-4 pb-3 md:pb-0 w-full md:w-1/2 md:text-right">
              <button
                type="submit"
                className="bg-gray-500 text-white hover:opacity-90 transition duration-150 py-1 px-4 text-sm rounded-full shadow mr-4"
              >
                Clear local cache
              </button>
              <button
                type="submit"
                className="bg-green-600 hover:opacity-90 transition duration-150 text-white py-1 px-4 text-sm rounded-full shadow"
              >
                Update weather for all
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
