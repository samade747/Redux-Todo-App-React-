 // Import the taskReducer from the file taskReducer.js
import taskReducer from './taskReducer'
// Import the combineReducers function from the redux library
import { combineReducers } from 'redux'

// Define a variable named rootReducer which is the result of combining reducers
const rootReducer = combineReducers({
   tasks: taskReducer 
   // Create a key-value pair where the key is 'tasks' and the value is the taskReducer
});


export default rootReducer;