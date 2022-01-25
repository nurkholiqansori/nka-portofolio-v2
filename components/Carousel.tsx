// import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ListCarousel from './ListCarousel'

const Carousel = () => {
  const [num, setNum] = useState(1)
  // const router = useRouter()
  
  // const nextSlide = () => {
  //   setNum(num + 1)
  // }
  // const resetSlide = () => {
  //   setNum(1)
  // }

  // if (num === 1) {
  //   setTimeout(nextSlide, 3000)
  // } else if (num === 4) {
  //   setTimeout(resetSlide, 3000)
  // } else {
  //   setTimeout(nextSlide, 3000)
  // }

  // useEffect(() => {
  //   router.push('/#' + num)
  // }, [num])

  return (
    <>
      <button
        className='bg-sky-500 p-3 rounded-full hover: '
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
      <div className='grid grid-flow-col gap-10 mx-5 overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-thumb-sky-600 hover:scrollbar-thumb-sky-400 scrollbar-track-sky-100 pl-10 py-5 snap-x w-full scroll-smooth'>
        <ListCarousel
          title='About'
          number={1}
          img=''
          description='HAYO'
          link='/about'
        />
        <ListCarousel
          title='Portofolio'
          number={2}
          img=''
          description='HAYO'
          link='/portofolio'
        />
        <ListCarousel
          title='Github'
          number={3}
          img=''
          description='HAYO'
          link='/github'
        />
        <ListCarousel
          title='Collection Theme WP'
          number={4}
          img=''
          description='HAYO'
          link='/wp-theme'
        />
      </div>
      <button
        className='bg-sky-500 p-3 rounded-full hover: '
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
