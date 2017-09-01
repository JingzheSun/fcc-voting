import React from 'react';
import R from 'ramda';

export default class NewPoll extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			numberOfOptions: 1
		}
		this.addOption = this.addOption.bind(this);
	}
	addOption(){
		this.setState(prev => ({
			numberOfOptions: prev.numberOfOptions + 1
		}))
	}

	render(){
		return(
			<div>
				<h2>Create a new voting poll</h2>
				<form method="POST" action="newPoll">
					Title : <input type="text" name="title" className="form-control" placeholder="Poll title"/>
					<br/>
					Options : 
					{
						R.map(i => 
							<div key={i}>
								<input className="form-control" type="text" name={"opt"+i} required/>
							</div>,
							R.range(0, this.state.numberOfOptions)
						)
					}
					<a onClick={this.addOption} href="#">+Add option</a>
					<input className="btn btn-success" type="submit" value="Create"/>
				</form>
			</div>
		)
	}
}