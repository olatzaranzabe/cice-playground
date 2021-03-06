import { createStore } from 'redux'
import { reducer } from './reducer'
import { increment, decrement } from './action-creators'

const store = createStore(reducer)

document.querySelector('#button')?.addEventListener('click', () => {
  store.dispatch(increment())
})

store.subscribe(() => {
  const counter = document.querySelector('#counter')
  if (counter !== null) {
    counter.innerHTML = store.getState().toString()
  }
})

document.querySelector('#decrement-button')?.addEventListener('click', () => {
  store.dispatch(decrement())
})
