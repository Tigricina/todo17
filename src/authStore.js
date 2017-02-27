    import {EventEmitter} from 'events';
    import Dispatcher from './dispatcher';
    

    class AuthStore extends EventEmitter {

    constructor(...arg) {
    super(...arg);
    this.Auth = false;
    this.user = null;
    
    }

    addChangeListener(callback) {
    this.on('CHANGED', callback)
    }

    removeChangeListener(callback) {
    this.removeListener('CHANGED', callback)
    }
    
    LogIn(user) {
    this.Auth = true;
    this.user = user;
    console.log(67, user)
    }

    LogOut() {
    this.Auth = false;
    this.user = null
    }
 }
   
    let store = new AuthStore();

    store.dispatchToken = Dispatcher.register((action) => {
    switch(action.actionType) {
    case 'LOG_IN':
    store.LogIn(action.user);
    store.emit('CHANGED');
    break;
    case 'LOG_OUT':
    store.LogOut();
    store.emit('CHANGED');
    break;
    default:
    break;
    };
    })

    export default store;

