import React,{Component} from 'react'
import BackHeader from '../components/BackHeader';
import Toolbar from '../components/Toolbar';
class Home extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<section>
				<BackHeader />
				<p></p>
				<Toolbar />
			</section>
		)
	}
}
export default Home;