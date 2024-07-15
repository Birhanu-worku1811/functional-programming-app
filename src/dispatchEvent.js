const { EventReducer } = require('./eventReducer');
const { logActions } = require('./logger');
const { dataStore, history, future } = require('./dataStore');

// Function to dispatch an event and update the dataStore
const dispatchEvent = (event) => {
    // Log the action
    logActions()(event);

    // Save the current state to history
    history.push({ ...dataStore });

    // Clear future history on new action
    future.length = 0;

    // Process the event and update dataStore
    const newDataStore = EventReducer(dataStore, event);
    Object.assign(dataStore, newDataStore);

    console.log('Updated dataStore:', dataStore);
};

module.exports = { dispatchEvent };
