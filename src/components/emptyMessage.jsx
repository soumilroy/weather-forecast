import React from 'react'

const EmptyMessage = () => {
  return (
    <div className='max-w-6xl px-4 py-4 mx-auto'>
      <div className='flex items-center justify-center h-24 bg-gray-600 border-2 border-gray-400 border-dashed rounded-lg'>
        <p className='text-gray-400'>
          You can save & view weather information upto 3 locations
        </p>
      </div>
    </div>
  )
}

export default EmptyMessage
