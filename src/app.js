import types from './eventTypes';
import Event from './Event';
import Emitter from './Emitter';

const evA = new Event(types.EV_ONE, 'evA');
// const evB = new Event(eventsTypes.EV_TWO, 'evB');
// const evC = new Event(eventsTypes.EV_ONE, 'evC');
// const evD = new Event(eventsTypes.EV_TWO, 'evD');
// const evE = new Event(eventsTypes.EV_THREE, 'evE');

const haA = () => {
  setTimeout(() => { console.log('haA'); }, 500);
};

const haB = () => {
  setTimeout(() => { console.log('haB'); }, 1000);
};

const haC = () => {
  setTimeout(() => { console.log('haC'); }, 1500);
};

const haD = () => {
  setTimeout(() => { console.log('haD'); }, 2000);
};

const haE = () => {
  setTimeout(() => { console.log('haE'); }, 2500);
};

const em = new Emitter();

em.on(evA, haA);
em.on(evA, haB);
em.on(evA, haB);
em.on(evA, haC);
em.on(evA, haD);
em.on(evA, haE);

em.off(evA, haC);
em.off(evA, haC);

em.emit(evA);
