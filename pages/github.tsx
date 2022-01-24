import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Body from '../components/Body'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import logo from '../public/logo.png'
import Link from 'next/link'
import Readme from '../components/Readme'
import Repositories from '../components/Repositories'
import { data } from './api/data'

const Github = ({ datas, data2 }: any) => {
  const router = useRouter()
  const [data1, setData1] = useState<any[]>([])
  const [dataProfile, setDataProfile] = useState<any[]>([])

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
  console.log(dataProfile)

  return (
    <>
      <Header title='Portofolio' url={`${router.asPath}`} />
      <Nav />
      <Body>
        <div className='w-full md:m-10 mb-20'>
          <div className='grid grid-cols-2 mx-5 gap-10 items-start'>
            <div className='grid-cols-span-2 grid justify-end'>
              {dataProfile.avatar_url ? (
                <div className='w-40 h-40 rounded-lg overflow-hidden'>
                  <Image
                    placeholder='blur'
                    blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mOcuYkBAzAOZUEAxx8M+UokAfQAAAAASUVORK5CYII='
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
            <div className='grid gap-1.5'>
              {dataProfile.html_url ? (
                <div className='flex'>
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
            <div className='grid gap-1.5 row-span-2 md:col-span-1'>
              {data1 ? (
                <>
                  <div className='text-xl font-semibold'>Repositories</div>
                  <Repositories data1={data1} />
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
            <div className='grid gap-1.5 col-span-2 md:col-span-1'>
              {data1 ? (
                <>
                  <div className='text-xl font-semibold'>Projects</div>
                  <div className='grid gap-2'>
                    {data.project.map((i) => (
                      <div key={i.id} className='border-2 p-5 rounded-xl'>
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
  const [dataRes, profileRes] = await Promise.all([
    fetch(
      'https://api.github.com/repos/nurkholiqansori/nurkholiqansori/readme',
    ),
    fetch(`https://api.github.com/users/nurkholiqansori`),
  ])

  const [data, profile] = await Promise.all([dataRes.json(), profileRes.json()])

  const datas = JSON.stringify(data)
  const datas2 = JSON.stringify(profile)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { datas, datas2 },
  }
}

export default Github
