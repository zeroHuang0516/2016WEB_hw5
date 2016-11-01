const { Component } = React;

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

	DisplayLeft(){
  		var count;
  		for(var i=0;i<this.props.todos.length;i+=1){
    		if(this.props.todos[i].completed){
      			count+=1;
    		}
  		}	
  		if(count !== 1) {
    		return <span>{count} items left</span>;
  		}else if(count === 1) {
    		return <span>1 item left</span>;
  		}else{
    		return <span>NO items</span>;
  		}
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


class CountDisplay extends React.Component {
	render(){
		return (
      		<footer className="todo-count">
        	{this.props.DisplayLeft()}
      		</footer>
    	);
	};
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));