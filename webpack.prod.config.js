// var HtmlWebpackPlugin = require('html-webpack-plugin')
// var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: __dirname + '/app/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: { presets:['es2015','react']}},
      {test: /\.scss$/, loaders: ExtractTextPlugin.extract('css-loader!sass-loader')},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  plugins: [
    // HTMLWebpackPluginConfig,
    new ExtractTextPlugin({ filename: 'index_bundle.css', disable: false, allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    })

  ]
};
