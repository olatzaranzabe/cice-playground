import { MultilingualGreeter } from './multilingual-greeter'
import { SpanishGreeter } from './spanish-greeter'
import { EnglishGreeter } from './englishquiza-greeter'



describe('MultilingualGreeter', () => {
  it('should say greeting in different languages', () => {
    const spanishGreeter: spanishGreeter = {
      hello: jest.fn().mockReturnValue('Hola'),
    }
    const englishGreeter: englishGreeter = {
      hello: jest.fn().mockReturnValue('Hello'),
    }
    const multilingualGreeter = new MultilingualGreeter(spanishGreeter, englishGreeter)

    const actual = multilingualGreeter.hello()

    expect(actual).toBe('Hola - Hello')
  })
})