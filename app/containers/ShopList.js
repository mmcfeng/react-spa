import React from 'react';
import Swiper from '../components/Swiper';
import Toolbar from '../components/Toolbar';

export default class ShopList extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<section className="page">
				<Swiper />
				<Toolbar />
			</section>
		)
	}
}