import React, { useContext } from 'react'
import { TodoContext } from './todo-context';

export const: React.FR = () => {
    const { todos } = useContext(TodoContext)

    return <span>{todos.length}</span>
}