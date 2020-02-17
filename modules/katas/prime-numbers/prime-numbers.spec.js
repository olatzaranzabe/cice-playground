import { PrimeNumbers } from './prime-numbers'

describe('PrimeNumbers', () => {
    it('should be an array', () => {
        const given = 11
        const result = new PrimeNumbers()

        const actual = result.isPrimeNumber(given)

        expect(actual).toEqual([11])
    })

    it('should return an array of prime numbers', () => {
        const given = 10

        expect(actual).toEqual([2, 5])
    })
})
