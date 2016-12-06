var webpack = require('webpack');
var Clean = require("clean-webpack-plugin");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry:  {
    app : [
      'webpack-hot-middleware/client?noInfo=false&quiet=false&reload=true',
      './app/index.js'
    ],
    lib : ['react','react-dom','react-router']
  },
  output: {
    path: path.join(__dirname,'/build'),
    filename: 'app.min.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      }
    ]
  },
  resolve:{
    extensions:['','.js','.json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new  webpack.optimize.CommonsChunkPlugin('lib', 'lib.min.js'),
    new ExtractTextPlugin("css/styles.css",{allChunks:true})
  ]
};