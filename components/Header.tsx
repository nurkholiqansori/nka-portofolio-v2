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
        description=''
        canonical='https://www.nurkholiqansori.me'
        openGraph={{
          url: `https://www.nurkholiqansori.me${url}`,
          title: `${title} | Nur Kholiq Ansori Profile`,
          description: '',
          images: [
            {
              url: '/logo.png',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
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
          site: `https://www.nurkholiqansori.me${url}`,
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            property: 'dc:creator',
            content: 'Jane Doe',
          },
          {
            name: 'application-name',
            content: 'Nur Kholiq Ansori Profile',
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge; chrome=1',
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
        url='http://www.nurkholiqansori.me'
        sameAs={[
          'http://www.facebook.com/your-profile',
          'http://instagram.com/yourProfile',
          'http://www.linkedin.com/in/yourprofile',
          'http://plus.google.com/your_profile',
        ]}
      />
    </>
  )
}
