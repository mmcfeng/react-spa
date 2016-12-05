import React from 'react';

export default class BackHeader extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<header class="bar bar-nav">
			  <a class="icon icon-left pull-left"></a>
			  <a class="icon icon-refresh pull-right"></a>
			  <h1 class="title">标题</h1>
			</header>
		)
	}
}