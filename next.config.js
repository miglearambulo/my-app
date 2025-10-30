/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-app',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/my-app',
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
}

module.exports = nextConfig