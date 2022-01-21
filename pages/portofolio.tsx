import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Body from '../components/Body'
import CardExperience from '../components/CardExperience'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'

const Portofolio: NextPage = () => {
  const router = useRouter()

  return (
    <>
      <Header title='Portofolio' url={`${router.asPath}`} />
      <Nav />
      <Body>
        <CardExperience />
      </Body>
    </>
  )
}

export default Portofolio
