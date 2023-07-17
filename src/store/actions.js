import { ADD_TODOS, SET_TODO_INPUT } from "./constants";

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodos = payload => ({
    type: ADD_TODOS,
    payload
})