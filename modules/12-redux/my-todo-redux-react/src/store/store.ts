import { Action, createStore } from 'redux'


interface Todo {
  id: number
  completed: boolean
  text: 
}

interface State {
  todos: Todo[]
}

const initialState =
function rootReducer(state: State = initialState, action: Action ): State {

}

export const store = createStore(rootReducer)