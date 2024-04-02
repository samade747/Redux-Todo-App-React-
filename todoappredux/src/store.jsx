// Importing createStore and applyMiddleware functions from Redux library
import { createStore, applyMiddleware } from "redux";  

import { thunk } from "redux-thunk";  
// Importing thunk middleware from redux-thunk library
// Note: There's a mistake here, it should be `import thunk from "redux-thunk";`

import { composeWithDevTools } from "@redux-devtools/extension"; 
// Importing composeWithDevTools function from Redux DevTools extension library

import taskReducer from "./reducers/taskReducer"; 
// Importing taskReducer from the specified file

import { createContext } from "react";  
// Importing createContext function from React library

// Creating a Redux store with the given parameters
const store = createStore(  
    taskReducer,  
    // Reducer function to manage state updates
    composeWithDevTools(applyMiddleware(thunk))  
    // Enhancing the store with middleware and DevTools
);

// Exporting the created Redux store as the default export of this module
export default store;  


