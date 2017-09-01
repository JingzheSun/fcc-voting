import React from 'react';

export default class Nav extends React.Component{
	showAll(){
		this.props.changeView(true);
	}

	showMine(){
		this.props.changeView(false);
	}

	render(){
		return(
			<nav className="navbar navbar-default" role="navigation">
			    <div className="container-fluid">
				    <div className="navbar-header">
				        <a className="navbar-brand">FCC-VOTING</a>
				    </div>
				    <div>
				        <ul className="nav navbar-nav navbar-right">
				            <li><a onClick={this.showAll.bind(this)}>All Polls</a></li>
				            <li><a onClick={this.showMine.bind(this)}>My Polls</a></li>
				            <li><a href={this.props.login?"logout":"login"}>{this.props.login? "Logout" : "Login"}</a></li>
				        </ul>
				    </div>
			    </div>
			</nav>
		)
	}
}