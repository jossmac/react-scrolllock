const withPreconstruct = require('@preconstruct/next');

const debug = process.env.NODE_ENV !== 'production';

module.exports = withPreconstruct({
  assetPrefix: !debug ? '/Next-gh-page-example/' : '',
  typescript: {
    ignoreDevErrors: true,
  },
});
