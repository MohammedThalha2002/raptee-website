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
  // async rewrites() {
  //   return {
  //     beforeFiles: [
  //       // if the host is `app.acme.com`,
  //       // this rewrite will be applied
  //       {
  //         source: "/:path*",
  //         has: [
  //           {
  //             type: "host",
  //             value: "careers.raptee.com",
  //           },
  //         ],
  //         destination: "/careers/:path*",
  //       },
  //     ],
  //   };
  // },
  images: {
    domains: ["i.postimg.cc", "postimg.cc"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
