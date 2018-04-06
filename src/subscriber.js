// сгенерировать заданное число колбэков
// подписать их все по порядку на заданное событие

const subscriber = (ev, num) => {
  const calbacks = [];
  for (let i = 0; i < num; i += 1) {
    calbacks.push(() => { console.log(`я колбэк ${i}`); });
  }
  return calbacks;
};

export default subscriber;
