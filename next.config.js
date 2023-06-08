/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['h5p.org', 'github.com', 'i.ibb.co']
  },
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}'
    }
  }
};
module.exports = nextConfig;