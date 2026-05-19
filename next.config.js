/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nixerino',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

module.exports = nextConfig;
