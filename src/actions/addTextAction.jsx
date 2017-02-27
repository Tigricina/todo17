import Dispatcher from '../dispatcher';

export default {

    addText(text) {
        Dispatcher.dispatch({
            actionType: 'ADD_TEXT',
            text: text
        })
    }
}
