import React from 'react';
import axios from 'axios';
import Nav from './Nav.js';
import Board from './Board.js';
import Polls from './Polls.js';
import NewPoll from './NewPoll.js';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			login: false,
			showAll: true,
			polls:[],
			myName: "aaa",
			board: ""
		}
		
		this.upt(null);
		axios.post('/login',{}).then(res =>{
			this.setState({login: res.data.login, myName: res.data.name})
		}).catch(err => console.log(err));

		this.upt = this.upt.bind(this);
		this.addNew = this.addNew.bind(this);
		this.changeView = this.changeView.bind(this);
	}

	upt(pollId){
		var board = 0;
		axios.post('/',{}).then(res =>{
			if (pollId){
				for(var poll of res.data){
					if (poll._id == pollId){
						board = poll;
						break;
					}
				}
			}
			this.setState({polls: res.data, board: board || ""})
		}).catch(err => console.log(err));
	}

	select(i){
		this.setState(prev =>({
			board: prev.polls[i]
		}));
	}

	addNew(){
		this.setState({board:undefined});
	}

	changeView(tf){
		if(this.state.login){
			this.setState({showAll:tf, board: ""});
		} else {
			this.setState({board: ""});
		}
	}

	render(){
		let s = this.state;
		return (
			<div>
				<Nav changeView={this.changeView} login={s.login}/>
				<div className="container">
					{s.login && <p>Welcome {s.myName}</p>}
					<div className="container row">
						<div className="col-lg-3 col-md-3 col-sm-3 list-group">
							{s.polls.map((poll, i) => {
								if (s.login && !s.showAll){
									if(poll.creatorName == s.myName)
										return <Polls key={poll._id} info={poll} click={this.select.bind(this, i)}/>	
								}else{
									return <Polls key={poll._id} info={poll} click={this.select.bind(this, i)}/>
								}
							})}
							{s.login && <a className="list-group-item" id="addNew" onClick={this.addNew}><i className="fa fa-plus" aria-hidden="true"></i>Add New</a>}
						</div>
						<div className="col-lg-9 col-md-9 col-sm-9">
							{s.board ? <Board info={s.board} upt={this.upt} myName={s.myName} login={s.login}/>:
							!s.login ? "Visit as guest or login before creating polls":
							typeof s.board == 'string' ? "Welcome to FCC voting" :
							 <NewPoll/>
							}
						</div>
					</div>
				</div>
			</div>
		)
	}
}