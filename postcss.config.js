const cssnanoPlugin = require('cssnano');
const presetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [presetEnv(), cssnanoPlugin()],
  syntax: 'postcss-scss',
};
