import React, {Component} from 'react';
import CardList from './cardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import './App.css';


class App extends Component {
	constructor() {
		super();
		this.state = {
			robots : [],
			searchField : ''
		};
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({robots:users})}); 
	}

	onSearchChange = (event) => {
		this.setState({searchField:event.target.value});
		

	};

	render() {
		const filteredrobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		return (
			<div className = 'tc'>
				<h1 className='App f1'> RoboFriends</h1>
				<SearchBox 	searchChange={this.onSearchChange}	/>
				<Scroll>
					<CardList robots={filteredrobots}/>
				</Scroll>
			</div>
			);
	}

}

export default App;