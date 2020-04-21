type Action = { type: 'INCREMENT' }
//type ActionDecrement = { type: 'DECREMENT' }

export function reducer(state: number = 0, action: any): number {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
  }
}
