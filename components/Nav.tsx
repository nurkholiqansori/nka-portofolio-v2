import React, { useState } from 'react'
import DarkMode from './DarkMode'
import MenuNav from './MenuNav'

export const Nav = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className='top-5 right-5 bg-white dark:bg-black bg-opacity-40 backdrop-blur rounded-full p-3 flex justify-center items-center z-30 absolute cursor-pointer hover:scale-95'>
        <div
          className='text-white '
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
                d='M6 18L18 6M6 6l12 12'
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
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          )}
        </div>
      </div>
      <MenuNav show={show} />
      <DarkMode />
    </>
  )
}
