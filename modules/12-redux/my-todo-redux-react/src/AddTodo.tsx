import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions'

export const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log(e)
          dispatch(addTodo(e.target))
        }}
      >
        <input ref={node => (input = node)} />
        <button>Add Todo</button>
      </form>
    </div>
  )
}
