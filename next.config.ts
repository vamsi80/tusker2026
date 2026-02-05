// next.config.ts
import type { NextConfig } from 'next';
import TypeGPU from 'unplugin-typegpu';

const nextConfig: NextConfig = {
  // 👇 Disable Turbopack, use Webpack
  turbopack: {},

  webpack(config) {
    config.plugins.push(TypeGPU.webpack);
    return config;
  },
};

export default nextConfig;
