import { from } from 'rxjs'
import { filter } from 'rxjs/operators'

const array = from([1, 2, 3, 4, 5]);
const parNumbers = array.pipe(filter(x => x % 2 === 0));