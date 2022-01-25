import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Body from '../components/Body'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { data } from './api/data'

type Props = {}

const Collections: NextPage = (props: Props) => {
  const router = useRouter()

  return (
    <>
      <Header title='Portofolio' url={`${router.asPath}`} />
      <Nav />
      <Body>
        <div className='w-full m-5 md:m-10 mb-20 grid justify-center'>
          <div>
            <div className='flex justify-center'>
              <label className='block'>
                <input
                  type='text'
                  className='
                    mt-0
                    block
                    w-full
                    px-0.5
                    bg-transparent
                    border-0 border-b-2 border-sky-200
                    focus:ring-0 focus:border-sky-50
                    t transition-all delay-75
                    text-white placeholder:text-white placeholder:text-opacity-80
                  '
                  placeholder='Search The Theme'
                />
              </label>
              <div className='text-white p-2 rounded-full cursor-pointer hover:bg-sky-800 transition-all'>
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
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
            </div>
            <div className='text-white text-center my-5 after:content-divider'>
              or select the category
            </div>
            <div className='grid grid-flow-col'>
              {data.wptheme.map((i) => (
                <div key={i.id} className='mx-auto py-2 px-2 text-white rounded-full text-xs max-w-2xl overflow-y-auto cursor-pointer bg-sky-700 hover:bg-sky-300'>
                  {i.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Body>
    </>
  )
}

export default Collections
