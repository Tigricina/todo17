import Dispatcher from '../dispatcher'; 

export default {

logIn(user) {
Dispatcher.dispatch({
actionType: 'LOG_IN',
user: user
}); console.log(123, user)
}
}
