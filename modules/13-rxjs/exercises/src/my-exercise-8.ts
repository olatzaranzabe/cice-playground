
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators'

export const onClickScroll = () => fromEvent(document, 'click').pipe(map((e: Event) => console.log(e)));