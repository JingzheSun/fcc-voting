import React, {Component} from 'react';
import axios from 'axios';

export default class Board extends Component{
	constructor(props){
		super(props);
		this.state = {
			chart: ""
		}

		this.delete = this.delete.bind(this);
		this.update = this.update.bind(this);
	}

	delete(){
		axios.post('/delete',{pollId:this.props.info._id}).then((res)=>{
			this.props.upt(null);
		}).catch(err=>console.log(err))
	}

	update(e){
		e.preventDefault();
		axios.post('/update',{pollId:this.props.info._id, vote:this.vote.value}).then((res)=>{
			this.props.upt(this.props.info._id);
				
		}).catch(err=>console.log(err))	
	}
	chart(info){
		if($("svg")){
			$("svg").remove();
		}
		var pie = new d3pie("chart", 
		{
			header: {
				title: {
					text: "Vote for "+ info.title
				}
			},
			data: {
				content: info.options.map(obj => ({
					label: obj.opt, value: obj.cnt
				}))
			}
		})
		this.setState({chart: pie})
	}

	componentWillReceiveProps(a){
		this.chart(a.info);
	}

	componentDidMount(){
		this.chart(this.props.info);
	}

	render(){
		let p = this.props;
		return(
			<div>
				{/*<p>{JSON.stringify(p.info)}</p>*/}
				<p>Owner : {p.info.creatorName}</p>
				<form>
					<select className="form-control" ref={i => this.vote=i}>
						{p.info.options.map(obj => <option key={obj.opt} value={obj.opt}>{obj.opt}</option>)}
					</select>
					<input type="submit" value="Vote" className="btn btn-primary" onClick={this.update}/>
				</form>
				{p.login && (p.myName == p.info.creatorName) && <button className="btn btn-danger" onClick={this.delete}>Delete Poll</button>}
				<div id="chart" ref={i => this.chartDiv = i}></div>
			</div>
		)
	}
}