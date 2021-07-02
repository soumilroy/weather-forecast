import React, { Component } from 'react';

class Form extends Component {
  state = {};

  handleSubmission = () => {};
  render() {
    return (
      <>
        <form>
          <label
            htmlFor="location"
            className="text-sm text-gray-600 block mb-2"
          >
            Type Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            className="w-full block py-2.5 px-4 border border-gray-300 rounded-md focus:ring ring-purple-300 focus:border-purple-400 outline-none transition duration-150 ease-in text-sm"
            placeholder="e.g London"
          />
          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-br to-purple-700 from-purple-500 text-purple-50 px-6 py-2.5 focus:ring-2 ring-purple-400 rounded-md text-sm font-medium shadow hover:opacity-90 transition duration-150 ease-linear"
          >
            Get Weather Details
          </button>
        </form>
        <div className="text-center my-2">
          <span className="inline-block text-sm">Or</span>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-br to-pink-700 from-pink-500 text-pink-50 px-6 py-2.5 focus:ring-2 ring-pink-400 rounded-md text-sm font-medium shadow hover:opacity-90 transition duration-150 ease-linear"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="map-marker-alt"
            className="w-4 h-4 fill-current mr-2 inline-block"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
            ></path>
          </svg>
          Use my location
        </button>
      </>
    );
  }
}

export default Form;
