import { ajax } from "rxjs/ajax";
import { fromEvent } from "rxjs";
import { switchMap } from 'rxjs/operators'


export const sendRequest = () => {
  fromEvent(document.getElementById('ajax-input') as HTMLElement, 'keyup').pipe(
    switchMap(() => ajax('https://yesno.wtf/api'))
  ).subscribe(data => console.log(data))
}