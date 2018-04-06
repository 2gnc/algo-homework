import types from './eventTypes';
import Event from './Event';
import Emitter from './Emitter';
import scrb from './subscriber';

const evA = new Event(types.EV_ONE, 'evA');
const em = new Emitter();

const x = scrb(null, 10000);
x.forEach((itm) => {
  em.on(evA, itm);
});
const tSt = new Date();
em.emit(evA);
console.log('время выполнения', new Date() - tSt);

