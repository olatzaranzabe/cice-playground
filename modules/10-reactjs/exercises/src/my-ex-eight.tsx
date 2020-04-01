import React, { useState, CSSProperties} from 'react'
import styles from './my-ex-eight.module.css'

interface Props {
  percentage: number
}
export const MyExEight: React.FC<Props> = ({ percentage}) => {

    const degrees = ( 360 * percentage) / 100
 return (
  <>
    <div className={styles.graph} style={{'--graph-percentage': `${degrees}deg`} as CSSProperties}></div>
  </>
 )
}
