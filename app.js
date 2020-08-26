import React, { Component } from 'react';
import { robots } from './robots';
import Cardsarray from './Cardsarray';
import Searchbox from './Searchbox'

class App extends Component {
	constructor(){
		super()
		this.state={
			robots:robots,
			searchfield: ''
		}
	}

	onSearchchange=(event)=>{
		this.setState({searchfield: event.target.value})
	}

	render(){	
			const filteredRobots= this.state.robots.filter(robot=>{
				return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return (
			<div className='tc'>
				<h1>Robofriends</h1>
				<Searchbox searchChange={this.onSearchchange}/>
				<Cardsarray robots = {filteredRobots}/>
			</div>

		);
	}	

}

export default App;