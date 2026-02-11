// next.config.ts
import type { NextConfig } from 'next';
import TypeGPU from 'unplugin-typegpu';

const nextConfig: NextConfig = {
  // 👇 Disable Turbopack, use Webpack
  turbopack: {},

  images: {
    qualities: [75, 90, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  webpack(config) {
    config.plugins.push(TypeGPU.webpack);
    return config;
  },
};

export default nextConfig;
