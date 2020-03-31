import React, { useState, useReducer } from 'react'
import { Action } from 'history';

interface State {
  isLoading: boolean
  error: 'error' | 'null'
  number: number
}

function reducer (state: State, action: Action): State {
  switch(action.type) {
    case 'started':
    return {
      isLoading: true,
      error: null,
      number: 0
    }
    case 'success':
    return {
      ...state,
      number: action.result
    }
  }
}
export const UseReducerOriginal: React.FC = () => {

  type Action = 
  | { type: 'started' }
  | { type: 'error' }
  | 'number'

 

  const initialState: State = {
    isLoading: false,
    error: 'null',
    number: 0
  }

  const [ state, dispatch] = useReducer(reducer, { number: 0, error: null, isLoading: false});

  const reducer = (state, action) => {
    switch (action) {
      case 'isLoading': return state true;
      case 'error': return state - 1;
      case 'number': return getNumber;
      default: throw new Error('Unexpected action');
    }
  };
  
  const getNumber = async () => {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        const number = Math.floor(Math.random() * 100)
        if (number > 50) {
          reject(new Error('There was an error'))
        }
        resolve(number)
      }, 1000)
    })
  }

  const handleClick = async () => {
    try {
      setError(null)
      setIsLoading(true)
      setNumber(await getNumber())
    } catch (e) {
      setError(e)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <div>
      {error !== null && <p>{error.message}</p>}
      <button onClick={handleClick}>{number}</button>
    </div>
  )
}
