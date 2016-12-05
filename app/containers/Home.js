import React from 'react';
import Toolbar from '../components/Toolbar';
class Home extends React.Component{
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