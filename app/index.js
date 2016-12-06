import  React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import routers from './routers';

import "../assets/css/base.style.css";

if (typeof window !== 'undefined') {
	window.onload = ()=>{
		ReactDOM.render(
		  <Router history={browserHistory} routes={routers}/>,
		  document.getElementById('appId')
		)
	}
};

