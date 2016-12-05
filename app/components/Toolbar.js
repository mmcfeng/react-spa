import React,{Component} from 'react'
import {Link} from 'react-router';

class Toolbar extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<nav className="bar bar-tab">
			  <Link className="tab-item external active" to="/home">
			    <span className="icon icon-home"></span>
			    <span className="tab-label">首页</span>
			  </Link>
			  <Link className="tab-item external" to={`/shoplist`}>
			    <span className="icon icon-me"></span>
			    <span className="tab-label">商家</span>
			    <span className="badge">2</span>
			  </Link>
			  <Link className="tab-item external" to={`/shoplist`}>
			    <span className="icon icon-star"></span>
			    <span className="tab-label">圈子</span>
			  </Link>
			  <Link className="tab-item external" to={`/shoplist`}>
			    <span className="icon icon-cart"></span>
			    <span className="tab-label">我的</span>
			  </Link>
			</nav>	
		)
	}
}

export default Toolbar;