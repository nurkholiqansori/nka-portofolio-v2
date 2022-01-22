import React from 'react'

interface Props {
  children: any
}

const Body = ({ children }: Props) => {
  return (
    <div className='w-full h-full mt-28 selection:bg-sky-400 selection:text-white'>
      {children}
    </div>
  )
}

export default Body
