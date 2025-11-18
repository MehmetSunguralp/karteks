import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'www.cws.com',
      },
      {
        protocol: 'https',
        hostname: 'i.hizliresim.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.ecommercedns.uk',
      },
      {
        protocol: 'https',
        hostname: 'formatek.com.tr',
      },
      {
        protocol: 'https',
        hostname: 'cobra-workwear.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'insulationmerchant.com',
      },
    ],
  },
};

export default nextConfig;
