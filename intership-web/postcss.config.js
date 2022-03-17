module.exports = () => {
  const config = {
    parser: 'postcss-safe-parser',
    plugins: {
      // from up to bottom direction
      'postcss-normalize': {},
      'postcss-import': {},
      'postcss-simple-vars': {},
      'postcss-css-variables': {},
      'postcss-mixins': {},
      precss: {},
    },
  };
  if (process.env.NODE_ENV === 'production') {
    config.plugins = { ...config.plugins, cssnano: {} };
  }
  return config;
};
