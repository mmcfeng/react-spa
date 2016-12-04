var webpack = require('webpack');
module.exports = {
  entry:  {
    app : './app/index.js',
    lib : ['react','react-dom']
  },
  output: {
    path:     './build',
    filename: 'app.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      }
    ]
  },
  resolve:{
    extensions:['','.js','.json']
  },
  plugins: [
    new  webpack.optimize.CommonsChunkPlugin('lib', 'lib.min.js')
  ]
};