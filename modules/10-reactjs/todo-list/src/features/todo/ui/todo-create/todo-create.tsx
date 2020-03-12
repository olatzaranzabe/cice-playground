import React, { useState } from 'react'
import { Button } from '../../../../core/components/button/button'
<<<<<<< HEAD
import { Todo } from '../../domain/todo';

interface Props {
  onCreate(todoText: string): void
  todos:Todo[]
=======
import { Todo } from '../../domain/todo'

interface Props {
  onCreate(todoText: string): void
  todos: Todo[]
>>>>>>> bbf40811791f4f489840d8d07e56412461430ead
}

export const TodoCreate: React.FunctionComponent<Props> = ({ onCreate, todos }) => {
  const [todoText, setTodoText] = useState('')
<<<<<<< HEAD
  
=======
  const isTodoDuplicated = todos.map(todo => todo.text).includes(todoText)

>>>>>>> bbf40811791f4f489840d8d07e56412461430ead
  const clearTodo = () => setTodoText('')
  todos.map( todo=> todo.text === todoText)
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onCreate(todoText)
        clearTodo()
      }}
    >
      <label>
        Todo
        <input value={todoText} onChange={event => setTodoText(event.target.value)} />
      </label>
      <Button onClick={clearTodo}>Clear todo</Button>
      <Button theme={'primary'} submit isDisabled={isTodoDuplicated}>
        Create todo
      </Button>
    </form>
  )
}
