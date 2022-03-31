// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

//const withBundleAnalyzer = require('@next/bundle-analyzer')({
//  enabled: process.env.ANALYZE === 'true'
//})

//module.exports = withBundleAnalyzer({
//  images: {
//    domains: ['pbs.twimg.com']
//  }
//})

const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  images: {
    domains: ['pbs.twimg.com']
  }
  // your config for other plugins or the general next.js here...
});
