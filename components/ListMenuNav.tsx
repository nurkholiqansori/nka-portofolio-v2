import React from 'react'
import Link from 'next/link'


interface Props {
  link: any
  title: string
}

const ListMenuNav = ({ link, title }: Props) => {
  return (
    <div className='hover:md:border-l-[1px] hover:md:border-sky-300 px-5 py-3'>
      <Link href={link}>
        <a title={title}>{title}</a>
      </Link>
    </div>
  )
}

export default ListMenuNav
