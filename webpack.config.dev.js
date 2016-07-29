const webpack = require('webpack');
const baseConfig = require('./webpack.config.base.js');
const path = require('path');
const NpmInstallPlugin = require('npm-install-webpack-plugin');


const config = Object.create(baseConfig);
config.devtool = 'eval-source-map';
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new NpmInstallPlugin({
    save: true
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    '_': 'underscore',
    Backbone: 'backbone',
    Marionette: 'backbone.marionette'
  })
];

config.output = {
  path: path.resolve(__dirname, 'public'),
  filename: 'webpack-marionette-starter.js'
},

module.exports = config;
