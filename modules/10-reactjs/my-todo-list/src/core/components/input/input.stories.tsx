import React from 'react'
import { Input } from './input'

export default {
  title: 'Input',
  component: Input
}

export const primary = () => <Input theme="primary" placeholder="write here"></Input>
export const secondary = () => <Input theme="secondary"></Input>