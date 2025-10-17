import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  async redirects() {
    return [
      {
        source: '/R&R',
        destination: '/rr',
        permanent: true,
      },
      {
        source: '/D&D',
        destination: '/dd',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/E&E',
        destination: '/ee',
        permanent: true,
      },
      {
        source: '/news-details/:slug*',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/C&C',
        destination: '/cc',
        permanent: true,
      },
      {
        source: '/U&U',
        destination: '/uu',
        permanent: true,
      },
      {
        source: '/blog-post/:slug*',
        destination: '/blogs',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;