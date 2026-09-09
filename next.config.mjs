/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          has: [{ type: 'host', value: 'drvr8\\.band' }],
          destination: '/drvr8',
        },
      ],
    };
  },
};

export default nextConfig;
