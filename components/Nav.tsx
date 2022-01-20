import React, { useState } from 'react'
import MenuNav from './MenuNav'

interface Props {}

export const Nav = (props: Props) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className='absolute -top-2 -left-2 bg-sky-800 w-28 h-28 rounded-br-full flex justify-center items-center z-30'>
        <div
          className='flex justify-center items-center flex-col gap-2 p-3 rounded-lg cursor-pointer hover:bg-sky-900 w-10 relative -top-2 right-3'
          onClick={() => setShow(!show)}
        >
          <div
            className={
              'h-[.8px] bg-cyan-100 transition-transform ' +
              (show ? 'w-8 -rotate-45 transform translate-y-1' : 'w-5')
            }
          ></div>
          <div
            className={
              'h-[.8px] bg-cyan-100 transition-transform ' +
              (show ? 'hidden' : 'w-5')
            }
          ></div>
          <div
            className={
              'h-[.8px] bg-cyan-100 transition-transform ' +
              (show ? 'w-8 rotate-45 transform -translate-y-1' : 'w-5')
            }
          ></div>
        </div>
      </div>
      <div
        className={
          'transition-all duration-700 transform translate-y-0 translate-x-0 rounded-none z-30 ' +
          (show
            ? 'ease-in'
            : 'ease-out -translate-y-96 -translate-x-[100%] rounded-br-3xl')
        }
      >
        <MenuNav show={show} />
      </div>
    </>
  )
}
