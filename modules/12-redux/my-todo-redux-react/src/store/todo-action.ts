export interface CreateTodoAction {
  type: 'CREATE_TODO'
  payload: {
    id: number
    text: string
  }
}
