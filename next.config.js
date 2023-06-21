/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'example.com',
    //     port: '',
    //     pathname: '/account123/**',
    //   },
    // ],
    domains:['img1.baidu.com','image.baidu.com']
  },
};
module.exports = nextConfig;
