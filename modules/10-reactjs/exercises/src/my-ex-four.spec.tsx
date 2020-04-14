import React from 'react'
import { MyExFour } from './my-ex-four'
import { render, fireEvent } from '@testing-library/react'

describe('MyExFour', () => {
  it('should get the date when click on the button', () => {
    const { getByRole } = render(<MyExFour/>)
    const input = getByRole('button')

    fireEvent.click(button)
    
    expect(button).toHaveTextContent('n')
  })
})