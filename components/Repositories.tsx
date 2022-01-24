import React from 'react'

type Props = {
  data1: any
}

const Repositories = ({ data1 }: Props) => {
  
  return (
    <>
      {data1.map((i: any) => (
        <div key={i.id} className='border-2 p-5'>
          <p className=' font-medium'>{i.name}</p>
          <p>
            {i.description}
          </p>
        </div>
      ))}
    </>
  )
}

export default Repositories
