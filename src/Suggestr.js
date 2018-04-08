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
  /**
 * Сравнивает символы в массивах, начиная с конца
 * @param {array} substr 
 * @param {array} needle 
 * @returns Вовзращает или true или символ и его номер в подстроке, который не совпал
 * с соответствующим ему символом иголки
 */
  comparer(substr, needle) {
    let isEqual = false;
    let obj = {};
    for (let i = needle.length - 1; i >= 0; i -= 1) {
      if (substr[i] !== needle[i]) {
        obj.num = i;
        obj.letter = substr[i];
        return obj;
      }
      isEqual = true;
    }
    return true;
  }
/**
 * 
 * @param {string} input подстрока для посика
 * @returns {array} массив с найденными улицами
 */
  simpleBoyerMur(input) {
    input = input.toLowerCase();
    // input - подстрока, которую ищем, иголка
    // временнный массив
    const tmp = input.split('');
    // длинна
    const nl = tmp.length;
    // найденные подходящие улицы
    const result = [];
    // счетчик ... а о нужен вообще?
    let count = 0;
    // таблица пропусков, внутри массив объекты с ключем - буквой и числом
    const skipObj = {};
    for (let k = nl-1; k >= 0; k -= 1) {
      const key = tmp[k];

      let skip;
      if (k === nl - 1) {
        skip = nl;
      } else {
        skip = nl - 1 - k;
      }

      if (!skipObj[key] !== key) {
        skipObj[key] = skip;
      }
    }

    for (let i = 0; i < this.dataVol; i += 1) {
      if (this.data[i].length > input.length) {
        // сравниваем последний символ иголки и последний символ подстроки стога
        // с 0 до длинны иголки.
        // последний символ в подстроке стога сена, с которого начинаем.
        // если он последний в стоге - то поиск окончен
        let fromChar = 0;
        let skip = 0;
        let stepLastChar = input.length;
        let subs = this.data[i].toLowerCase();

        while (stepLastChar <= this.data[i].length - 1) {
          let substring = subs.substr(fromChar, input.length).split('');

          let x = this.comparer(substring, input.split(''));
          if (x === true) {
            count += 1;
            result.push(this.data[i]);
            break;
          } else {
            skip = skipObj[x.letter] ? x.num : input.length;
            fromChar += skip;
          }
          stepLastChar += 1;
        }
      }
      if (count === 10) {
        break;
      }
    }
    return result;
  }

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
