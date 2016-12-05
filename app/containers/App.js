import React,{Component} from 'react'
import Toolbar from '../components/Toolbar'

class App extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		$.init();
		debugger;
	}
	render(){
		return (
			<section>
				{this.props.children}
			</section>
		)
	}
}
export default App;