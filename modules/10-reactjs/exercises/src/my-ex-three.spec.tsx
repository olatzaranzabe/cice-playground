import React from 'react'
import { MyExThree } from './my-ex-three'
import { render, fireEvent } from '@testing-library/react'

describe('MyExThree', () => {
  it('should...', () => {
    const { getByRole } = render(<MyExThree/>)
    const button = getByRole('button')

    fireEvent.change(input, { target: { value: }})
    expect(button).toHaveTextContent('o')
  })
})