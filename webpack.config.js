var webpack = require('webpack');
module.exports = {
  entry:  {
    app : './app/app.js',
    lib : ['react','react-dom']
  },
  output: {
      path:     './build',
      filename: 'app.min.js',
  },
  module: {
    loaders: [
      {
          test:   /\.js/,
          loader: 'babel',
          exclude: 'node_modules'
      }
    ],
  },
  plugins: [
    new  webpack.optimize.CommonsChunkPlugin('lib.min.js', ['lib'])
  ]
};