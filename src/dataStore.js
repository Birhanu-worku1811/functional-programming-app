// Initial state of the dataStore
let dataStore = {
    items: [],
    user: null
};

// Arrays to keep track of the history for undo and redo functionality
let history = [];
let future = [];

module.exports = { dataStore, history, future };
