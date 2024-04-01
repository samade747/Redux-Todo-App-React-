export const addTask = (data) => {
    return {
        type: 'ADD_TASK',
        payload: {
            id: new Date().getTime(),        }
            data
    }
}

export const deleteTask = (data) => {
    return {
        type: 'DELETE_TASK',
        payload: {
            id: data
        }
    }

}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        