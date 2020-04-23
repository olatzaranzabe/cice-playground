import { combineReducers } from 'redux'
import { ADD_TODO } from './actions'

function todoApp(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default todoApp
