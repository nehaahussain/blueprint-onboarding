/** @type {import('next').NextConfig} */

export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.britannica.com',
        port: '',
      },
    ],
  },
};
