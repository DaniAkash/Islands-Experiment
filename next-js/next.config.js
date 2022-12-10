/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Ignoring lint errors to simulate runtime error
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
