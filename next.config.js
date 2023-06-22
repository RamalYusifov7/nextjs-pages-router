/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.reuters.com','static.timesofisrael.com',"media.npr.org"],
  },
}

module.exports = nextConfig
