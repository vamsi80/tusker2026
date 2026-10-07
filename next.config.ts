// next.config.ts
import type { NextConfig } from 'next';
import TypeGPU from 'unplugin-typegpu';
import { createHash } from 'crypto';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

// Hash of a deck's slide jpgs (public/{dir}), so replacing a slide busts the immutable cache below
// without a manual version bump. Computed here, not in the page, so public/ isn't traced into the function.
const deckVersion = (dir: string) => {
  const root = join(process.cwd(), 'public', dir);
  const h = createHash('md5');
  for (const f of readdirSync(root).filter((f) => f.endsWith('.jpg')).sort()) h.update(f).update(readFileSync(join(root, f)));
  return h.digest('hex').slice(0, 8);
};

// public/ assets are unhashed, so 'immutable' in dev makes swapped files
// (logo.png etc.) unreachable until the browser cache expires.
const IMMUTABLE = process.env.NODE_ENV === 'production'
  ? 'public, max-age=31536000, immutable'
  : 'no-store';
const nextConfig: NextConfig = {
  // Required in Next.js 16: empty turbopack config silences the
  // "webpack config with no turbopack config" error when both coexist.
  turbopack: {},

  env: {
    DECK_V_WIPRO: deckVersion('wipro'),
    DECK_V_CAPABILITIES: deckVersion('capabilities'),
  },

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
            value: IMMUTABLE,
          },
        ],
      },
      // Cache fonts aggressively
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: IMMUTABLE,
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
