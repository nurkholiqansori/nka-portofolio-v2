import * as React from 'react'
import myPic from '../public/MyPic.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { data } from '../pages/api/data'
import Timeline from './Timeline'

const CV: React.FunctionComponent<any> = (props) => {
  return (
    <>
      <div className='mx-auto mb-10'>
        <div className='mx-5 overflow-hidden'>
          <div className='grid md:grid-flow-col gap-5 items-center p-10 bg-white bg-opacity-30 backdrop-blur mb-5 rounded-lg'>
            <div className='w-32 h-32 rounded-lg overflow-hidden mx-auto z-0'>
              <Image
                src={myPic}
                placeholder='blur'
                objectFit='cover'
                alt='My Picture'
              />
            </div>
            <div className='grid items-center gap-3'>
              <div className='text-3xl font-bold text-gray-800 dark:text-gray-300 text-opacity-80 text-center md:text-left'>
                {data.myName}
              </div>
              <div className='flex items-center gap-2 text-black dark:text-gray-300 text-opacity-70'>
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
                    d='M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z'
                  />
                </svg>
                {data.birthPlace}
              </div>
              <div className='flex items-center justify-center md:justify-start gap-2 text-black text-opacity-70 dark:text-gray-300'>
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
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                {data.address}
              </div>
            </div>
            <div className='md:text-right text-opacity-70'>
              <div className='grid grid-cols-2 gap-2'>
                {data.contact.map((i) => (
                  <div
                    key={i.id}
                    className={`bg-[#${i.color}] p-2 m-2 w-10 h-10 flex justify-center items-center rounded-full hover:scale-95 cursor-pointer overflow-hidden mx-auto text-gray-500`}
                  >
                    <Link href={i.link}>
                      <a
                        title={i.name}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <div>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6 fill-gray-700 dark:fill-gray-300'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            fill='none'
                            role='img'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={1}
                              d={i.path}
                            />
                          </svg>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
                {data.socMed.map((i) => (
                  <div
                    key={i.id}
                    className={`bg-[#${i.color}] p-2 m-2 w-10 h-10 flex justify-center items-center rounded-full hover:scale-95 cursor-pointer overflow-hidden mx-auto `}
                  >
                    <Link href={i.link}>
                      <a
                        title={i.name}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6 fill-gray-800 dark:fill-gray-300'
                          viewBox='0 0 24 24'
                          fill='none'
                          role='img'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1}
                            d={i.path}
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='p-10 mb-5 text-center bg-white bg-opacity-30 rounded-lg text-black dark:text-gray-300'>
            {data.description}
          </div>
          <div className='p-10 bg-white bg-opacity-30 rounded-lg'>
            <Timeline />
          </div>
        </div>
      </div>
    </>
  )
}

export default CV
