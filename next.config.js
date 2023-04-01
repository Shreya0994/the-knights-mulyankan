/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'themewagon.github.io',
        port: '',
        pathname: '/novena/**',
      },
    ],
  },
}

module.exports = nextConfig
