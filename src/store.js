import { EventEmitter } from 'events';
import Dispatcher from './dispatcher';


class TodoStore extends EventEmitter {

    constructor(...arg) {
        super(...arg);

        this.Todo = [];

    }

    addChangeListener(callback) {
        this.on('CHANGED', callback)
    }

    removeChangeListener(callback) {
        this.removeListener('CHANGED', callback)
    }

    addTodo(text) {
        this.Todo.push(text)
    }

    deleteTodo(id) {
        delete this.Todo[id]
    }
}

let store = new TodoStore();

store.dispatchToken = Dispatcher.register((action) => {
    switch (action.actionType) {
        case 'ADD_TEXT':
            store.addTodo(action.text);
            store.emit('CHANGED');
            break;
        case 'DELETE_TEXT':
            store.deleteTodo(action.id);
            store.emit('CHANGED');
            break;
        default:
            break;
    };
})

export default store;

