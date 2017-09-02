const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
import path from 'path'

module.exports = merge(common, {
  entry: {
    app: ['react-hot-loader/patch','webpack-hot-middleware/client?reload=true', path.resolve(__dirname,'../src/index.js')]
  },
  devtool: 'source-map',
  output:{
  	publicPath: '/'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
});