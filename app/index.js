import  React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import {Routers} from './routers'
console.log('dddddddd',routers);
ReactDOM.render(
  <Routers />,
  document.getElementById('appId')
);
