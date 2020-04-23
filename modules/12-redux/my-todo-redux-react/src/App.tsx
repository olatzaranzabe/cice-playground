import React from 'react'
import './App.css'
import { AddTodo } from './AddTodo'

import { createStore } from 'redux'
import todoApp from './reducers'

const store = createStore(todoApp)

function App() {
  return (
    <div className="App">
      <AddTodo />
    </div>
  )
}

export default App
