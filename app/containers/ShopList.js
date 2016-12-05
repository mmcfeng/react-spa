import React,{Component} from 'react'
import Swiper from '../components/Swiper';
import Toolbar from '../components/Toolbar';

export default class ShopList extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		debugger;
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