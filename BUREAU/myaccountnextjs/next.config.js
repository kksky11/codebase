/** @type {import('next').NextConfig} */
const path = require('path');

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    disable: process.env.NODE_ENV === 'development',
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = withPWA({
  compress        : true,
  reactStrictMode : true,
  swcMinify       : true,
  i18n            : {locales: ['en'],defaultLocale: 'en'},
  images          : {domains: ['images.unsplash.com',]},
  sassOptions     : {includePaths: [path.join(__dirname, 'styles')],},
  basePath        : process.env.NEXT_PUBLIC_BASE_PATH,
  pageExtensions  : ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
});
module.exports = nextConfig;
