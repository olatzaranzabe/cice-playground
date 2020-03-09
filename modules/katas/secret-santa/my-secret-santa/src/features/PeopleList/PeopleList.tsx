import React from 'react'


export const PeopleList: React.FunctionComponent<{names: string[]}> = ({names}) => {
  return (
    <ul>
       {names.map(name => (
        <li>{name}</li>
      ))}
    </ul>
    
  )
}
