// next.config.ts
import type { NextConfig } from 'next';
import TypeGPU from 'unplugin-typegpu';

const nextConfig: NextConfig = {
  // 👇 Disable Turbopack, use Webpack
  turbopack: {},

  images: {
    qualities: [75, 90, 100],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ]
  },

  webpack(config) {
    config.plugins.push(TypeGPU.webpack);
    return config;
  },
};

export default nextConfig;
