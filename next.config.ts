import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/uc**', // Google Drive public images
      },
      {
        protocol: 'https',
        hostname: 'rabbito.social',
        pathname: '/**', // all paths
      },
      {
        protocol: 'https',
        hostname: 'www.lifecycleplm.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'disearch.ai',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'play.google.com',
        pathname: '/store/apps/details',
      },
    ],
  },
}

export default nextConfig
