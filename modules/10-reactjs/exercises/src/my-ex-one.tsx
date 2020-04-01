import React from 'react'

export const MyExOne: React.FC = () => {
  const range = Array.from({ length: 50}, (key, value) => value)
  return (
    <ul>
      {range.map( x => {
        return <li key={x}>{x + 1}</li>
      }) }
    </ul>
  )
}
