import { Todo } from '../../domain/todo'

type TodoPayload = Pick<Todo, 'id' | 'text'>

export interface CreateTodoAction {
  type: 'CREATE_TODO'
  payload: TodoPayload
}

interface EditTodoAction {
  type: 'EDIT_TODO'
  payload: TodoPayload
}

export const createTodo = (payload: CreateTodoPayload): CreateTodoAction => {
  return {
    type: 'CREATE_TODO',
    payload
  }
}

export type TodoAction = CreateTodoAction
