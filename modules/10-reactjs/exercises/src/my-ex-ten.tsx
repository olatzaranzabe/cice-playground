import React, { useState, useEffect } from 'react'

const useKeyHistory = () => {
  const [ keys, setKeys] = useState<string[]>([])
}
export const MyExTen: React.FC = () => {
    const [ pressKey, setPressKey ] = useState('')

    const downHandler = (e: KeyboardEvent) => {
//setKeys([...keys, e.key])
      setPressKey('key')
    }
    useEffect(() => {
      window.addEventListener('keypress', downHandler)

    }, []);
    const keys = useKeyHistory()
 return (
  <>
  <ul>{}</ul>
  </>
 )
}
