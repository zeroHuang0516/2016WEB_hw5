import React, { Component } from 'react';

class TodoItem extends React.Component {
	render(){
		const {completed} =this.props;
		return (
			 <li className={completed? "done" : ""}>
			   <input className="toggle" 
			   		  type="checkbox"
			   		  checked={completed}
			   		  onChange={(e) => this.props.handleClick()}/>
			   <label>{this.props.content}</label>
			   <button className="delete"
			   			onChange={(e)=>this.props.Destroy()}></button>
			 </li>
		);
	}
}	