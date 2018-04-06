// вариант 1 - сравнение регулярками
// вариант 2 - приведение к одному регистру и сравнение посимвольно
// вариант 3 - что-нибудь экзотическое

// *** предпосылки ***

export default class Suggestr {
  
  constructor(data) {
    this.data = data;
    this.dataVol = data.length;
  }

  suggest(input) {
    const variants = [];
    let count = 0;
    const mask = new RegExp(input, 'i');
    for (let i = 0; i <= this.dataVol; i += 1) {

      if (mask.test(this.data[i])) {
        count += 1;
        variants.push(this.data[i]);
      }
      if (count === 10) {
        break;
      }
    }
    return variants;
  }

}
