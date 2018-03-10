import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class Counter extends Component {
	constructor(props){
		super(props);
		this.state={
			count:1
		};
	}
	
	increment(){
		//let count=this.state.count;
		//this.setState({count:count});
		let {count}=this.state;
		count++;
		this.setState({count});
	}
	decrement(){
		let {count}=this.state;
		count--;
		this.setState({count});
	}
	
    render() {
		
        return ( 
		<div>
		    <p>{this.state.count}</p>
		    <button onClick={this.increment.bind(this)}>+</button>
			 <button onClick={this.decrement.bind(this)}>-</button>
		    <input placeholder="text"/>
		</div>
        );
    }
}

export default Counter;