import Link from 'next/link'
import React from 'react'

type Props = {
  id?: number
  name: string | any
  color: any
  link: any
  path: any
}

const Icon = ({ id, name, color, link, path }: Props) => {
  return (
    <>
      <Link href={link}>
        <a title={name}>
          <div
            key={id}
            className={(color ? (`bg-[${color}]`) : 'bg-sky-100') + ' p-2 m-2 w-10 h-10 flex justify-center items-center rounded-full hover:scale-95 cursor-pointer overflow-hidden'}
          >
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
                d={path}
              />
            </svg>
          </div>
        </a>
      </Link>
    </>
  )
}

export default Icon
