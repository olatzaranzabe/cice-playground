import { MultilingualGreeter } from './multilingual-greeter'
import { SpanishGreeter } from './spanish-greeter'
<<<<<<< HEAD
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
=======
import { EnglishGreeter } from './english-greeter'
import { instance, mock, when } from 'ts-mockito'

describe('MultilingualGreeter', () => {
  it('should say greeting in different languages', () => {
    const spanishGreeter: SpanishGreeter = mock(SpanishGreeter)
    const englishGreeter: EnglishGreeter = mock(EnglishGreeter)
    when(spanishGreeter.hello()).thenReturn('Hola')
    when(englishGreeter.hello()).thenReturn('Hello')
    const multilingualGreeter = new MultilingualGreeter(
      instance(spanishGreeter),
      instance(englishGreeter)
    )
>>>>>>> 89570b31373d948caf602494c8d13759209356bb

    const actual = multilingualGreeter.hello()

    expect(actual).toBe('Hola - Hello')
  })
<<<<<<< HEAD
})
=======
})
>>>>>>> 89570b31373d948caf602494c8d13759209356bb
