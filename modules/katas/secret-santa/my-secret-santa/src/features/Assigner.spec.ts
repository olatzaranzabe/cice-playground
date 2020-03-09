import { Assigner } from './Assigner'

describe('Assigner', () => {
  it('should assign each name to another name', () => {
    const names = ['Zoe', 'Roe', 'Ana']
    const assigner = new Assigner(() => 0.3)

    const actual = assigner.assign(names)

    expect(actual).toEqual({ Zoe: 'Ana', Roe: 'Zoe', Ana: 'Roe'})
  })
})
