import React from 'react'
import Link from 'next/link'


interface Props {
  link: any
  title: string
}

const ListMenuNav = ({ link, title }: Props) => {
  return (
    <div className='hover:before:content-[">"] md:px-5 py-3 z-30'>
      <Link href={link}>
        <a title={title}>{title}</a>
      </Link>
    </div>
  )
}

export default ListMenuNav
