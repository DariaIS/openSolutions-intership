const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
require('dotenv-flow').config();

const isDev = process.env.NODE_ENV !== 'production';

const loaders = require('./webpack.loaders.js');
const plugins = require('./webpack.plugins.js');
const modules = [path.resolve(__dirname, '../src'), 'node_modules'];
const extensions = ['.tsx', '.ts', '.jsx', '.js', '.css', '.scss'];

module.exports = {
  mode: process.env.NODE_ENV,
  bail: !isDev,
  target: 'web',
  entry: [path.resolve(__dirname, '../src/index.tsx')],
  output: {
    filename: isDev ? 'bundle.js' : '[name].[fullhash:8].js',
    chunkFilename: isDev ? '[name].chunk.js' : '[name].[fullhash:8].chunk.js',
    path: path.resolve(__dirname, '../build/'),
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: loaders,
  },
  resolve: {
    extensions,
    modules,
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.less', '.json'],
      }),
    ],
  },
  performance: {
    hints: false,
  },
  stats: {
    logging: 'error',
    modules: false,
  },
  plugins,
};
