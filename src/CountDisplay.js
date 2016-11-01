import React, { Component } from 'react';

class CountDisplay extends React.Component {
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
	render(){
		return (
      		<footer className="todo-count">
        	{this.DisplayLeft()}
      		</footer>
    	);
	};
}