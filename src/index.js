const { Component } = React;

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			todos: [
			{
				value: '',
				completed: false,
			}
			],
			text: '',		
		};
		this.handleEnter = this.handleEnter.bind(this);
		this.updateValue = this.updateValue.bind(this);
	}

	handleEnter(ele) {
		if (ele.keyCode === 13 && ele.target.value !== '') {
			this.setState({
				count: this.state.count + 1,
				todos: this.state.todos.concsat([{
					value: this.state.text.trim(),
					completed : false,
				}])
			});
			this.updateValue('');
			console.log("enter on");
		}
	}

	updateValue(e){
		this.setState({
			value: e.target.value,
		});
	}


	render() {
		for(var i=0; i<this.state.todos.length;i+=1){
			if(!this.state.todos[i].completed){ this.setState({
				count: this.state.count+=1,
			});}
		}
		return(
			<section className="todoapp">
				<header className="header">
					<h1>todos</h1>
					<input class="new-todo" placeholder="What needs to be done?" autofocus
					onKeyPress = {this.handleEnter}
					onChange = {this.updateValue}
					value = {this.state.text}/>
					</header>
				<section class="main">
				<input className="toggle-all" type="checkbox"/>
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
				{this.state.todos.map((todo, index)=>(
					<TodoItem value = {todo.value}
								completed={todo.completed} />

					))
				}
				</ul>
				</section>
				<CountDisplay count = {this.state.count}/>
			</section>
		);

	}

}

class CountDisplay extends Component{
	render(){
		return(
      <footer className="footer">
        <span className="todo-count">{this.props.count} todos left.</span>
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
	}
}





class TodoItem extends Component {
	render(){
		return (
			<div className="view">
			<label>{this.props.Value }</label>
			</div>
		);
	}
}
ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);