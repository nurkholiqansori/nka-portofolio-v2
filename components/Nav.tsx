import React, { useState } from 'react'
import MenuNav from './MenuNav'

export const Nav = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className='top-0 left-1/2 -translate-x-1/2 bg-white bg-opacity-40 backdrop-blur w-28 h-16 rounded-b-full flex justify-center items-center z-30 absolute cursor-pointer'>
        <div
          className='text-white animate-bounce'
          onClick={() => setShow(!show)}
        >
          {show ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 15l7-7 7 7'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          )}
        </div>
      </div>
      <MenuNav show={show} />
    </>
  )
}
