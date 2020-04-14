import React from 'react'
import { MyExThree } from './my-ex-three'
import { render, fireEvent } from '@testing-library/react'

describe('MyExThree', () => {
  it('should receive an input without vowels', () => {
    const { getByLabelText } = render(<MyExThree/>)
    const input = getByLabelText('input')

    fireEvent.change(input, { target: { value: 'a'}})

    expect(input).toHaveValue('')
  })
  it('should receive an input with consonants', () => {
    const { getByLabelText } = render(<MyExThree/>)
    const input = getByLabelText('input')

    fireEvent.change(input, { target: { value: 'f'}})

    expect(input).toHaveValue('f')
  })
})