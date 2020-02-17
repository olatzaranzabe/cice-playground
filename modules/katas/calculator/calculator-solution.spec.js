import { calculator } from './calculator-solution'

describe('calculator', () => {
  it('should calculate a simple sum', () => {
    const given = '2+2'

    const actual = calculator(given)

    expect(actual).toBe(4)
  })
  it('should calculate a multiple sum', () => {
    const given = '2+2+2'

    const actual = calculator(given)

    expect(actual).toBe(6)
  })
})
