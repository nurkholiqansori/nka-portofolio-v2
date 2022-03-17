import React from 'react'
import Link from 'next/link'

interface Props {
  title: string
  img?: string
  description?: string
  link: string
}

const ListCarousel = ({ title, img, description, link }: Props) => {
  return (
    <div
      className='rounded-xl p-5 snap-center bg-white bg-opacity-40 backdrop-blur w-48'
    >
      <div className='mt-28'></div>
      <div className='text-sm text-white dark:text-gray-100'>{description}</div>
      <div>
        <Link href={link}>
          <a
            title={title}
            className='hover:text-white dark:hover:text-sky-200 text-lg'
          >
            {title} &#8641;
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ListCarousel
