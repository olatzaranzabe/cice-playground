import React, { useState } from 'react'

export const TodoContext = React.createContext<{
    todos: Todo[]
  }>({ counter: 0, setCounter: () => {}, incrementCounter: () => {} })