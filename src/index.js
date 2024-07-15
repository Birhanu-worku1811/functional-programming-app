const { dispatchEvent } = require('./dispatchEvent');
const { undoAction, redoAction } = require('./undoRedo');

// Example events to demonstrate the functionality
const addItemEvent = {
    type: 'ADD_ITEM',
    payload: { id: 1, name: 'Item 1' }
};

const removeItemEvent = {
    type: 'REMOVE_ITEM',
    payload: { id: 1 }
};

const userLoginEvent = {
    type: 'USER_LOGIN',
    payload: { id: 1, name: 'John Doe' }
};

const userLogoutEvent = {
    type: 'USER_LOGOUT'
};

// Dispatch events to update the dataStore
dispatchEvent(addItemEvent);
dispatchEvent(userLoginEvent);
dispatchEvent(removeItemEvent);
dispatchEvent(userLogoutEvent);

// Perform undo and redo actions
undoAction()();
redoAction()();
