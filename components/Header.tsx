import React from 'react'
import { NextSeo, SocialProfileJsonLd } from 'next-seo'

interface Props {
  title: string,
  url: any
}

export const Header = ({title, url}: Props) => {
  return (
    <>
      <NextSeo
        title={`${title} | Nur Kholiq Ansori Profile`}
        description="My Name is Nur Kholiq Ansori, I'm a Computer Science who likes Javascript Framework"
        canonical='https://nurkholiqansori.me'
        openGraph={{
          url: `https://nurkholiqansori.me${url}`,
          title: `${title} | Nur Kholiq Ansori Profile`,
          description:
            'My Name is Nur Kholiq Ansori, I\'m a Computer Science who likes Javascript Framework',
          images: [
            {
              url: '/logo.png',
              width: 800,
              height: 600,
              alt: 'Logo Nur Kholiq Ansori',
              type: 'image/png',
            },
          ],
          site_name: 'Nur Kholiq Ansori Profile',
          profile: {
            firstName: 'Nur Kholiq',
            lastName: 'Ansori',
            username: 'nurkholiqansori',
            gender: 'Male',
          },
        }}
        twitter={{
          handle: '@EnjoyKudasai',
          site: `https://nurkholiqansori.me${url}`,
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'application-name',
            content: 'Nur Kholiq Ansori Profile',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/logo.png',
            sizes: '76x76',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
        ]}
      />
      <SocialProfileJsonLd
        type='Person'
        name='Nur Kholiq Ansori'
        url='http://nurkholiqansori.me'
        sameAs={[
          'http://www.facebook.com/nurkholiq.ansori.1',
          'http://instagram.com/nurkholiqansori',
          'http://www.linkedin.com/in/nurkholiqansori',
        ]}
      />
    </>
  )
}
