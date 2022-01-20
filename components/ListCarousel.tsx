import React from 'react'
import Link from 'next/link'

interface Props {
  title: string
  number: number
  img: any
  description: string | number
  link: any
}

const ListCarousel = ({ title, number, img, description, link }: Props) => {
  return (
    <div
      className='rounded-lg w-56 md:w-80 p-5 border-2 snap-center'
      id={`${number}`}
    >
      <div className='mt-28'></div>
      <div className='text-sm'>{description}</div>
      <div>
        <Link href={link}>
          <a
            title={title}
            className='hover:text-sky-300 text-lg after:content-link'
          >
            {title}
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ListCarousel
