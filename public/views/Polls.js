import React from 'react';

export default class Polls extends React.Component{
	render(){
		return (
			<a className="list-group-item" onClick={this.props.click}>{this.props.info.title}</a>
		)
	}
}