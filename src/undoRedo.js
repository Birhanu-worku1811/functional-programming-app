const { dataStore, history, future } = require('./dataStore');

// Function to undo the last action
const undoAction = () => () => {
    if (history.length > 0) {
        // Save the current state to future history
        future.push({ ...dataStore });
        // Restore the last state from history
        const lastState = history.pop();
        Object.assign(dataStore, lastState);
        console.log('Undo performed, new dataStore:', dataStore);
    } else {
        console.log('No actions to undo');
    }
};

// Function to redo the last undone action
const redoAction = () => () => {
    if (future.length > 0) {
        // Save the current state to history
        history.push({ ...dataStore });
        // Restore the next state from future history
        const nextState = future.pop();
        Object.assign(dataStore, nextState);
        console.log('Redo performed, new dataStore:', dataStore);
    } else {
        console.log('No actions to redo');
    }
};

module.exports = { undoAction, redoAction };
