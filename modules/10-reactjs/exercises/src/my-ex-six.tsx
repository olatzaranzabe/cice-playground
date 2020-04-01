import React, { useState, useEffect } from 'react'

export const MyExSix: React.FC = () => {
  
  const exercise = localStorage.getItem('exercise');
  const [inputValue, setInputValue] = useState('')
  useEffect( () => {
    if(exercise !== null){
      console.log(exercise)
      setInputValue(exercise);
    }
  }, [] )
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    localStorage.setItem('exercise', event.target.value);
  }
 return (
  <div>
    <input type="text" value={inputValue} onChange={event => handleChange(event)}/>
  </div>
 )
}
