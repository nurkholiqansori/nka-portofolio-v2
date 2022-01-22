import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
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
                {flowData.title}
              </Dialog.Title>
              {info ? (
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Company: {flowData.com}
                  </p>
                  <p className='text-sm text-gray-500'>
                    Website: {flowData.address}
                  </p>
                  <p className='text-sm text-gray-500'>
                    {' '}
                    Develop on {flowData.date}
                  </p>

                  <p>{atDataState}</p>
                </div>
              ) : (
                <div className='max-h-1/2'>
                  {console.log(flowData.img === null)
                  }
                  {flowData.img ? (
                    <img src={flowData.img} />
                  ) : (
                    'No Image'
                  )}
                </div>
              )}

              <div className='mt-4'>
                <button
                  type='button'
                  className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default DialogPortofolio
