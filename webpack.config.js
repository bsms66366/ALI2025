import createExpoWebpackConfigAsync from '@expo/webpack-config/webpack';
import { Arguments, Environment } from '@expo/webpack-config/webpack/types';

const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const webpack = require('webpack');
module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync({
    ...env,
    babel: {
      dangerouslyAddModulePathsToTranspile: ['@niivue/niivue'],
    },
  }, argv);

  // Customize the config here

  return config;
};
