import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Body from '../components/Body';
import { Header } from '../components/Header';
import { Nav } from '../components/Nav';

type Props = {};

const Collections: NextPage = (props: Props) => {
  const router = useRouter()

  return (
    <>
      <Header title='Portofolio' url={`${router.asPath}`} />
      <Nav />
      <Body>
        <div className='w-full m-5 md:m-10 mb-20'>
          <div>
            <div className='flex items-center'>
              <input
                className='border-b-[1px] p-3 mr-5'
                type='text'
                name='search'
                placeholder='Search The Theme'
              />
              <div className='relative -left-10 bg-sky-500 text-white p-2 rounded-full cursor-pointer'>
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
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Body>
    </>
  )
};

export default Collections;
