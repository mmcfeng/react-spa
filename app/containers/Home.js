import React,{Component} from 'react'
import Toolbar from '../components/Toolbar';
class Home extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return (
			<section>
				<p>main page</p>
				<Toolbar />
			</section>
		)
	}
}
export default Home;