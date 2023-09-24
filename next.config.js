import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { esmExternals: true },
  images: {
    domains: ['imagedelivery.net'],
  },
};

export default withContentlayer(nextConfig);
