//  // Define an action creator function named addTask that takes a parameter 'data'
export const addTask = (data) => { 
    // return an object represting an action 
    return {
        type: 'ADD_TASK',  // Define the type of action as 'ADD_TASK'
        payload: { // Define the payload of the action
            id: new Date().getTime(),  
            // Generate a unique ID using the current timestamp      
            data
            // Assign the 'data' parameter to a property named 'data' in the payload
        }            
    }
}

export const deleteTask = (data) => {    // Define an action creator function named deleteTask that takes a parameter 'data'
    return {  // Return an object representing an action
        type: 'DELETE_TASK',  // Define the type of action as 'DELETE_TASK'
        payload: {  // Define the payload of the action
            id: data  // Assign the 'data' parameter to a property named 'id' in the payload
        }
    }
}





                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        