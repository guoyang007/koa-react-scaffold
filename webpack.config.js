const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const srcPath = path.join(__dirname, './src');

module.exports = {
    entry: {
        home:[
            'webpack-hot-middleware/client?reload=true',
            './src/pages/home/home.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/assets/', //server上资源的路径
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx'] // 配置简写，配置过后，书写该文件路径的时候可以省略文件后缀
    },
    module: {
        loaders: [
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }, {
                test: /\.js$/,
                include: srcPath,
                loader: 'babel-loader?presets[]=es2015&cacheDirectory=true'
            },
            { test: /\.html$/, loader: "art-template-loader" },
            { test: /\.(woff|woff2|eot|ttf|otf)$/i, loader: 'url-loader?limit=8192&name=[name].[ext]' },
            { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=8192&name=[name].[ext]' }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     filename:'views/index.html',
        //     template:'./src/pages/home/home.html',
        //     inject:false
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
