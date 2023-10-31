/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextIntl = require('next-intl/plugin');
const withNextIntl = nextIntl('./i18n.ts');

const nextConfig = withNextIntl({
  images: {
    domains: ['h5p.org', 'github.com', 'i.ibb.co', 'raw.githubusercontent.com']
  },
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}'
    }
  }
});
module.exports = nextConfig;