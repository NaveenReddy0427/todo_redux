export const ADD_TODO = "AddTodo"
export const TOGGLE_TODO = "Toggle Todo"

export const addTodo = (text)=>({type:ADD_TODO, text})
export const toggleTodo = (index)=>({type:TOGGLE_TODO, index})


