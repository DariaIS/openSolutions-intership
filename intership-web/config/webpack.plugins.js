const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const description = require('../package.json').description;

const isDev = process.env.NODE_ENV !== 'production';

module.exports = [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../src/index.html'),
    minify: {
      removeComments: !isDev,
      collapseWhitespace: !isDev,
    },
    base: './',
    meta: {
      charset: 'UTF-8',
      viewport:
        'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
      description,
      'Content-Security-Policy': { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
    },
    title: description,
  }),
  new ESLintPlugin({
    extensions: ['js', 'jsx', 'ts', 'tsx'],
    // cache: true
  }),
  new CaseSensitivePathsPlugin(),
  new webpack.DefinePlugin({
    'process.env.DEVELOPMENT': isDev,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.API': JSON.stringify(process.env.API),
  }),
  new MiniCssExtractPlugin(),
  new FaviconsWebpackPlugin({
    logo: './src/assets/favicon/favicon.png',
    prefix: 'favicons/',
    cache: true,
  }),
];
