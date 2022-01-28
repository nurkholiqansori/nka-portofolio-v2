import React from 'react'
  
interface Props {
  children: any
}

const Body = ({ children }: Props) => {
  return (
    <div
      className='w-full h-full py-28 pb-32 selection:bg-sky-400 selection:text-white dark:selection:text-gray-800 dark:selection:bg-gray-400'
      
    >
      {children}
    </div>
  )
}

export default Body
