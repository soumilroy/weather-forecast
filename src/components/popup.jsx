import React, { Component } from 'react';

class Popup extends Component {
  render() {
    return (
      this.props.open && (
        <div className="popup absolute inset-0 min-h-screen">
          <div className="relative bg-purple-900 opacity-90 overlay min-h-screen"></div>
          <div
            style={{
              minWidth: '380px',
              top: 'calc(50% - calc(380px/2))',
              left: 'calc(50% - calc(380px/2))',
            }}
            className="absolute z-50 bg-white px-4 py-4 rounded-md shadow-xl"
          >
            <button
              onClick={this.props.setPopupStatus}
              className="absolute"
              style={{ right: '15px', top: '15px' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {this.props.children}
          </div>
        </div>
      )
    );
  }
}

export default Popup;
