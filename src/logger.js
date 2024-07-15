// Curried function to log actions
const logActions = () => (event) => {
    console.log('Event dispatched:', event);
};

module.exports = { logActions };
