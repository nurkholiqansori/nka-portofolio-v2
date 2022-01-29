import Link from 'next/link'
import React from 'react'
import ListMenuNav from './ListMenuNav'
import { Transition } from '@headlessui/react'

interface Props {
  show: boolean
}

const nav = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: 'about'
  },
  {
    name: 'Portofolio',
    link: 'portofolio',
  },
  {
    name: 'Github',
    link: 'github',
  },
  {
    name: 'Collection',
    link: 'wp-theme'
  }
]

const MenuNav = ({ show }: Props) => {

  return (
    <>
      <Transition
        show={show}
        enter='transition-opacity duration-75'
        enterFrom='opacity-0 absolute -top-full'
        enterTo='opacity-100'
        leave='transition-opacity duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='w-screen h-screen bg-white dark:bg-black dark:bg-opacity-50 bg-opacity-50 backdrop-blur-md fixed top-0 left-0 overflow-y-scroll z-20 scrollbar scrollbar-thin hover:scrollbar-track-inherit scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-sky-200 scrollbar-track-transparent'>
          <div className='pl-28 py-28 text-3xl text-sky-900 dark:text-gray-300 font-extrabold md:text-9xl flex flex-col gap-10 mt-10'>
            {nav.map((i) => (
              <ListMenuNav key={i.name} link={i.link} title={i.name} />
            ))}
          </div>
          <div className='text-sky-900 dark:text-gray-500 text-opacity-60 text-3xl md:text-9xl font-extrabold absolute bottom-1/2 md:bottom-0 right-0 md:-right-32 -rotate-90 -z-[1]'>
            My Profile
          </div>
        </div>
      </Transition>
    </>
  )
}

export default MenuNav
