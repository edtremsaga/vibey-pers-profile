// Start CSP in report-only mode so existing media cannot be blocked by rollout.
const reportOnlyCsp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com https://vercel.live",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://vitals.vercel-insights.com https://vercel.live",
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
  "media-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

const slowMovingBirdPages = ['shows', 'videos', 'photos', 'songs', 'contact'];
const slowMovingBirdHost = [{ type: 'host', value: 'slowmovingbird\\.band' }];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 90],
    localPatterns: [
      { pathname: '/**', search: '' },
      // Preserve the existing cache-busted show poster without allowing arbitrary queries.
      { pathname: '/slowmovingbird/slow-moving-bird-slims-october-28-2026.png', search: '?v=2' },
    ],
  },
  poweredByHeader: false,
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        // Enforce only directives that do not restrict scripts, images or media.
        { key: 'Content-Security-Policy', value: "object-src 'none'; base-uri 'self'; frame-ancestors 'none'" },
        { key: 'Content-Security-Policy-Report-Only', value: reportOnlyCsp },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    }];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'host', value: 'drvr8\\.band' }],
          destination: '/drvr8',
        },
        {
          source: '/',
          has: slowMovingBirdHost,
          destination: '/slowmovingbird',
        },
        ...slowMovingBirdPages.map(path => ({
          source: `/${path}`,
          has: slowMovingBirdHost,
          destination: `/slowmovingbird/${path}`,
        })),
      ],
    };
  },
  async redirects() {
    return [
      {
        source: '/slowmovingbird',
        has: slowMovingBirdHost,
        destination: '/',
        permanent: true,
      },
      ...slowMovingBirdPages.map(path => ({
        source: `/slowmovingbird/${path}`,
        has: slowMovingBirdHost,
        destination: `/${path}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
