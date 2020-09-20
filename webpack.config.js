const path = require('path');
const Webpack = require('webpack');

// Placeholders
/**
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
 */

module.exports = {
    mode: 'development',
    entry: { first: './src/app.js'},
    output: { 
        path: path.resolve(__dirname, 'build'),
        filename: 'js/build.js', // js/1.js js/2.js js/3.js js/4.js
        publicPath: '/assests/', // server.com/assests/js/1.js
        libraryTarget: 'umd', // commonjs amd js
        library: 'anuragLib'
    },
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'dist'),
        // writeToDisk: true
    },
    plugins: [new Webpack.HotModuleReplacementPlugin()]
}