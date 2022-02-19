// import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ListCarousel from './ListCarousel'

const Carousel = () => {
  const [num, setNum] = useState(1)

  return (
    <>
      <button
        className={
          'bg-white bg-opacity-40 backdrop-blur p-3 hidden md:inline rounded-full ' +
          (num === 1 ? 'hidden' : 'hover:scale-75')
        }
        onClick={() => (num === 1 ? '' : setNum(num - 1))}
        disabled={num === 1 ? true : false}
      >
        <a
          href={'#' + num}
          className={
            'text-sky-50 ' +
            (num === 1 ? 'text-opacity-50 cursor-default ' : '')
          }
        >
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
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </a>
      </button>
      <div className='grid grid-flow-col gap-10 mx-5 overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-thumb-sky-600 hover:scrollbar-thumb-sky-400 scrollbar-track-sky-100 dark:scrollbar-track-gray-500 pl-10 py-5 snap-x w-full scroll-smooth'>
        <ListCarousel
          title='About'
          number={1}
          img=''
          description='My curriculum Vitae'
          link='/about'
        />
        <ListCarousel
          title='Portofolio'
          number={2}
          img=''
          description='My Portofolio'
          link='/portofolio'
        />
        <ListCarousel
          title='Github'
          number={3}
          img=''
          description='My work experience'
          link='/github'
        />
      </div>
      <button
        className={
          'bg-white bg-opacity-40 backdrop-blur p-3 hidden md:inline rounded-full ' +
          (num === 4 ? 'hidden' : 'hover:scale-75')
        }
        onClick={() => (num === 4 ? '' : setNum(num + 1))}
        disabled={num === 4 ? true : false}
      >
        <a
          href={'#' + num}
          className={
            'text-sky-50 ' +
            (num === 4 ? 'text-opacity-50 cursor-default ' : '')
          }
        >
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
              d='M9 5l7 7-7 7'
            />
          </svg>
        </a>
      </button>
    </>
  )
}

export default Carousel
