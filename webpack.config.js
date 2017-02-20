var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: { presets:['react']}},
      {test: /\.scss$/, loaders: ExtractTextPlugin.extract('css-loader!sass-loader')},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true })
  ]
};
