const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(
  {
    watchOptions: {
      poll: false,
    },
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      compress: true,
      host: '0.0.0.0',
      port: 3000,
      client: {
        logging: 'warn',
        overlay: {
          warnings: false,
          errors: true,
        },
      },
      static: {
        publicPath: '/',
      },
      // proxy: {
      //   '/api': {
      //     target: process.env.BASE_API,
      //     secure: false,
      //     changeOrigin: true,
      //   },
      // },
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      },
    },
  },
  common,
);
