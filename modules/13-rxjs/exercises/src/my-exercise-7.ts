import { tap } from 'rxjs'
import { interval } from 'rxjs/operators'

export const interv = () => interval(1000).pipe(
  tap((x: number) => console.log(x))
)