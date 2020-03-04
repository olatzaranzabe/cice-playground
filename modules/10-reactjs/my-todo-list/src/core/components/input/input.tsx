import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './input.module.css'

const cx = bind(styles)

interface Props extends React.HTMLProps<HTMLInputElement> {
    theme?: 'primary' | 'secondary'
  }
  
  export const Input: React.FunctionComponent<Props> = ({
      children,
      className,
      theme,
      ...rest
    }) => {
      return (
        <input
          className={cx('input', theme, className)}
          {...rest}
        />

      )
    };