const { Component } = React;

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			todos: [],
		};
		this.handleEnter = this.handleEnter.bind(this);
		this.contentUpdate = this.contentUpdate.bind(this);
	}
	handleEnter(ele) {
		if (ele.keyCode === 13 && ele.target.value !== '') {
			const newTodos = this.state.todos.slice();
			newTodos.push(ele.target.value);
			this.setState({
				count: this.state.count + 1,
				todos: newTodos,
			});
			console.log("enter on");
		}
	}

	render() {
		return(
			<div>
				<input className="new-todo" placeholder="What needs to be done?" autofocus>
				
					for(var i=0;i<this.state.todos.length; i+=1){
						<ul className="todo-list">
							<span>this.state.todos[i]</span>
						</ul>
					}
				
			</div>
		);

	}

}

const CountDisplay = ({num}) => (
	<div className="todoRemain">
		if(num === 1){
			<p><span className = "count">{num}</span><br />item left</p>
		}
		else{
			<p><span className = "count">{num}</span><br />items left</p>
		}
	</div>
);

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.completed = false;
	}
}