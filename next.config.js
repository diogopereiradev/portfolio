/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['h5p.org', 'github.com']
  },
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}'
    }
  }
};
module.exports = nextConfig;