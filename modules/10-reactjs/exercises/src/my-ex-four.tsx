import React, { useState, useEffect } from 'react'

export const MyExFour: React.FC = () => {
  const [date, setDate] = useState('');

  
  useEffect(() => {
    const today = new Date().toISOString
  });
 return (
  <div>

      <button onClick={() => setDate(date)}></button>
  </div>
 )
}
