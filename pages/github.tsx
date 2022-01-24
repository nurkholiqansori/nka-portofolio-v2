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

const Github = ({ datas, data2 }: any) => {
  const router = useRouter()
  const [data1, setData1] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/nurkholiqansori/repos')
      .then((response) => response.json())
      .then((result) => setData1(result))
      .catch((error) => console.log('error', error))
  }, [])

  console.log(data1)

  return (
    <>
      <Header title='Portofolio' url={`${router.asPath}`} />
      <Nav />
      <Body>
        <div className='w-full md:m-10 mb-20'>
          <div className='grid grid-cols-2 mx-5 gap-10'>
            <div className='grid-cols-span-2 grid justify-end'>
              <div className='w-40 h-40 rounded-lg bg-gray-500 animate-pulse'></div>
              {/* <div className='w-40 h-40 rounded-lg'>
                <Image src={logo} placeholder='blur' />
              </div> */}
            </div>
            <div className='grid gap-1.5'>
              {/* <div className='w-full md:w-1/3 h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full md:w-1/3 h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full md:w-1/3 h-8 rounded-lg bg-gray-500 animate-pulse'></div> */}
              <div className=''>AKUN</div>
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
            <div className='grid gap-1.5 col-span-2 md:col-span-1'>
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
            <div className='grid gap-1.5 col-span-2 max-w-2xl mx-auto'>
              {/* <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div>
              <div className='w-full h-8 rounded-lg bg-gray-500 animate-pulse'></div> */}
              <div className='text-xl font-semibold'>Projects</div>
              <div className='text-justify'>
                <p className=' font-medium'>Ad consectetur voluptate.</p>
                <p>
                  Qui ex mollit irure minim consectetur aliqua esse
                  reprehenderit aliquip veniam eiusmod. Sunt nostrud ipsum
                  cupidatat aliquip mollit sit incididunt Lorem proident
                  occaecat ea ullamco.
                </p>
              </div>
              <div className='text-justify'>
                <p className=' font-medium'>Ad consectetur voluptate.</p>
                <p>
                  Qui ex mollit irure minim consectetur aliqua esse
                  reprehenderit aliquip veniam eiusmod. Sunt nostrud ipsum
                  cupidatat aliquip mollit sit incididunt Lorem proident
                  occaecat ea ullamco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Body>
    </>
  )
}

export async function getServerSideProps() {
  let myHeaders = new Headers()
  myHeaders.append(
    'Authorization',
    'token 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',
  )
  myHeaders.append('Cookie', '_octo=GH1.1.1740201808.1640608693; logged_in=no')

  const requestOptions: any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  const [dataRes, profileRes] = await Promise.all([
    fetch(
      'https://api.github.com/repos/nurkholiqansori/nurkholiqansori/readme',
    ),
    fetch(`https://api.github.com/users/nurkholiqansori`, requestOptions),
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
