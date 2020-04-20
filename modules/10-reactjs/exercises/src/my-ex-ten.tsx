import React, { useState, useEffect } from 'react'


export const MyExTen: React.FC = () => {
    const [ pressKey, setPressKey ] = useState('')

    const downHandler = () => {

      console.log()
    }
    useEffect(() => {
      window.addEventListener('keypress', downHandler)

    }, []);
 return (
  < >
  <p>{pressKey}</p>
  </>
 )
}
