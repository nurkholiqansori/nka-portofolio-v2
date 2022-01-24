import Image from 'next/image'
import React, { useState } from 'react'
import { data } from '../pages/api/data'
import DialogPortofolio from './Dialog'

type Props = {}

const CardExperience = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dataState, setDataState] = useState(0)
  const [info, setNotInfo] = useState(true)

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center mx-10 gap-3 md:gap-10 text-center relative md:left-1/2 md:-translate-x-1/2 mb-10'>
        {data.experience.map((i, index) => (
          <div key={index}>
            <div className='border-2 p-3 rounded-lg bg-sky-500'>
              <p className='text-white font-medium text-lg'>
                {i.com.length < 16 ? i.com : i.com.slice(0, 16) + '...'}
              </p>
              <div className='w-24 h-24 overflow-hidden mx-auto z-0 rounded-lg my-5'>
                <Image
                  src={i.logo}
                  placeholder='blur'
                  blurDataURL='logo.png'
                  objectFit='cover'
                  width={120}
                  height={120}
                  className=''
                  alt={'Documentation ' + i.com}
                />
              </div>
              <p className='text-left ml-5 text-sky-50 0 flex gap-2 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>{' '}
                {i.date}
              </p>
              <p className='text-left ml-5 text-sky-50 flex gap-2 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>{' '}
                {i.status}
              </p>
              <div className='di divide-dashed divide-y-2'></div>
              <div className='grid grid-flow-col mt-5 mb-2 gap-5'>
                <button
                  type='button'
                  onClick={() => {
                    setIsOpen(true)
                    setDataState(index)
                    setNotInfo(true)
                  }}
                  className='p-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mx-auto'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </button>
                <button
                  type='button'
                  onClick={() => {
                    setIsOpen(true)
                    setDataState(index)
                    setNotInfo(false)
                  }}
                  className='p-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mx-auto'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
        <DialogPortofolio
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          atDataState={dataState}
          setData={setDataState}
          info={info}
        />
      </div>
    </>
  )
}

export default CardExperience
