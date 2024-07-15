# Functional Programming App

This project is a simple demonstration of functional programming principles in JavaScript. It uses an immutable data store, pure functions, function composition, and curried functions to manage application state. The project also includes logging, undo, and redo functionalities.

## Features

- **Immutable Data Store**: Uses `Immer` to enforce immutability.
- **Event Reducer**: Handles different types of events to update the data store.
- **Dispatch Event**: Dispatches events to update the data store.
- **Logging**: Logs every action dispatched to the console.
- **Undo/Redo**: Supports undoing and redoing the last action.

## Setup

### Prerequisites

- Node.js (v18.19.1 or later)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/functional-programming-app.git
    cd functional-programming-app
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

### Running the Application

To run the application, execute the following command:

```sh
node src/index.js
