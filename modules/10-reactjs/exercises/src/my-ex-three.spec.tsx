import React from 'react'
import { MyExThree } from './my-ex-three'
import { render } from '@testing-library/react'

describe('MyExThree', () => {
  it('should...', () => {
    const { getByRole } = render(<MyExThree/>)
    const button = getByRole('button')
    expect().toHaveTextContent('o')
  })
})