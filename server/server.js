import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routers from '../app/routers';

const app = express();

app.use(express.static(__dirname + './../build'));

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