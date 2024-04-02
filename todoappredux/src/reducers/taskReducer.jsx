// Define a constant variable named initialState with an object containing an empty array under the key 'tasks'
const intitialState = {
     // Initialize the 'tasks' property with an empty array
    tasks: []
};

// Define a reducer function named taskReducer with parameters 'state' and 'action'
const taskReducer = (state = intitialState, action) => {
    // Begin a switch statement based on the type of action
    switch (action.type) {
        case 'ADD_TASK': // if action type is Add task
           return { // return a new state object
               ...state, // spread the current state
               tasks: [...state.tasks, action.payload] // add the new task to the 'tasks' array
           } 
        case 'DELETE_TASK': // if action type is Delete task
           return { // return a new state object
            ...state, // spread the current state
            tasks: state.tasks.filter(task => task.id !== action.payload.id) // filter the 'tasks' array to remove the task with the matching ID
           };
        default: // if action type is not Add task or Delete task
            return state; // return the current state
    }
}


export default taskReducer; // Export the taskReducer function