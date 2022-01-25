import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Body from '../components/Body'
import Carousel from '../components/Carousel'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import logo from '../public/logo.png'


const Home: NextPage = () => {
  const router = useRouter()  

  return (
    <>
      <Header title='Home' url={`${router.asPath}`} />
      <Nav />
      <Body>
        <div className='grid grid-cols-1 md:grid-cols-2 mx-3 md:mx-auto max-w-6xl gap-10'>
          <div className=''>
            <div className='text-center md:text-left font-extrabold text-2xl md:text-6xl text-white'>
              Welcome to my website
            </div>
            <div className='w-20 h-20 rounded-full overflow-hidden my-10 mx-auto md:mx-0'>
              <Image src={logo} placeholder='blur' objectFit='cover' alt='My logo' />
            </div>
            <div className='text-center md:text-left font-bold text-xl md:text-3xl mt-3 text-white'>
              My Name is Nur Kholiq Ansori, I&apos;m a Computer Science who likes
              Javascript Framework
            </div>
          </div>
          <div className='flex items-center'>
            <Carousel />
          </div>
        </div>
      </Body>
    </>
  )
}

export default Home
