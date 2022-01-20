import Link from 'next/link'
import React from 'react'
import ListMenuNav from './ListMenuNav'

interface Props {
  show: boolean
}

const MenuNav = ({ show }: Props) => {
  return (
    <>
      <div
        className={
          'overflow-hidden animate-fade-in-down ' +
          (show ? 'visible ' : 'hidden')
        }
      >
        <div className='w-screen h-screen bg-sky-900 fixed overflow-y-scroll scrollbar scrollbar-thin hover:scrollbar-track-inherit scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-sky-200 scrollbar-track-transparent'>
          <div className='pl-28 py-28 text-3xl text-sky-50 font-medium md:text-9xl flex flex-col gap-10'>
            <ListMenuNav link='/' title='Home' />
            <ListMenuNav link='/about' title='About' />
            <ListMenuNav link='/portofolio' title='Portofolio' />
            <ListMenuNav link='/github' title='Github' />
            <ListMenuNav link='/wp-theme' title='Collection' />
          </div>
          <div className='text-sky-50 text-opacity-70 text-3xl md:text-9xl font-extrabold absolute bottom-1/2 md:bottom-0 right-0 md:-right-32 -rotate-90 -z-10'>
            My Profile
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuNav
