import Dispatcher from '../dispatcher'; 

export default {

deleteText(id) {
Dispatcher.dispatch({
actionType: 'DELETE_TEXT',
id: id
})
}
}
