import { double } from './exercise-1'
import { tap } from 'rxjs/operators'
import { even } from './exercise-2'
import { onClickCount } from './exercise-3'

// import { triple } from './my-exercise-6'
// import { interval } from './my-exercise-7';
// import { onClickScroll } from './my-exercise-8';
// import { sendRequest } from './my-exercise-9';
import { counter } from './my-exercise-12';

const render = (tag: string) =>
  tap(x => {
    const output = document.querySelector(tag)!
    output.innerHTML += `Value ${x} emitted<br/>`
  })

// double([1, 2, 3, 4, 5]).pipe(render('#exercise-1')).subscribe()
// even([1, 2, 3, 4, 5]).pipe(render('#exercise-2')).subscribe()
// onClickCount().pipe(render('#exercise-3')).subscribe()

// triple([1, 2, 3, 4, 5]).pipe(render('#my-exercise-6')).subscribe()

// interval().pipe(render('#my-exercise-7')).subscribe()
//onClickScroll().pipe(render('#my-exercise-8')).subscribe()

//sendRequest().pipe(render('#my-exercise-9')).subscribe()

counter.pipe(render('#my-exercise-12')).subscribe()