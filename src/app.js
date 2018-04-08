import types from './eventTypes';
import streets from './streets';
import Event from './Event';
import Emitter from './Emitter';
import scrb from './subscriber';
import Suggestr from './Suggestr';

const evA = new Event(types.EV_ONE, 'evA');
const em = new Emitter();

const x = scrb(1);
x.forEach((itm) => {
  em.on(evA, itm);
});
em.emit(evA);

const Sug = new Suggestr(streets);

const dd = performance.now();
console.log('вариант влоб', Sug.vlob('оле'));

console.log(performance.now() - dd);

const kk = performance.now();
console.log('предварительная сортировка по длинне строки', Sug.suggestV2('оле'));
console.log(performance.now() - kk);

console.log('*****');
const tt = performance.now();
const xx = Sug.simpleBoyerMur('Ale');
console.log(xx);
console.log(performance.now() - tt);
