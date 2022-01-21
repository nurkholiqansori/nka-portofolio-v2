import * as React from 'react'
import myPic from '../public/MyPic.jpg'
import Image from 'next/image'
import useSWR from 'swr'
import { data } from '../pages/api/data'
import Icon from './Icon'


const CV: React.FunctionComponent<any> = (props) => {


  return (
    <>
      <div className='w-96 md:w-1/2 mx-auto mb-10 border-2 rounded-lg overflow-hidden'>
        <div className='grid md:grid-flow-col gap-5 p-10 border-b-2 bg-sky-800'>
          <div className='w-24 h-24 rounded-full overflow-hidden mx-auto z-0'>
            <Image src={myPic} placeholder='blur' objectFit='cover' />
          </div>
          <div className='grid'>
            <div className='text-3xl font-semibold text-sky-50 text-opacity-80'>
              {data.myName}
            </div>
            <div className='flex items-center justify-center md:justify-start gap-2 text-sky-50 text-opacity-70'>
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
            <div className='flex items-center justify-center md:justify-start gap-2 text-sky-50 text-opacity-70'>
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
          <div className='md:text-right text-sky-50 text-opacity-70'>
            <div className='grid grid-cols-2 gap-2'>
              {data.contact.map((i) => (
                <>
                  <Icon key={i.id} name={i.name} link={i.link} color={i.color} path={i.path} />
                </>
              ))}
              {data.socMed.map((i) => (
                <>
                  <Icon key={i.id} name={i.name} link={i.link} color={i.color} path={i.path} />
                </>
              ))}
            </div>
          </div>
        </div>
        <div className='p-10 border-b-2 text-center bg-sky-100'>{data.description}</div>
        <div className='p-10 bg-sky-50'>ISI</div>
      </div>
    </>
  )
}

export default CV
