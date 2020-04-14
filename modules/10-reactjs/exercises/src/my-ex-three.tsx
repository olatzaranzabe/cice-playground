import React, { useState } from 'react'

export const MyExThree: React.FC = () => {

  const [inputValue, setInputValue] = useState('');

  const handlePress = (event: React.ChangeEvent<HTMLInputElement> ) => {
    const character = event.target.value;

    if(!['a', 'e', 'i', 'o', 'u'].includes(character.toLowerCase()) ) {
      setInputValue(event.target.value)
    }
  }
 return (
  <div>
    <input aria-label="input" type="text" value={inputValue} onChange={event => handlePress(event)} />    
  </div>
 )
}
