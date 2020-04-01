import React, { useState } from 'react'

export const MyExFive: React.FC = () => {
  const initialCount = 10
  const [count, setCounter] = useState(initialCount);

  
  
  
 return (
  <div>
      <p>{count}</p>
      <button onClick={() => setCounter(count - 1)}>Click here</button>
      {count === 0 && <p>BOOM!</p>}
      {count === 0 && <button onClick={() => setCounter(initialCount)}>Reset</button>}
  </div>
 )
}
