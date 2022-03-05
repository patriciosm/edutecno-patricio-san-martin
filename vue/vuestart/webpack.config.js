const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
    },
    module: {
        rules: [
            { test:/\.vue$/, use: 'vue-loader' },
            { test:/\.css$/, use: ['vue-style-loader' , 'css-loader' ] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new VueLoaderPlugin(),
    ]
}