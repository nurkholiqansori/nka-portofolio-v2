import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { data } from '../pages/api/data'

type Props = {
  isOpen: boolean
  setIsOpen: any
  atDataState: number
  setData: any
  info: boolean
}

const DialogPortofolio = ({
  isOpen,
  setIsOpen,
  atDataState,
  setData,
  info,
}: Props) => {
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  let flowData = data.experience[atDataState]

  const iconSVG: any = {
    wordpress: {
      path: 'M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0',
    },
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-10 overflow-y-auto'
        onClose={closeModal}
      >
        <div className='min-h-screen px-4 text-center bg-white bg-opacity-40 backdrop-blur-sm'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0' />
          </Transition.Child>

          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
              <Dialog.Title
                as='h3'
                className='text-lg font-medium leading-6 text-gray-900'
              >
                {info ? flowData.title : flowData.com}
              </Dialog.Title>
              {info ? (
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Company : {flowData.com}
                  </p>
                  <p className='text-sm text-gray-500 flex gap-1'>
                    Website : {flowData.address}{' '}
                    <Link href={flowData.address}>
                      <a
                        className='hover:text-black'
                        title={flowData.com}
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
                  </p>

                  <p className='text-sm text-gray-500'>
                    {' '}
                    Job Type : {flowData.status}
                  </p>
                  <p className='text-sm text-gray-500'>
                    {' '}
                    Develop on {flowData.date}
                  </p>
                  <div className='text-sm text-gray-500 flex'>
                    Build with{' '}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5 ml-3'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path d={iconSVG[flowData.build].path} />
                    </svg>{' '}
                  </div>
                </div>
              ) : (
                <div className='mt-2 max-h-72 overflow-auto scrollbar-thin scrollbar-thumb-sky-100 hover:scrollbar-thumb-sky-500 scrollbar-thumb-rounded-md'>
                  {flowData.img ? (
                    <Image
                      src={flowData.img}
                      className='mt-5'
                      alt={'Documentation of ' + flowData.com}
                      placeholder='blur'
                      blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAEUlEQVR42mOcuYkBAzAOZUEAxx8M+UokAfQAAAAASUVORK5CYII='
                      objectFit='cover'
                      width={400}
                      height={1000}
                    />
                  ) : (
                    'No Image'
                  )}
                </div>
              )}

              <div className='mt-4 grid grid-cols-2 gap-5'>
                <button
                  type='button'
                  className='px-4 py-2 text-sm font-medium text-sky-900 bg-sky-100 border border-transparent rounded-md hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500'
                  onClick={closeModal}
                >
                  Close
                </button>
                {info ? (
                  ''
                ) : flowData.img ? (
                  <Link href={flowData.img}>
                    <a
                      title='Full View'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-full'
                    >
                      <button
                        type='button'
                        className='w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-sky-900 bg-sky-100 border border-transparent rounded-md hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500'
                      >
                        Full View
                      </button>
                    </a>
                  </Link>
                ) : (
                  ''
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default DialogPortofolio
