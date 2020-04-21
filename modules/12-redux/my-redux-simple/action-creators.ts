import { INCREMENT } from './action-types'
import { DECREMENT } from './action-types'
import { Action } from 'redux'

export function increment(): Action {
  return {
    type: INCREMENT
  }
}

export function decrement(): Action {
  return {
    type: DECREMENT
  }
}
