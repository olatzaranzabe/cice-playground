import React, { createContext, useContext, useState } from 'react'

export const ComponentB: React.FC = () => {
    const { counter, setCounter, incrementCounter } = useContext(CounterContext)
    return (
      <>
        {({ counter, setCounter }) => (
          <button onClick={() => setCounter(counter + 10)}>{counter}</button>
        )}
      </>
    )
  }