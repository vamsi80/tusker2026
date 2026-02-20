// next.config.ts
import type { NextConfig } from 'next';
import TypeGPU from 'unplugin-typegpu';

const nextConfig: NextConfig = {
  // Required in Next.js 16: empty turbopack config silences the
  // "webpack config with no turbopack config" error when both coexist.
  turbopack: {},

  // Compress responses
  compress: true,

  // Optimize heavy package imports — tree-shakes automatically
  experimental: {
    optimizePackageImports: [
      'gsap',
      'three',
      '@react-three/fiber',
      'lucide-react',
    ],
  },

  images: {
    // Prefer AVIF > WebP — faster on modern browsers
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85, 90],
    // Reasonable device size breakpoints
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum cache TTL: 1 year for static assets
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  async headers() {
    return [
      // Immutable cache for static image assets
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache fonts aggressively
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Security headers for all routes
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },

  webpack(config) {
    config.plugins.push(TypeGPU.webpack);

    return config;
  },
};

export default nextConfig;
