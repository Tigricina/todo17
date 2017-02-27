import React, { Component } from 'react';
import Todo from './components/todo';
import TodoList from './components/todoList';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <h2>Create Your own Todo List</h2>
        </div>
        <p className="App-intro">
          Add items

        </p>
        <Todo />
        <TodoList />
      </div>
    );
  }
}

export default App;
