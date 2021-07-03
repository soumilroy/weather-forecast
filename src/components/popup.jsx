import React from 'react'

const Popup = props => {
  return (
    props.open && (
      <div className='absolute inset-0 min-h-screen popup'>
        <div className='relative min-h-screen bg-purple-900 opacity-60 overlay'></div>
        <div
          style={{
            minWidth: '380px',
            top: 'calc(50% - calc(380px/2))',
            left: 'calc(50% - calc(380px/2))',
          }}
          className='absolute z-50 px-4 py-4 bg-white rounded-md shadow-xl'
        >
          <button
            onClick={props.setPopupStatus}
            className='absolute'
            style={{ right: '15px', top: '15px' }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          {props.children}
        </div>
      </div>
    )
  )
}

export default Popup
