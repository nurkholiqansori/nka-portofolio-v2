import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Body from '../components/Body'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import Link from 'next/link'
import Readme from '../components/Readme'
import Repositories from '../components/Repositories'
import { data } from './api/data'

const Github = ({ datas }: any) => {
  const router = useRouter()
  const [data1, setData1] = useState<string[]>([])
  const [dataProfile, setDataProfile] = useState<any[string]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/nurkholiqansori/repos')
      .then((response) => response.json())
      .then((result) => setData1(result))
      .catch((error) => console.log('error', error))
  }, [])

  useEffect(() => {
    fetch('https://api.github.com/users/nurkholiqansori')
      .then((response) => response.json())
      .then((result) => setDataProfile(result))
      .catch((error) => console.log('error', error))
  }, [])

  return (
    <>
      <Header title='Portofolio' url={`${router.asPath}`} />
      <Nav />
      <Body>
        <div className='w-full mb-20'>
          <div className='grid grid-cols-2 mx-5 gap-10 items-start'>
            <div className='col-span-2 md:col-span-1 md:justify-end grid justify-center'>
              {dataProfile?.avatar_url ? (
                <div className='w-40 h-40 rounded-xl overflow-hidden'>
                  <Image
                    placeholder='blur'
                    blurDataURL='logo.png'
                    src={dataProfile.avatar_url}
                    width={200}
                    height={200}
                    objectFit='contain'
                    alt='Profile Photo'
                  />
                </div>
              ) : (
                <div className='w-40 h-40 rounded-lg bg-gray-500 animate-pulse'></div>
              )}

              {/*  */}
            </div>
            <div className='grid gap-1.5 col-span-2 md:col-span-1 bg-white dark:bg-black dark:bg-opacity-50 dark:text-gray-500 bg-opacity-80 backdrop-blur-md py-5 px-2 md:p-5 rounded-xl'>
              {dataProfile.html_url ? (
                <>
                  <div className='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 mr-3'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2'
                      />
                    </svg>
                    {dataProfile.name}
                    <Link href={dataProfile.html_url}>
                      <a
                        className='hover:text-sky-500'
                        title={''}
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
                  <div className='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 mr-3'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>{' '}
                    {dataProfile.bio}
                  </div>
                  <div className='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 mr-3'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>{' '}
                    {dataProfile.location}
                  </div>
                  <div className='flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 mr-3'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z'
                      />
                    </svg>{' '}
                    {dataProfile.public_repos} Repositories
                  </div>
                </>
              ) : (
                <>
                  <div className='w-full md:w-1/3 h-8 rounded-lg bg-gray-500 animate-pulse'></div>
                  <div className='w-full md:w-1/3 h-8 rounded-lg bg-gray-500 animate-pulse'></div>
                  <div className='w-full md:w-1/3 h-8 rounded-lg bg-gray-500 animate-pulse'></div>
                </>
              )}
            </div>
            <div className='grid gap-1.5 col-span-2 md:col-span-1 justify-start items-start'>
              {!datas ? (
                <>
                  <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
                  <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
                  <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
                  <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
                  <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
                </>
              ) : (
                <>
                  <div className='text-xl font-semibold'>Readme.md</div>
                  <div className='text-justify'>
                    <Readme datas={datas} />
                  </div>
                </>
              )}
            </div>
            <div className='grid gap-1.5 row-span-2 col-span-2 md:col-span-1'>
              {data1 ? (
                <>
                  <div className='text-xl font-semibold'>Repositories</div>

                  <Repositories data1={data1} />
                </>
              ) : (
                <>
                  <div className='w-full h-16 rounded-lg bg-gray-500 animate-pulse'></div>
                  <div className='w-full h-16 rounded-lg bg-gray-500 animate-pulse'></div>
                  <div className='w-full h-16 rounded-lg bg-gray-500 animate-pulse'></div>
                  <div className='w-full h-16 rounded-lg bg-gray-500 animate-pulse'></div>
                  <div className='w-full h-16 rounded-lg bg-gray-500 animate-pulse'></div>
                </>
              )}
            </div>
            <div className='grid gap-1.5 col-span-2 md:col-span-1'>
              {data1 ? (
                <>
                  <div className='text-xl font-semibold'>Projects</div>
                  <div className='grid gap-2'>
                    {data.project.map((i) => (
                      <div
                        key={i.id}
                        className='p-5 rounded-xl bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 dark:text-gray-500 backdrop-blur-md'
                      >
                        {' '}
                        <p className=' font-medium'>{i.name}</p>{' '}
                        <div className='flex flex-wrap gap-2 my-2'>
                          {i.tools.map((i) => (
                            <div
                              key={i.id}
                              className='text-xs py-1 px-2 border-2 border-sky-500 text-sky-500 rounded-full'
                            >
                              {' '}
                              {i.name}{' '}
                            </div>
                          ))}
                        </div>
                        <p>{i.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
                  <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
                  <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
                  <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
                  <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
                </>
              )}
            </div>
          </div>
        </div>
      </Body>
    </>
  )
}

export async function getServerSideProps() {
  const [dataRes] = await Promise.all([
    fetch(
      'https://api.github.com/repos/nurkholiqansori/nurkholiqansori/readme',
    ),
  ])

  const [data] = await Promise.all([dataRes.json()])

  const datas = JSON.stringify(data)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { datas },
  }
}

export default Github
