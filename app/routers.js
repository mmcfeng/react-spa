import  React from "react";
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './containers/App';
import Home from './containers/Home';
import ShopList from './containers/ShopList';
export default (
	<Router history={browserHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Home}/>
    </Route>
    <Route path="/home" component={Home} />
    <Route path="/shoplist" component={ShopList} />
  </Router>
)