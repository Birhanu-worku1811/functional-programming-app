const { produce } = require('immer');

// EventReducer function to handle different types of events
const EventReducer = (dataStore, event) => {
    switch (event.type) {
        case 'ADD_ITEM':
            // Add an item to the items array
            return produce(dataStore, draft => {
                draft.items.push(event.payload);
            });
        case 'REMOVE_ITEM':
            // Remove an item from the items array
            return produce(dataStore, draft => {
                const index = draft.items.findIndex(item => item.id === event.payload.id);
                if (index !== -1) {
                    draft.items.splice(index, 1);
                }
            });
        case 'USER_LOGIN':
            // Update the user object with the logged-in user's details
            return produce(dataStore, draft => {
                draft.user = event.payload;
            });
        case 'USER_LOGOUT':
            // Set the user object to null
            return produce(dataStore, draft => {
                draft.user = null;
            });
        default:
            // Return the current state for unrecognized event types
            return dataStore;
    }
};

module.exports = { EventReducer };
