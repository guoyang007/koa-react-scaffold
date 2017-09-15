const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    cache: true,
    resolve: {
        extensions: ['.jsx', '.js']
    },
    output: {
        filename: '[name].bundle.[chunkhash].js',
        path: path.resolve(__dirname, '../public')
    },
    module: {
        rules: [
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: 'babel-loader?cacheDirectory=true'
            },
            { test: /\.(woff|woff2|eot|ttf|otf)$/i, use: ['url-loader?limit=8192&name=[name].[ext]'] },
            { test: /\.(jpe?g|png|gif|svg)$/i, use: ['url-loader?limit=8192&name=[name].[ext]'] }
        ]
    },
    plugins:[
        new webpack.optimize.ModuleConcatenationPlugin(),
    	new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: require('../public/vendors-manifest.json')
        }),
        new AddAssetHtmlPlugin({
            includeSourcemap:false,
            filepath: path.resolve(__dirname,'../public/vendors.dll.*.js'),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../src/index.html')
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ]

};
