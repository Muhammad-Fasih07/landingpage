const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname)
    return config
  },
}

module.exports = nextConfig
