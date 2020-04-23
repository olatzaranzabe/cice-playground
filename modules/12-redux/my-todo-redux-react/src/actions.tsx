export const ADD_TODO = 'ADD_TODO'

export function addTodo(text: any) {
  return {
    type: ADD_TODO,
    text
  }
}
