const { redirect } = require('next/dist/server/api-utils');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirect() {
    return [
      {
        source: 'products/deleted_forever', // 이 경로로 왔을 때
        destination: '/products', // 여기로 이동시킬꺼야!
        permanet: true, // 영원히! 앞으로도 쭈욱~!!
      },
      {
        source: 'products/deleted_temp', // 이 경로로 왔을 때
        destination: '/products', // 여기로 이동시킬꺼야!
        permanet: false, // 일시적으로 리다이렉트 시켜주면 돼~!
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: 'april', // 아래 경로를 이 경로로 적용할꺼야~!
        destination: '/about/me/april', // 이 경로는 너무 복잡하니까, 또는 보안상 가려졌으면 좋겠으니까
      },
      {
        source: '/items/:slug',
        destination: '/products/:slug',
      },
    ];
  },
};

module.exports = nextConfig;
