/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  }, 
  images: {
    domains: ['gyazo.com'],
  },
}

module.exports = nextConfig
