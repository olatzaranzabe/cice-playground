import React, { useState} from 'react'
import styles from './my-ex-eight.module.css'

interface Props {
  percentage: number
}
export const MyExEight: React.FC = () => {

  const [ percentage, setPercentage ] = useState(0)
  
 return (
  <>
    <div className={styles.graph} style={{'--graph-percentage': percentage}}></div>
  </>
 )
}
