import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import Body from '../components/Body'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import logo from '../public/logo.png'

const Github = () => {
  const router = useRouter()

  return (
    <>
      <Header title='Portofolio' url={`${router.asPath}`} />
      <Nav />
      <Body>
        <div className='w-full md:m-10 mb-20'>
          <div className='grid grid-cols-2 mx-5 gap-10'>
            <div className='grid-cols-span-2 grid items-end justify-end'>
              <div className='w-40 h-40 rounded-lg bg-gray-500 animate-pulse'></div>
              {/* <div className='w-40 h-40 rounded-lg'>
                <Image src={logo} placeholder='blur' />
              </div> */}
            </div>
            <div className='grid gap-1.5'>
              {/* <div className='w-full md:w-1/3 h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full md:w-1/3 h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full md:w-1/3 h-8 rounded-lg bg-gray-500 animate-pulse'></div> */}
              <div className=''>AKUN</div>'
            </div>
            <div className='grid gap-1.5 col-span-2 md:col-span-1 justify-start items-start'>
              {/* <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div> */}
              <div className='text-xl font-semibold'>Readme.md</div>
              <p className='text-justify'>
                Magna eiusmod tempor ullamco voluptate aute sint esse incididunt
                ipsum laboris. Nostrud minim laborum pariatur eiusmod minim sunt
                nulla in duis. Exercitation mollit id nulla tempor ut elit
                cupidatat. Deserunt elit ad non exercitation enim cillum.
              </p>
            </div>
            <div className='grid gap-1.5 col-span-2 md:col-span-1'>
              {/* <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div> */}
              <div className='text-xl font-semibold'>Repositories</div>
              <div className='text-justify'>
                <p className=' font-medium'>Ad consectetur voluptate.</p>
                <p>
                  Qui ex mollit irure minim consectetur aliqua esse
                  reprehenderit aliquip veniam eiusmod. Sunt nostrud ipsum
                  cupidatat aliquip mollit sit incididunt Lorem proident
                  occaecat ea ullamco.
                </p>
              </div>
            </div>
            <div className='grid gap-1.5 col-span-2 max-w-2xl mx-auto'>
              {/* <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div> */}
              <div className='text-xl font-semibold'>Projects</div>
              <div className='text-justify'>
                <p className=' font-medium'>Ad consectetur voluptate.</p>
                <p>
                  Qui ex mollit irure minim consectetur aliqua esse
                  reprehenderit aliquip veniam eiusmod. Sunt nostrud ipsum
                  cupidatat aliquip mollit sit incididunt Lorem proident
                  occaecat ea ullamco.
                </p>
              </div>
              <div className='text-justify'>
                <p className=' font-medium'>Ad consectetur voluptate.</p>
                <p>
                  Qui ex mollit irure minim consectetur aliqua esse
                  reprehenderit aliquip veniam eiusmod. Sunt nostrud ipsum
                  cupidatat aliquip mollit sit incididunt Lorem proident
                  occaecat ea ullamco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Body>
    </>
  )
}

export default Github
