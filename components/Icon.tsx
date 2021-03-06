import Link from 'next/link'
import React from 'react'

type Props = {
  key?: number
  name: string
  color: string
  link: string
  path: string
}

const Icon = ({ key, name, color, link, path }: Props) => {
  return (
    <div
      key={key}
      className={`bg-[#${color}] p-2 m-2 w-10 h-10 flex justify-center items-center rounded-full hover:scale-95 cursor-pointer overflow-hidden mx-auto text-white`}
    >
      <Link href={link}>
        <a title={name} target='_blank' rel='noopener noreferrer'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              role='img'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1}
                d={path}
              />
            </svg>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Icon
