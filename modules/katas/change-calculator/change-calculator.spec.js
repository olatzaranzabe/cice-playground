import { Calculator } from './change-calculator'

describe('calculator', () => {
  it('should return change of small bill', () => {
    const given = 100
    const result = new Calculator()

    const actual = result.calculator(given)

    expect(actual).toEqual([50, 50])
  })
})
