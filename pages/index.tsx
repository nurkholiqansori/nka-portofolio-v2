import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import Body from '../components/Body'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import logo from '../public/logo.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ListCarousel from '../components/ListCarousel'
import Link from 'next/link'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
}

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Header title='Home' url={`${router.asPath}`} />
      <Nav />
      <Body>
        <div className='grid grid-cols-1 md:grid-cols-2 mx-3 md:mx-auto max-w-6xl gap-10'>
          <div className=''>
            <div className='text-center md:text-left font-extrabold text-2xl md:text-6xl text-white dark:text-gray-500'>
              Welcome to my website
            </div>
            <div className='w-20 h-20 rounded-full overflow-hidden my-10 mx-auto md:mx-0'>
              <Image
                src={logo}
                placeholder='blur'
                objectFit='cover'
                alt='My logo'
              />
            </div>
            <div className='text-center md:text-left font-bold text-xl md:text-3xl mt-3 text-white dark:text-gray-500'>
              My Name is Nur Kholiq Ansori, I&apos;m a Computer Science who
              likes Javascript Framework
            </div>
          </div>
          <Carousel
            responsive={responsive}
            slidesToSlide={1}
            infinite
            centerMode
            swipeable
            sliderClass=''
            containerClass='carousel-container'
            itemClass='image-item mx-7'
          >
            <ListCarousel
              title='About'
              description='My curriculum Vitae'
              link='/about'
            />
            <ListCarousel
              title='Portofolio'
              description='My Portofolio'
              link='/portofolio'
            />
            <ListCarousel
              title='Github'
              description='My work experience'
              link='/github'
            />
          </Carousel>
        </div>
      </Body>
    </>
  )
}

export default Home
