/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.shields.io'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/sitemap-generator')
    }
    return config
  },
}

module.exports = nextConfig
