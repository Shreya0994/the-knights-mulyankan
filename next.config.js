/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    nextScriptWorkers: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "themewagon.github.io",
        port: "",
        pathname: "/novena/**",
      },
    ],
  },
};
module.exports = nextConfig;
