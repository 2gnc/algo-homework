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

const dd = new Date();
console.log(Sug.suggest('мари'));

console.log(new Date() - dd);
