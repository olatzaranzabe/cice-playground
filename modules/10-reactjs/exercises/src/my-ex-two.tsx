import React, { useState } from 'react'

export const MyExTwo: React.FC = () => {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount( count + 1)
  }
 return (
   <>
    <p>clicked {count} times</p>
    <button onClick={handleClick}>Click here</button>
  </>
 )
}
