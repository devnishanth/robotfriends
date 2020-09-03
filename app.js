import React, { Component } from 'react';
import { robots } from './robots';
import Cardsarray from './Cardsarray';
import Searchbox from './Searchbox'
import './app.css'
import Scroll from './scroll'

class App extends Component {
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>this.setState({robots:users}))

	}

	onSearchchange=(event)=>{
		this.setState({searchfield: event.target.value})
	}

	render(){	
			const filteredRobots= this.state.robots.filter(robot=>{
				return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
			if(this.state.robots.length === 0){
				return <h1>Loading</h1>
			}
			else{
				return (
					<div className='tc'>
						<h1 className='f1'>Robofriends</h1>
						<Searchbox searchChange={this.onSearchchange}/>
						<Scroll>
							<Cardsarray robots = {filteredRobots}/>
						</Scroll>
					</div>

				);
			}	
	}		

}

export default App;