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
const tSt = new Date();
em.emit(evA);
console.log('время выполнения', new Date() - tSt);

const Sug = new Suggestr(streets);

const dd = performance.now();
console.log('вариант влоб', Sug.vlob('лени'));

console.log(performance.now() - dd);


// сценарий 2: предварительно обработаем массив
// вызовем у нужных выборок поиск
const kk = performance.now();
console.log(Sug.suggestV2('лени'));
console.log(performance.now() - kk);
