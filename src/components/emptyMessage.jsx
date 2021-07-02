import React, { Component } from 'react';

class EmptyMessage extends Component {
  render() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="h-24 flex items-center justify-center border-2 border-dashed border-gray-400 rounded-lg bg-gray-600">
          <p className="text-gray-400">
            You can save & view weather information upto 3 locations
          </p>
        </div>
      </div>
    );
  }
}

export default EmptyMessage;
