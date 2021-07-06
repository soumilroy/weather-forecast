import React from 'react'

const Controls = props => {
  console.log(`localcache:`, props.localCacheFound)
  if (!props.localCacheFound) return null

  return (
    <div className='bg-gray-700'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='py-2.5 px-4 w-full md:w-1/2'>
            <span className='text-sm text-green-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='inline-block w-5 h-5 mr-2 text-green-400'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
              Local cache found!
            </span>
          </div>
          <div className='w-full px-4 pb-3 md:pb-0 md:w-1/2 md:text-right'>
            <button
              type='button'
              className='px-4 py-1 mr-4 text-sm text-white transition duration-150 bg-green-500 rounded-full shadow hover:opacity-90'
              onClick={() => props.setWeatherData()}
            >
              Restore Cache
            </button>
            <button
              type='button'
              onClick={() => props.clearLocalCache()}
              className='px-4 py-1 text-sm text-white transition duration-150 bg-gray-500 rounded-full shadow hover:opacity-90'
            >
              Clear Local Cache
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Controls
