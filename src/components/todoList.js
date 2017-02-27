import TodoStore from '../store';
import React, { Component } from 'react';
import deleteTextAction from '../actions/deleteTextAction';
import AuthStore from '../authStore';


class TodoList extends Component {
	componentWillMount() {

		this.state = {
			todoState: TodoStore.Todo,
			authState: AuthStore.Auth,
			user: AuthStore.user
		};
	}

	componentDidMount() {
		TodoStore.addChangeListener(this.onChange);
		AuthStore.addChangeListener(this.onChange);
	}

	componentWillUnmount() {
		TodoStore.removeChangeListener(this.onChange);
		AuthStore.removeChangeListener(this.onChange);
	}

	onChange = () => {
		this.setState({
			todoState: TodoStore.Todo,
			authState: AuthStore.Auth,
			user: AuthStore.user
		})
	}

	getTodoListByUser = (user) => {
		var returnObj = JSON.parse(localStorage.getItem(user));
		var TodoList = user.todoList
	}

	removeText = (event) =>
	{ deleteTextAction.deleteText(this.state.todoState.indexOf(event.target.id)) }


	renderTodoListItem = (item) => {
		return (
			<li key={item} > {item} <input id={item} type='button' value='X' onClick={this.removeText} /> </li>)
	}
	
 

	render() {
		return (


			<ul>{this.state.todoState.map((item) => this.renderTodoListItem(item))}</ul>



		)
	}
}

export default TodoList;
