import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Body from '../components/Body'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { data } from './api/wptheme'

type Props = {}

const Collections: NextPage = (props: Props) => {
  const router = useRouter()

  return (
    <>
      <Header title='Portofolio' url={`${router.asPath}`} />
      <Nav />
      <Body>
        <div className='w-full mb-20 grid justify-center'>
          <div>
            <div className=''>
              <div className='inset-x-auto w-full'>
                <div className='max-w-xl mx-auto shadow-md rounded-md p-4 bg-white bg-opacity-30 backdrop-blur-sm'>
                  <div className='flex gap-1 flex-col md:flex-row center my-10'>
                    <div className='relative flex-1'>
                      <input
                        id='departure'
                        name='departure'
                        type='text'
                        className='peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500 focus:border-2 p-3'
                        placeholder='Search'
                      />
                      <label className='absolute left-2 px-1 -top-2.5 bg-white rounded-full text-sky-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-sky-600 peer-focus:text-sm'>
                        Search
                      </label>
                      <div className='absolute right-0 top-0 mt-2 mr-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='1'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-center mt-6'>
                    <button className='bg-sky-500 hover:bg-sky-700 text-white font-extrabold text-lg rounded-full px-6 py-3'>
                      Search
                    </button>
                  </div>
                  <div className='text-gray-900 dark:text-gray-200 text-center my-5 after:content-divider'>
                    or select the category
                  </div>
                  <p className='text-xs italic text-right'> - Total {data.wptheme.length} Theme</p>
                </div>
              </div>
            </div>
            <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-10 gap-5 my-10'>
              {data.wptheme.map((i) => (
                <div className='px-0 w-80 max-w-lg' key={i.id}>
                  <div className='bg-gray-50 dark:bg-gray-700 md:bg-white md:shadow-xl rounded-lg mb-6 '>
                    <div className='md:flex-shrink-0 h-32'>
                      <img
                        src={i.img}
                        alt={i.name}
                        className='object-cover object-top h-full w-full rounded-lg rounded-b-none'
                      />
                    </div>

                    <div className='py-1'>
                      <div className='p-4'>
                        <h2 className='truncate font-bold mb-2 text-2xl text-gray-800 dark:text-gray-400 tracking-normal'>
                          {i.name === '' ? 'No Name' : i.name}
                        </h2>

                        {i.category[0].name ? (
                          <div className='break-words text-sm text-gray-700 dark:text-gray-400 mx-2 mr-1 flex gap-1 flex-wrap'>
                            {i.category.map((item) => (
                              <span
                                key={item.id}
                                className='px-2 py-1 border border-gray-500 rounded-full text-xs'
                              >
                                {item.name}
                              </span>
                            ))}
                          </div>
                        ) : (
                          ''
                        )}
                      </div>

                      <div className='flex items-center justify-between mx-3 md:mx-0 p-2 md:p-4 '>
                        <div className='flex items-center'>
                          <div className='text-sm'>
                            {i.creator === '' ? (
                              ''
                            ) : (
                              <p className='text-black dark:text-gray-400 leading-none'>
                                By {i.creator}
                              </p>
                            )}
                          </div>
                        </div>
                        {i.url === '' ? (
                          <p className='bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-500 rounded-full px-6 py-2 text-xs'>
                            No Preview
                          </p>
                        ) : (
                          <Link href={i.url}>
                            <a
                              target='_blank'
                              rel='noreferrer noopener'
                              title={'Theme ' + i.name}
                              className='bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-500 hover:bg-gray-500 hover:text-white rounded-full px-6 py-2 text-xs'
                            >
                              {' '}
                              Preview
                            </a>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Body>
    </>
  )
}

export default Collections
