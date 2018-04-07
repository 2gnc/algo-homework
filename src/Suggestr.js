/**
* вариант 1 - сравнение регулярками
* вариант 2 - предварительно разбить весь массив по подмассивам 
* по количеству символов в названии улицы 
*/

export default class Suggestr {
  
  constructor(data) {
    this.data = data;
    this.dataVol = data.length;
    this.dataSorted = this.dataSort();
    this.dataSortedByAlphabet = this.dataSortV2();
  }

  /**
   * сортирует исходный массив на подмассивы по длинне строк
   * @param data исходный массив улиц
   * @returns Объект где в ключах возможные длинны строк исходного массива
   */
  dataSort() {
    const preSorted = {};
    for (let i = 0; i < this.dataVol; i += 1) {
      const le = this.data[i].length;
      if (!preSorted[le]) {
        preSorted[le] = [];
      }
      preSorted[le].push(this.data[i]);
    }
    return preSorted;
  }

  dataSortV2() {
    const sorted = {};
    return sorted;
  }

/*  suggestV3(input) {

  }*/

  suggestV2(input) {

    const variants = [];
    let count = 0;
    const mask = new RegExp(input, 'i');

    const le = input.length;
    for (let key in this.dataSorted) {
      if (+key >= le) {
        let smallerArr = this.dataSorted[key];
        for (let i = 0; i < smallerArr.length; i += 1) {
          if (mask.test(smallerArr[i])) {
            variants.push(smallerArr[i]);
            count += 1;
            if (count === 10) {
              break;
            }
          }
        }
        if (count === 10) {
          break;
        }
      }
    }
    return variants;
  }

  vlob(input) {
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
