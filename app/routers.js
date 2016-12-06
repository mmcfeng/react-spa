import  React from "react";
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './containers/App';
import Home from './containers/Home';
import ShopList from './containers/ShopList';
export default(
	<Route component={App} path="/" history={createBrowserHistory}>
	  <IndexRoute component={Home}/>
	  <Route path="/home" component={Home} />
		<Route path="/shoplist" component={ShopList} />
	</Route>
)