import React from 'react'
import Link from 'next/link'

type Props = {
  data1: any
}

const Repositories = ({ data1 }: Props) => {
  return (
    <div className='grid gap-2 '>
      {data1.map((i: any, induk: any) => (
        <div
          key={induk}
          className='bg-white bg-opacity-80 backdrop-blur-md p-5 rounded-xl'
        >
          <div className='font-medium flex'>
            {i.name}
            <Link href={i.html_url}>
              <a
                className='hover:text-sky-500'
                title={i.com}
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-3 w-3'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </a>
            </Link>
          </div>
          <div className='flex flex-wrap gap-2 my-2'>
            {i.topics.map((i: any, induk: string) => (
              <>
                <div
                  key={induk}
                  className='text-xs py-1 px-2 border-2 border-sky-500 text-sky-500 rounded-full'
                >
                  {i}
                </div>
              </>
            ))}
          </div>
          <p>{i.description}</p>
          <div className='w-1/3'>
            {i.homepage ? (
              <Link href={i.homepage}>
                <a
                  className='hover:text-sky-500'
                  title={i.com}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='border-[1px] w-20 text-center p-1 mt-2 rounded-lg hover:border-sky-500 cursor-pointer'>
                    View
                  </div>
                </a>
              </Link>
            ) : (
              ''
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Repositories
