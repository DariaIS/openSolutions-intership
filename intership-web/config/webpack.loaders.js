const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const isDev = process.env.NODE_ENV === 'development';

const JsTsLoader = {
  test: /\.(j|t)sx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
    },
    {
      loader: 'ts-loader',
    },
    // from bottom to top
    // ts-loader need to typechecking and babel use browserlist
  ],
};

const fileLoader = {
  test: /\.(wav|webm|mp3|woff|woff2|ttf|eot|png|jpe?g|gif|ico)(\?.*)?$/i,
  type: 'asset',
  parser: {
    dataUrlCondition: {
      maxSize: 4 * 1024, // 4kb
    },
  },
};

const svgUrlLoader = {
  test: /\.(svg)(\?.*)?$/i,
  type: 'asset',
  issuer: /\.s?css?$/,
  parser: {
    dataUrlCondition: {
      maxSize: 4 * 1024, // 4kb
    },
  },
};

const svgXmlLoader = {
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: ['@svgr/webpack', 'url-loader'],
};

const getStyleLoader = (isModule = false) => ({
  test: isModule ? /\.module\.s?css$/ : /\.s?css$/,
  exclude: !isModule ? /\.module\.s?css$/ : () => {},
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        sourceMap: true,
        modules: isModule
          ? {
              getLocalIdent: getCSSModuleLocalIdent,
            }
          : false,
      },
    },
    'postcss-loader',
  ],
});

const styleLoader = getStyleLoader();

const styleModuleLoader = getStyleLoader(true);

// with svg maybe not the best loaders
module.exports = [
  JsTsLoader,
  styleModuleLoader,
  styleLoader,
  svgXmlLoader,
  svgUrlLoader,
  fileLoader,
];
