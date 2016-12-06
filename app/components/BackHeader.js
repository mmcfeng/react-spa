import React,{Component} from 'react'

export default class BackHeader extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<section className="component">
				<header className="bar bar-nav backheader">
				  <a className="icon icon-left pull-left"></a>
				  <a className="icon icon-refresh pull-right"></a>
				  <h1 className="title">哈哈哈哈</h1>
				</header>
			</section>
		)
	}
}