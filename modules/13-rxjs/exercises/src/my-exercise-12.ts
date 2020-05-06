
import { BehaviorSubject, fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators'

export const subject = new BehaviorSubject({count: 0, isPaused: true})
export const counter = subject.asObservable().pipe( map(value => value.count))

 const stop = fromEvent(document.getElementById('stop')!, 'click').pipe(tap(() => subject.next({...subject.getValue(), isPaused: true})))

 const play = fromEvent(document.getElementById('play')!, 'click').pipe(tap(() => subject.next({...subject.getValue(), isPaused: false})))

