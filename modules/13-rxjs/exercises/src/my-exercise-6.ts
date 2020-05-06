import { from } from 'rxjs'
import { map, filter } from 'rxjs/operators'

export const triple = (array: number[]) => 
  from(array)
    .pipe(map(x => x * 3), filter(x => x % 2 === 0))



