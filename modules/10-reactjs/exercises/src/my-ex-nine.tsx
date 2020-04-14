import React, { useState } from 'react'
import styles from './my-ex-nine.module.css'

export const MyExNine: React.FC = () => {

  const getWidth = () => window.innerWidth 
  const getHeight = () => window.innerHeight
  
  const [ pageHeight, setPageHeight ] = useState(getHeight())
  const [ pageWidth, setPageWidth ] = useState(getWidth())
  const resizeListener = () => {
    setPageHeight(getHeight())
    setPageWidth(getWidth())
  }
  window.addEventListener('resize', resizeListener);

 return (
  <>
    <p>height: {pageHeight}px </p>
    <p>width: {pageWidth}px </p>
  </>
 )
}
