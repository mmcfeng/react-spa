import React,{Component} from 'react'
import Toolbar from '../components/Toolbar'

class App extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return (
			<section className="page">
				{this.props.children}
			</section>
		)
	}
}
export default App;