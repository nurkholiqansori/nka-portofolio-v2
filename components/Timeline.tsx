import Link from 'next/link'
import React from 'react'
import { data } from '../pages/api/data'

type Props = {}

const Timeline = (props: Props) => {
  return (
    <div className='w-full'>
      <div className='flex'>
        <div className='flex flex-col items-center mr-4'>
          <div>
            <div className='flex items-center justify-center w-10 h-10 border rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-gray-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M12 14l9-5-9-5-9 5 9 5z' />
                <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                />
              </svg>
            </div>
          </div>
          <div className='w-px h-full bg-gray-300'></div>
        </div>
        <div className='pb-8 '>
          <p className='mb-2 text-xl font-bold text-gray-600'>Education</p>
          <p className='text-gray-700'>
            {data.study.map((i) => (
              <>
                <div key={i.id}>
                  <p>
                    {i.date} &#8213; {i.title} @ {i.sch}
                  </p>
                </div>
              </>
            ))}
          </p>
        </div>
      </div>

      <div className='flex'>
        <div className='flex flex-col items-center mr-4'>
          <div>
            <div className='flex items-center justify-center w-10 h-10 border rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-gray-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className='pt-1'>
          <p className='mb-2 text-lg font-bold text-gray-600'>Skill</p>
          <p className='text-gray-700 grid gap-5 ml-1'>
            {data.skill.map((i) => (
              <>
                <div className=''>
                  <Link href={i.credential}>
                    <a title={i.title + ' from ' + i.company} target='_blank' rel='nofollow noopener noreferrer'>
                      <p className='font-medium'>{i.title}</p>
                    </a>
                  </Link>
                  <p className=''>Published from {i.date}</p>
                </div>
              </>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Timeline
