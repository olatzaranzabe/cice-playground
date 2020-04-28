import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../application/store/store'
import { editTodo } from '../application/todo/todo-action'

export const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todoReducer.todos)
  //const [todos, setTodos] = useState()
  const [edit, setEdit] = useState(false)

  const handleRemoveItem = (e: any) => {
    //setTodos(todos.slice(todos.indexOf(e.target.name, 1)))
  }

  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const [changeText, setChangeText] = useState('')
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <div>
          <li key={id}>{text}</li>
          <button onClick={handleRemoveItem}>delete</button>
          {/* <button onClick={() => setEdit(true)}>edit</button> */}
          <button onClick={() => setChangeText(!changeText)}>✏edit</button>
          {changeText && (
            <>
              <input type="text" onChange={event => setValue(event.target.value)} value={value} />
              <button onClick={() => dispatch(editTodo({ id, text: value }))}>✅</button>
            </>
          )}
        </div>
      ))}
    </ul>
  )
}
