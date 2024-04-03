 // Importing the useRef hook from React library
import { useRef } from "react";

import { addTask, deleteTask } from "./actions/actions";
import { useDispatch, useSelector } from "react-redux";

// Defining a functional component named Task
export const Task = () => {
     // Initializing a variable with the dispatch function provided by Redux   
    const dispatch = useDispatch()   
     // Extracting tasks from the Redux store state using useSelector hook
     const tasks = useSelector((state) => state.tasks);
     // Creating a reference to access the input element in the DOM
     const inputRef = useRef(null);

     console.log( tasks, "===> tasks");

     // Defining a function add a new task
     const addNewTask = () => {
        console.log("adding a value")
        const task = inputRef.current.value.trim();
        // Getting the value of the input field and removing leading/trailing spaces
        console.log(task, "===> task")
        // Dispatching an action to add a new task to the Redux store
        dispatch(addTask(task));

     }

     // Defining a function to handle task deletion
     const deleteHandler = (taskId) => {
        dispatch(deleteTask(taskId))
     }
     
    return (
        <div className="task-comonent">
            <div className="add-task">
                <input
                 type="text" 
                 placeholder=" add task "
                 ref={inputRef}
                 className="taskInput"
                 />
                 <button onClick={addNewTask}>Add task</button>
            </div>
        {
         tasks.map((task) => (
            <>
                <h1>{task.data}</h1>
                <button onClick={()=> deleteHandler(task.id)}>Delete</button>
            </>
         ))         
        }
        </div>
    )
}
