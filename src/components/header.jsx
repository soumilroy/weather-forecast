import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="App-header border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center px-4 py-3">
              <div className="logo -ml-4">
                <img
                  src={logo}
                  className="App-logo animate-pulse w-16 inline-block"
                  alt="logo"
                />
              </div>
              <div className="app-title">
                <h1 className="text-gray-200 font-bold text-xl leading-tight">
                  Weather App
                </h1>
                <span className="text-gray-200 text-xs">
                  A Codementor mini project by{' '}
                  <a
                    href="https://soumilroy.com"
                    target="_blank"
                    className="underline font-medium"
                  >
                    Soumil Roy
                  </a>
                </span>
              </div>
            </div>

            <div className="add-location px-4 py-3">
              <button
                type="button"
                onClick={this.props.setPopupStatus}
                className="bg-gradient-to-br to-purple-700 from-purple-500 text-purple-50 px-6 py-2.5 focus:ring-2 ring-purple-400 rounded-full text-sm font-medium shadow hover:opacity-90 transition duration-150 ease-linear"
              >
                Add Location
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
