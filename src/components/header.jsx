import React from 'react'
import logo from '../logo.svg'

const Header = props => {
  return (
    <header className='border-b border-gray-800 App-header'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center px-4 py-3'>
            <div className='-ml-4 logo'>
              <img
                src={logo}
                className='inline-block w-16 App-logo animate-pulse'
                alt='logo'
              />
            </div>
            <div className='app-title'>
              <h1 className='text-xl font-bold leading-tight text-gray-200'>
                Weather App
              </h1>
              <span className='text-xs text-gray-200'>
                A Codementor mini project by{' '}
                <a
                  href='https://soumilroy.com'
                  target='_blank'
                  className='font-medium underline'
                >
                  Soumil Roy
                </a>
              </span>
            </div>
          </div>

          <div className='px-4 py-3 add-location'>
            <button
              type='button'
              onClick={props.setPopupStatus}
              className='bg-gradient-to-br to-purple-700 from-purple-400 text-purple-50 px-6 py-2.5 focus:ring-2 ring-purple-400 rounded-md text-sm font-medium shadow hover:opacity-90 transition duration-150 ease-linear'
            >
              Add Location
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
