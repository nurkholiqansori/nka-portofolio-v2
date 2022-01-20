import React from 'react'

interface Props {
  children: any
}

const Body = ({ children }: Props) => {
  return (
    <div className='w-full h-full mt-28'>
      {children}
    </div>
  )
}

export default Body
