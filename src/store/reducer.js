import { ADD_TODOS, SET_TODO_INPUT } from "./constants";

const initState = {
    todos: [],
    todoInput: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            }
        case ADD_TODOS:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            throw new Error('Invalid action')
    }
}

export { initState }
export default reducer;