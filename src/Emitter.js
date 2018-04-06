export default class Emitter {

  constructor() {
    this.events = {};
  }

  on(event, handler) {

    if (!this.events[event.name]) {
      this.events[event.name] = [];
    }

    if (this.events[event.name].indexOf(handler) === -1) {
      this.events[event.name].push(handler);
    }

  }

  off(event, handler) {
    const idx = this.events[event.name].indexOf(handler);
    if (idx !== -1) {
      this.events[event.name].splice(idx, 1);
    }
  }

  emit(event, ...params) {
    this.events[event.name].forEach((el) => {
      el.call(this, params);
    });
  }

}
