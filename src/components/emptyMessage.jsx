import React from 'react';

const EmptyMessage = () => {
  return (
    <div className="max-w-6xl px-4 py-4 mx-auto">
      <div className="flex items-center justify-center h-24 bg-gray-700 border-2 border-gray-500 border-dashed rounded-lg">
        <p className="text-gray-300">
          You can view weather information for multiple locations
        </p>
      </div>
    </div>
  );
};

export default EmptyMessage;
