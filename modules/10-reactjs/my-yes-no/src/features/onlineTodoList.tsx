import React, { useEffect, useState} from 'react'
import axios from 'axios'

interface Todo {
    title: string
}
export const OnlineTodoList: React.FunctionComponent<{
}> = () => {
    const [todos, setTodos] = useState<Todo[]>([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
        const todos = res.data;
        //this.setState({ todos })
        console.log(todos)
        setTodos(todos)
      })
    }, []);

  return (
    <div>
    <ul>
        { todos.map( todo => <li>{todo.title}</li>)}
    </ul>
    </div>
  )
}




