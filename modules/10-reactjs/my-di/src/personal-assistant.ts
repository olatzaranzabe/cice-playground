import { injectable, inject } from "inversify";
import { Greeter } from './greeter'
import { TYPES } from './types'

@injectable()
export Class PersonalAssistant {
  
  constructor(@inject(TYPES.GREETER) private readonly greeter: Greeter){}
    morningRoutine(name: string) {
      return `${this.greeter.hello()}`
    }



}