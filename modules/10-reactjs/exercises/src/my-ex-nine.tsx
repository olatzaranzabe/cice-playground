import React, { useState, CSSProperties} from 'react'
import styles from './my-ex-eight.module.css'

export const MyExNine: React.FC = () => {

  const [ percentage, setPercentage ] = useState(0)
    const degrees = ( 360 * 100)/ percentage
 return (
  <>
    <div className={styles.graph} style={{'--graph-percentage': `${degrees}deg`} as CSSProperties}></div>
    <p>{percentage}</p>
  </>
 )
}
