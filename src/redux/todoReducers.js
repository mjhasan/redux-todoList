import { ADD_TODO, DELETE_TODO } from "./todoActions";

const initialState = {
    todo: []
}

const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { todo: [...state.todo, action.newTodo] }
        case DELETE_TODO:
            const newTodo = state.todo.filter(element => element.id !== action.id)
            return { todo: newTodo }

        default:
            return state
    }
}

export default todoReducers;