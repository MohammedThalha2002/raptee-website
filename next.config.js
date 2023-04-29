/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/careers/:path*",
        destination: `/careers`,
      },
    ];
  },
  images: {
    domains: ["i.postimg.cc", "postimg.cc"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
