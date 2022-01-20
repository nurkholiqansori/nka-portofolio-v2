import * as React from 'react'

interface ICVProps {}

const CV: React.FunctionComponent<ICVProps> = (props) => {
  return (
    <>
      <div className='w-96 md:w-1/2 mx-auto border-2 rounded-lg'>
        <div className='grid md:grid-flow-col p-10 border-b-2'>
          <div className=''>FOTO</div>
          <div className=''>ALAMAT</div>
          <div className='md:text-right'>ALAMAT</div>
        </div>
        <div className='p-10 border-b-2 text-center'>DESC</div>
        <div className='p-10'>ISI</div>
      </div>
    </>
  )
}

export default CV
