const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    cache: true,
    resolve: {
        extensions: ['.jsx', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html')
        })
    ],
    output: {
        filename: '[name].bundle.[hash].js',
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
            { test: /\.(woff|woff2|eot|ttf|otf)$/i,
              use: ['url-loader?limit=8192&name=[hash:8].[name].[ext]','image-webpack-loader'] },
            { test: /\.(jpe?g|png|gif|svg)$/i,
              use: ['url-loader?limit=8192&name=[hash:8].[name].[ext]','image-webpack-loader'] }
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
