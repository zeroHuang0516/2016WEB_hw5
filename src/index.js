import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem.js';
import CountDisplay from './CountDisplay.js'

import './todo.css';


class TodoApp extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			todos: [
			  {
			    value: '',
			    completed: false,
			  },
			],
			text: '',		
		};
		this.updateValue = this.updateValue.bind(this);
		this.handleEnter = this.handleEnter.bind(this);
		this.Destroy = this.Destroy.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.DisplayLeft = this.DisplayLeft.bind(this);
		this.DisplaytodoItem = this.DisplaytodoItem.bind(this);
	}

	updateValue(e){
		this.setState({
			text: e.target.value
		});
	}

	handleEnter(ele){
		if (ele.keyCode === 13 && this.state.text.trim() !== '') {
			this.setState({
				todos: [
				  { value: this.state.text,
					completed : false},
					...todos,
				],
				text:'',
			});
			console.log("enter on");
		};
	}

	Destroy(idx){
		this.setState({
			todos: this.state.todos.splice(idx, 1)
		});
	}

	handleClick(idx){
		var tmptodos = [...this.state.todos];
		tmptodos[idx].completed = !tmptodos[idx].completed;
		this.setState({ todos: tmptodos });
	}

	

	DisplaytodoItem(lists, idx){
		return(
		<TodoItem 
			onCheckClick={()=> this.handleClick(idx)}
			onCancel={() => this.Destroy(idx)}
			content={lists["value"]}
			completed={lists["completed"]}
			key={idx}
			/>
		);
	}

	render() {
		var{todos, text} = this.state;
		return (
			 <section className="todoapp">
				<header className="header">
					<h1>todos</h1>
				<input className="new-todo"
					   value = {text}
					   onChange = {this.updateValue}
					   onKeyDown = {this.handleEnter} 
						placeholder="What needs to be done?" 
						autofocus/>
				</header>
				<ul class="todo-list">
				  {todos.map((list,idx) => this.DisplaytodoItem(list,idx))}
				</ul>
				<CountDisplay />
			</section>
		);
	}
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));