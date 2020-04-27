import React from 'react'
import { BaseInput } from '../base-input/base-input'
import { Input } from '../input'

<<<<<<< HEAD
export const TextInput: React.FunctionComponent<Input<string>> = props => {
=======
const cx = bind(styles)

export const TextInput: React.FunctionComponent<Input<string>> = (props) => {
>>>>>>> ddc807721a10a7ada72e8f69403081ed3178d69c
  return <BaseInput {...props} type={'text'} />
}
