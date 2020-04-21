import React, { useState, useReducer } from 'react'
import { Todo } from './todo'
import styles from './app.module.css'
import { bind } from '../utils/bind'

const cx = bind(styles)

type Action =
  | { type: 'ADD_TODO'; payload: { id: number; text: string } }
  | { type: 'DELETE_TODO'; payload: { id: number } }

const reducer = (todos: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      const todo: Todo = {
        completed: false,
        id: action.payload.id,
        text: action.payload.text
      }
      return [...todos, todo]
    case 'DELETE_TODO':
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo
      })
  }
}

export const App: React.FC = () => {
  const [todos, dispatch] = useReducer(reducer, [])

  const [todoText, setTodoText] = useState('')
  //const [setTodoText, dispatch] = useReducer(reducer, todoText)
  const isTodoDuplicated = todos.map(todo => todo.text).includes(todoText)

  const clearTodo = () => {
    setTodoText('')
  }

  return (
    <main>
      <ul>
        {todos.map(todo => (
          <li
            onClick={() => dispatch({ type: 'DELETE_TODO', payload: { id: todo.id } })}
            className={cx({ completed: todo.completed })}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <form
        onSubmit={event => {
          event.preventDefault()
          dispatch({
            type: 'ADD_TODO',
            payload: { id: Math.floor(Math.random() * 1000), text: todoText }
          })
          clearTodo()
        }}
      >
        <label>
          Todo
          <input value={todoText} onChange={event => setTodoText(event.target.value)} />
        </label>
        <button onClick={clearTodo}>Clear todo</button>
        <button type="submit" disabled={isTodoDuplicated}>
          Create todo
        </button>
      </form>
    </main>
  )
}
