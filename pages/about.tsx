import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Body from '../components/Body'
import CV from '../components/CV'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'

const About: NextPage = () => {
  const Router = useRouter()

  return (
    <>
      <Header title='About' url={`${Router.asPath}`} />
      <Nav />
      <Body>
        <CV />
      </Body>
    </>
  )
}

export default About
