import React, { Component } from 'react';
import addTextAction from '../actions/addTextAction'

class Todo extends Component {
	rememberText = () => 
	{addTextAction.addText(this.myText.value)}

  render() {
    return (
    	<div>
     <label> Please write text </label>
      <input type='text' ref={(input) => this.myText = input} />
      <input type='button' value='Add' onClick={this.rememberText} />
      
      </div>
    );
  }
}

export default Todo;
