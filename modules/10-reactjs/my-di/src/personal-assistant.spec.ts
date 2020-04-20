import { PersonalAssistant } from './personal-assistant'
import { Greeter } from './greeter'

describe('PersonalAssistant', () => {
  it('should get the morning routine without casting', () => {
    const mock = jest.fn()
    mock.mockReturnValue('Hello')

    const PersonalAssistant = new PersonalAssistant(greeter)
  })

})