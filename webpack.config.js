
module.exports = {
  entry:  './app/app.js',
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
    }
};