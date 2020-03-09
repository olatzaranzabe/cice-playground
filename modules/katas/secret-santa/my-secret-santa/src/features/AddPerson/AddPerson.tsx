import React, { useState } from 'react'


interface Props {
  onCreate(addName: string): void
}

export const AddPerson: React.FunctionComponent<Props> = ({ onCreate }) => {
  const [addName, setName] = useState('')

  const clearTodo = () => setName('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onCreate(addName)
        clearTodo()
      }}
    >
      <label>
        Nombres
        <input value={addName} onChange={event => setName(event.target.value)} />
      </label>
      <button type='submit'>Add name</button>

    </form>
  )
}