import React from 'react';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			login: false,
			vote:['xxx','yyy'],
		}
	}

	render(){
		return (
			<div>
				{this.state.vote}
			</div>)
	}
}