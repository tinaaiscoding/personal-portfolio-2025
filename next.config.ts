import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              dimensions: false,
            },
          },
        ],
        as: '*.js',
      },
    },
  },
  images: {
    remotePatterns: [new URL('https://blocks.astratic.com/img/general-img-landscape.png')],
  },
};

export default nextConfig;
