/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
    unoptimized: true
  }
}

module.exports = nextConfig 