import React from 'react';
import Toolbar from '../components/Toolbar'

class App extends React.Component{
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
export default App;