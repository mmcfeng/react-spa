import express from 'express';
import React from 'react';
import cookieParser from 'cookie-parser';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
//  webpack热编译
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.js';
import routers from '../app/routers';

const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname + './../build'));
app.use(express.static(__dirname + './../statics'));
app.use(cookieParser())
app.set('views', __dirname + './../views');
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes : routers, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      const {version} = req.cookies;
      const markup = renderToString(<RouterContext {...renderProps} />);
      res.status(200).render('index', {markup});
    } else {
      res.status(404).send('Not found')
    }
  })
});
app.listen(3080, () => {
  console.log('Server running on port 3000');
});