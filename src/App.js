import React, { Component } from 'react'
import { connect } from 'react-redux'


class App extends Component {

	inputPress(e){
		this.props.onInputPress(this.searchInput.value)
	}

	addToFavorites(){
	 this.props.onAddToFavorites(this.searchInput.value)
	}

	render() {
		return (
			<div className="App">
			<h1>ACTIVE ITEM: {}</h1>
				<input autoFocus onClick={this.inputPress.bind(this)} ref={(input) => {this.searchInput = input}} />
				<ul>
					{
						this.props.album.map((item, index) => <li key={index}>{item.item}</li>)
					}
				</ul>
				<button onClick={this.addToFavorites.bind(this)}>ADD TO FAVORITES</button>
				{
					this.props.favorites.map((item, index) => <li key={index}>{item.item}</li>)
				}
			</div>
		);
	}
}

export default connect(
	state => ({
		album: state.album,
		favorites: state.favorites
	}),
	
	dispatch => ({
		onInputPress: (name) => {
			let payload = {
				id: Date.now().toString(),
				item: name
			};
		 dispatch({ type: 'SEARCH_ALBUM', payload}) 
		},

		onAddToFavorites: (name) => {
			let payload = {
				id: Date.now().toString(),
				item: name
			};
		 dispatch({ type: 'ADD_FAVORITES', payload}) 
		}
	})
)(App)