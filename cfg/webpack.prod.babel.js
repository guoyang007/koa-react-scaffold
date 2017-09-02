const webpack = require('webpack');
const merge = require('webpack-merge');
const BabiliPlugin = require("babili-webpack-plugin");
const common = require('./webpack.common.js');
import path from 'path'

module.exports = merge(common, {
	entry:{
		app:[path.resolve(__dirname,'../src/index.js')]
	},
  plugins: [
    new BabiliPlugin({
      removeConsole:true,
      removeDebugger:true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});